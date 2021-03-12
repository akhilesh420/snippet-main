import { BehaviorSubject, Observable, throwError} from 'rxjs';
import { catchError, map,  startWith } from 'rxjs/operators';
import { ProfileDetails, PersonalDetails, ProfileSticker, DisplayPicture, OnBoarding, Credential } from './profile.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  placeholderDP = 'assets/images/dpPlaceholder.svg';

  // Collection
  private profileDetailsCollection: AngularFirestoreCollection<ProfileDetails>;
  private profileStickersCollection: AngularFirestoreCollection;
  private displayPictureCollection: AngularFirestoreCollection<DisplayPicture>;
  private onBoardingCollection: AngularFirestoreCollection<OnBoarding>;

  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) {
    this.profileDetailsCollection = afs.collection<ProfileDetails>('profile details');
    this.profileStickersCollection = afs.collection<ProfileSticker[]>('profile stickers');
    this.displayPictureCollection = afs.collection<DisplayPicture>('display picture');
    this.onBoardingCollection = afs.collection<OnBoarding>('on boarding');
  }

  //--------------------------------------- Profile details ---------------------------------------
  // Get profile details from cloud firestore by UID
  getProfileDetails(uid: string) {
    return this.afs.doc<ProfileDetails>('profile details/' + uid).valueChanges();
  }

  // Get credential with key as username
  // Used by auth service for username verification
  getCredential(username: string) {
      return this.afs.doc<Credential>('credential/' + username).valueChanges();
  }

  // Update profile details from cloud firestore
  updateProfileDetails(uid: string, details: any) {
    let obj = {...details};
    this.profileDetailsCollection.doc(uid).update(obj);
  }

  //--------------------------------------- Personal Details ---------------------------------------
  // Get personal details from cloud firestore by UID
  getPersonalDetails(uid: string) {
    return this.afs.doc<PersonalDetails>('personal details/' + uid).valueChanges();
  }

  //--------------------------------------- Profile Stickers ---------------------------------------
  // Get profile stickers from cloud firestore by UID
  getProfileStickers(uid: string) {
    return this.afs.doc<any>('profile stickers/' + uid).valueChanges()
              .pipe(map(response => {
                if (!response) return {stickers: [null,null,null,null,null]};
                response.stickers.forEach(sticker => {
                  if (!sticker || sticker === 'empty') sticker = null;
                });
                const res: {stickers: ProfileSticker[]} = response;
                return res;
              }));
  }

  // Update profile stickers from
  updateProfileSticker(uid: string, profileSticker: ProfileSticker[]) {
    const stickerArray: any[] = [];
    profileSticker.forEach(sticker => {
      if (sticker) {stickerArray.push({pid: sticker.pid, dateCreated: sticker.dateCreated})}
      else {stickerArray.push("empty")}
    });
    this.profileStickersCollection.doc(uid).update({stickers: stickerArray});
  }

  //--------------------------------------- Personal Details ---------------------------------------
  // Get personal details from cloud firestore by UID
  getUsername(uid: string) {
    return this.afs.doc<{username: string}>('username/' + uid).valueChanges();
  }

  // --------------------------------------- Display Picture ---------------------------------------

  // Update display picture from cloud firestore
  updateDisplayPictureRef(uid: string, displayPicture: DisplayPicture) {
    const dp = {...displayPicture}
    this.displayPictureCollection.doc(uid).update(dp);
  }

  // Get display picture from firebase storage by UID
  getDisplayPicture(uid: string) {
    const ref = this.storage.ref('display pictures/' + uid +'/small');
    return ref.getDownloadURL().pipe(
      startWith(this.placeholderDP),
      catchError(err => {
        console.log('Error retrieving small sized dp');
        console.log('Retrieving full sized dp');
        const ref = this.storage.ref('display pictures/' + uid +'/original');
        return ref.getDownloadURL().pipe(
          startWith(this.placeholderDP),
          catchError(err => {
            return this.handleError(err);
          }));
      }));
  }


   // Update display picture from firebase storage
   updateDisplayPicture(uid: string, content: any) {
    const file = content;
    const filePath = 'Display picture/' + uid;
    const task = this.storage.upload(filePath, file);
    return task.percentageChanges();
  }

  // --------------------------------------- On boarding ---------------------------------------
  getOnBoarding(uid: string) {
    const data = this.afs.doc<OnBoarding>('on boarding/'+uid);
    return data.valueChanges();
  }

  addOnBoarding(uid: string, data: OnBoarding) {
    const obj = {...data};
    this.onBoardingCollection.doc(uid).set(obj);
  }

  updateOnBoarding(uid: string, onBoarding: boolean, onBoardingStep: number, timeTaken: number[]) {
    const obj = {onBoarding: onBoarding, onBoardingStep: onBoardingStep, timeTaken: timeTaken}
    this.onBoardingCollection.doc(uid).update(obj);
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
