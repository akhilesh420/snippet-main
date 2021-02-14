import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, throwError } from 'rxjs';
import { PostContent, PostDetails, StickerDetails } from './post.model';

import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  placeholderImg = 'assets/default image/blank_image@2x.png';

  private postDetailsCollection: any;
  private postContentCollection: any;
  private stickerDetailsCollection: any;
  private stickerContentCollection: any;

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
  // Add post content from cloud firestore
  addPostContentRef(pid: string, contentRef: PostContent) {
    const obj = {...contentRef}
    this.postContentCollection.doc(pid).set(obj);
  }

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
  addPostContent(pid: string, content: any, customMetadata: any) {
    // Upload to storage
    const file = content;
    const filePath = 'posts/'+pid+'/original';
    const ref = this.storage.ref(filePath);
    const metadataUp = {contentType: file.type, ...customMetadata};
    const task = ref.put(file, metadataUp);
    return task.percentageChanges();
  }
  // --------------------------------------- Sticker content ---------------------------------------

  // Add sticker content from cloud firestore
  addStickerContentRef(pid: string, contentRef: PostContent) {
    const obj = {...contentRef}
    this.stickerContentCollection.doc(pid).set(obj);
  }

  // Get sticker content from firebase storage by UID
  getStickerContent(pid: string) {
    const ref = this.storage.ref('stickers/' + pid +'/small');
    return ref.getDownloadURL();
  }

  // Add sticker content for post from firebase storage
  addStickerContent(pid: string, content: any, customMetadata: any) {
    // Upload to storage
    const file = content;
    const filePath = 'stickers/'+pid+'/original';
    const ref = this.storage.ref(filePath);
    const metadataUp = {contentType: file.type, ...customMetadata};
    const task = ref.put(file, metadataUp);
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
