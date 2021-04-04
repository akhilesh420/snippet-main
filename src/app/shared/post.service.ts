import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { forkJoin, throwError } from 'rxjs';
import { PostContent, PostDetails, StickerDetails, CustomMetadata } from './post.model';

import { Injectable } from '@angular/core';
import { MiscellaneousService, PopUp } from './miscellaneous.service';
import { Collection } from './activity.model';
import firebase from 'firebase';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  placeholderImg = 'assets/default image/blank_image@2x.png';

  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage,
              private miscellaneousService: MiscellaneousService) {}

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

  // Get post content from firebase storage by UID
  getPostContent(pid: string) {
    const ref = this.storage.ref('posts/' + pid +'/original');
    return ref.getDownloadURL();
  }

  // Get post metadata from firebase storage by UID
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
    const metadataUp = {contentType: file.type, customMetadata: {...customMetadata}};
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
    const metadataUp = {contentType: file.type, customMetadata: {...customMetadata}};
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

      let pid = this.afs.createId();
      let dateCreated = new Date();

      let postSubs =  this.addPostContent(pid, postFile, postMeta);
      let stickerSubs = this.addStickerContent(pid, stickerFile, stickerMeta);

      this.miscellaneousService.startLoading();

      const subs = forkJoin([postSubs, stickerSubs]).subscribe(async results => {
        if (results[0] != 100 && results[1] != 100) return;

        const batch = this.afs.firestore.batch();

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
                    .then(() => subs.unsubscribe())
                    .catch(async (e) => {
                      console.log('Post creation failed:', e);
                      this.miscellaneousService.setPopUp(new PopUp("There was a problem while creating your post! Try again later",
                                                                   'Okay',
                                                                   undefined,
                                                                   ['default', 'reject']));
                    })
                    .finally(() => this.miscellaneousService.endLoading());
      }, e => {
        console.log('Post creation failed:', e);
      this.miscellaneousService.endLoading();
      this.miscellaneousService.setPopUp(new PopUp("There was a problem while creating your post! Try again later",'Okay', undefined, ['default', 'reject']));
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
