import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, throwError } from 'rxjs';
import { PostContent, PostDetails, StickerDetails } from './post.model';

import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  placeholderImg = 'assets/default image/blank_image@2x.png';

  private postDetailsCollection: AngularFirestoreCollection<PostDetails>;
  private postContentCollection: AngularFirestoreCollection<PostContent>;
  private stickerDetailsCollection: AngularFirestoreCollection<StickerDetails>;
  private stickerContentCollection: AngularFirestoreCollection<PostContent>;

  private stickerContentList: {pid: string, obs: BehaviorSubject<any>}[] = [];
  private postContentList: {pid: string, obs: BehaviorSubject<any>}[] = [];

  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) {
    this.postDetailsCollection = afs.collection<PostDetails>('post details');
    this.postContentCollection = afs.collection<PostContent>('post content');
    this.stickerDetailsCollection = afs.collection<StickerDetails>('sticker details');
    this.stickerContentCollection = afs.collection<PostContent>('sticker content');
   }

  //--------------------------------------- Post details ---------------------------------------
  // Get post details from cloud firestore by PID
  getPostDetails(pid: string) {
    return this.afs.doc<PostDetails>('post details/' + pid).valueChanges();
  }

  // Add post details from cloud firestore
  addPostDetails(pid: string, details: PostDetails) {
    const obj = {uid: details.uid, title: details.title, description: details.description, dateCreated: details.dateCreated};
    this.postDetailsCollection.doc(pid).set(obj);
  }

  //--------------------------------------- Stickers details ---------------------------------------
  // Get sticker details from cloud firestore by PID
  getStickerDetails(pid: string) {
    return this.afs.doc<StickerDetails>('sticker details/' + pid).valueChanges();
  }

  // Add sticker details from cloud firestore
  addStickerDetails(pid: string, details: StickerDetails) {
    const obj = {amountReleased: details.amountReleased, price: details.price};
    this.stickerDetailsCollection.doc(pid).set(obj);
  }

  // --------------------------------------- Post content ---------------------------------------
  // Get post content from cloud firestore by UID
  getPostContentRef(pid: string) {
    return this.afs.doc<PostContent>('post content/' + pid).valueChanges();
  }

  // Add post content from cloud firestore
  addPostContentRef(pid: string, content: PostContent) {
    const obj = {...content}
    this.postContentCollection.doc(pid).set(obj);
  }

  // Get post content from firebase storage by UID
  getPostContent(pid: string, postContentRef: PostContent) {
    let index = this.postContentList.findIndex(details => {
      return details.pid === pid;
    })

    if (index === -1) {
      this.postContentList.push({pid: pid, obs: new BehaviorSubject<any>(undefined)});
      let secIndex = this.postContentList.length - 1;
      const ref = this.storage.ref('Post/' + postContentRef.name);
      ref.getDownloadURL().subscribe(response => {
        this.postContentList[secIndex].obs.next(response);
      });
      return this.postContentList[secIndex].obs
    } else {
      return this.postContentList[index].obs
    }
  }

  // --------------------------------------- Sticker content ---------------------------------------
  // Get sticker content from cloud firestore by UID
  private getStickerContentRef(pid: string) {
    return this.afs.doc<PostContent>('sticker content/' + pid).valueChanges();
  }

  // Add sticker content from cloud firestore
  addStickerContentRef(pid: string, content: PostContent) {
    const obj = {...content}
    this.stickerContentCollection.doc(pid).set(obj);
  }

  // Get sticker content from firebase storage by UID
  getStickerContent(pid: string, size: string='sm_') {
    let index = this.stickerContentList.findIndex(details => {
      return details.pid === pid;
    })

    if (index === -1) {
      this.stickerContentList.push({pid: pid, obs: new BehaviorSubject<any>(null)});
      let secIndex = this.stickerContentList.length - 1;
      this.getStickerContentRef(pid).pipe(catchError(this.handleError)).subscribe((response: PostContent) => {
        const ref = this.storage.ref('Post/' + size + response.name);
        ref.getDownloadURL().subscribe(response => {
          if (response) {
            this.stickerContentList[secIndex].obs.next(response);
          }
        }, error => {
          if (error.code_ === "storage/object-not-found") {
            const ref = this.storage.ref('Post/' + response.name);
            ref.getDownloadURL().subscribe(response => {
              if (response) {
                this.stickerContentList[secIndex].obs.next(response);
              }
            });
          } else {
            return;
          }
        });
      });
      return this.stickerContentList[secIndex].obs
    } else {
      return this.stickerContentList[index].obs
    }
  }

  // --------------------------------------- Content storage ---------------------------------------
  // Add content for post from firebase storage
  addContent(name: string, content: any) {
    // Upload to storage
    const file = content;
    const filePath = 'Post/'+name;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    return task.percentageChanges();
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
