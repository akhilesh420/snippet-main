import { MixpanelService } from './mixpanel.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { forkJoin, throwError } from 'rxjs';
import { PostContent, PostDetails, StickerDetails, CustomMetadata, Feed } from './post.model';

import { Injectable } from '@angular/core';
import { MiscellaneousService, PopUp } from './miscellaneous.service';
import { Collection } from './activity.model';

import { catchError, first } from 'rxjs/operators';

import firebase from 'firebase';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  placeholderImg = 'assets/default image/blank_image@2x.png';

  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage,
              private miscellaneousService: MiscellaneousService,
              private mixpanelService: MixpanelService) {}

  //--------------------------------------- Post infoormation ---------------------------------------
  // Get post info from cloud firestore by PID
  getPostInfo(pid: string) {
    return this.afs.doc<Feed>('posts/' + pid).valueChanges();
  }

  //--------------------------------------- Post details ---------------------------------------
  // Get post details from cloud firestore by PID
  getPostDetails(pid: string) {
    return this.afs.doc<PostDetails>('post details/' + pid).valueChanges();
  }

  //--------------------------------------- Stickers details ---------------------------------------
  // Get sticker details from cloud firestore by PID
  getStickerDetails(pid: string) {
    return this.afs.doc<StickerDetails>('sticker details/' + pid).valueChanges();
  }

  // --------------------------------------- Post content ---------------------------------------

  // Get post content from cloud firestore by PID
  getPostContentRef(pid: string) {
    return this.afs.doc<PostContent>('post content/' + pid).valueChanges();
  }

  // Get post content from firebase storage by PID
  getPostContent(pid: string) {
    const ref = this.storage.ref('posts/' + pid +'/original');
    return ref.getDownloadURL();
  }

  // Get post metadata from firebase storage by PID
  getPostMetadata(pid: string) {
    const ref = this.storage.ref('posts/' + pid +'/original');
    return ref.getMetadata();
  }

  // Add post content for post from firebase storage
  addPostContent(pid: string, content: File, customMetadata: CustomMetadata) {
    // Upload to storage
    const file = content;
    const filePath = 'posts/'+pid+'/original';
    const ref = this.storage.ref(filePath);
    const metadataUp = {contentType: file.type, cacheControl: 'public, max-age=31536000', customMetadata: {...customMetadata}};
    console.log(metadataUp);
    const task = ref.put(file, metadataUp);
    return task.percentageChanges();
  }
  // --------------------------------------- Sticker content ---------------------------------------

  // Get sticker content from firebase storage by UID
  getStickerContent(pid: string) {
    const ref = this.storage.ref('stickers/' + pid +'/small');
    return ref.getDownloadURL().pipe(
      catchError(err => {
        this.handleError(err);
        const ref = this.storage.ref('stickers/' + pid +'/original');
        return ref.getDownloadURL().pipe(
          catchError(err => {
            return this.handleError(err);
          }));
      }));
  }

  // Add sticker content for post from firebase storage
  addStickerContent(pid: string, content: File, customMetadata: CustomMetadata) {
    // Upload to storage
    const file = content;
    const filePath = 'stickers/'+pid+'/original';
    const ref = this.storage.ref(filePath);
    const metadataUp = {contentType: file.type, cacheControl: 'public, max-age=31536000', customMetadata: {...customMetadata}};
    console.log(metadataUp);
    const task = ref.put(file, metadataUp);
    return task.percentageChanges();
  }

  // --------------------------------------- Create new post ---------------------------------------

  async newPost(uid:string,
                postFile: File,
                postMeta: CustomMetadata,
                stickerFile: File,
                stickerMeta: CustomMetadata,
                postDetails: PostDetails,
                stickerDetails: StickerDetails) {
      this.mixpanelService.timeEvent('create post');
      let success: boolean;

      let pid = this.afs.createId();

      let postSubs =  this.addPostContent(pid, postFile, postMeta);
      let stickerSubs = this.addStickerContent(pid, stickerFile, stickerMeta);

      this.miscellaneousService.startLoading();

      const subs = forkJoin([postSubs, stickerSubs]).pipe(first(progress => progress[0] === 100 && progress[1] === 100))
        .subscribe(async results => {
          const batch = this.afs.firestore.batch();
          const dateCreated = new Date();

          // Post
          const postsDoc = this.afs.firestore.doc('posts/'+pid);
          const postDetailsDoc = this.afs.firestore.doc('post details/'+pid);
          const postContentDoc = this.afs.firestore.doc('post content/'+pid);
          const stickerDetailsDoc = this.afs.firestore.doc('sticker details/'+pid);
          const stickerContentDoc = this.afs.firestore.doc('sticker content/'+pid);

          const activityPrivateDoc = this.afs.firestore.doc('activity/'+pid+'/private/details');
          const activityCollectedDoc = this.afs.firestore.doc('activity/'+pid+'/metrics/collected');
          const activityViewsDoc = this.afs.firestore.doc('activity/'+pid+'/metrics/views');
          // -----

          // user
          const profileFeedDoc = this.afs.firestore.doc('feed/'+uid+'/posts/'+pid);
          const exploreFeedDoc = this.afs.firestore.doc('feed/explore/global/'+pid);
          // -----

          // post
          batch.set(postDetailsDoc, {...postDetails});
          batch.set(postContentDoc, {...new PostContent(pid, +postMeta.width, +postMeta.height, postFile.type)});
          batch.set(stickerDetailsDoc, {...stickerDetails});
          batch.set(stickerContentDoc, {...new PostContent(pid, +stickerMeta.width, +stickerMeta.height, stickerFile.type)});

          // activity
          batch.set(activityPrivateDoc, {id: pid, type: 'post'});
          batch.set(activityCollectedDoc, {counter: 1}); //1 sticker given to creator
          batch.set(activityViewsDoc, {counter: 0});

          const feedObj = {creatorID: uid, dateCreated: dateCreated};
          // feed
          batch.set(profileFeedDoc, feedObj);
          batch.set(exploreFeedDoc, feedObj);
          batch.set(postsDoc, feedObj);

          //Creator sticker collection
          const collection: Collection = new Collection(uid, uid, pid, dateCreated.getTime());

          const cid = this.afs.createId();

          //Add collection
          batch.set(this.afs.firestore.doc('collection/'+cid), {...collection});

          //Add holder and user collection
          const collectionObj = {cid: cid, timeStamp: collection.timeStamp, creatorID: collection.collecteeID};

          batch.set(this.afs.firestore.doc('feed/'+ collection.collectorID + '/collection/' + collection.pid), collectionObj);
          batch.set(this.afs.firestore.doc('posts/'+ collection.pid + '/holders/' + collection.collectorID), collectionObj);

          //Update Activity
          batch.update(this.afs.firestore.doc('activity/'+ collection.collecteeID + '/metrics/collected'),
                        {counter: firebase.firestore.FieldValue.increment(1),
                          cid: cid}); //user

          await batch.commit()
                      .then(() => {
                          subs.unsubscribe();
                          success = true;

                          //MIXPANEL
                          this.mixpanelService.increment('posts');
                          this.mixpanelService.increment('stickers released', stickerDetails.amountReleased);
                        })
                      .catch(async (e) => {
                        console.log('Post creation failed:', e);
                        this.miscellaneousService.setPopUp(new PopUp("There was a problem while creating your post! Try again later",
                                                                    'Okay',
                                                                    undefined,
                                                                    ['default', 'reject']));
                        success = false;
                      })
                      .finally(() => {
                        this.miscellaneousService.endLoading();
                        this.mixpanelService.createPostTrack({
                          postType: postFile.type,
                          stickerType: stickerFile.type,
                          postFileSize: postFile.size,
                          stickerFileSize: stickerFile.size,
                          postDimensions: {width: +postMeta.width, height: +postMeta.height},
                          stickerDimensions: {width: +stickerMeta.width, height: +stickerMeta.height},
                          stickerReleased: stickerDetails.amountReleased,
                          premium: false,
                          price: 0,
                          success: success
                        });
                      });
        }, e => {
          console.log('Post creation failed:', e);
          this.miscellaneousService.endLoading();
          this.miscellaneousService.setPopUp(new PopUp("There was a problem while creating your post! Try again later",'Okay', undefined, ['default', 'reject']));
          this.mixpanelService.createPostTrack({
            postType: postFile.type,
            stickerType: stickerFile.type,
            postFileSize: postFile.size,
            stickerFileSize: stickerFile.size,
            postDimensions: {width: +postMeta.width, height: +postMeta.height},
            stickerDimensions: {width: +stickerMeta.width, height: +stickerMeta.height},
            stickerReleased: stickerDetails.amountReleased,
            premium: false,
            price: 0,
            success: false
          });
        });
  }

  // --------------------------------------- Error handling ---------------------------------------
  handleError(error) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
