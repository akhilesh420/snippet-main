import { BehaviorSubject, throwError} from 'rxjs';
import { catchError, first, take } from 'rxjs/operators';
import { ProfileDetails, PersonalDetails, ProfileSticker, DisplayPicture, OnBoarding } from './profile.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  maxConnect = 100; //Maximum number of allowed connection
  connectCount = 0; //Total number of connection

  placeholderImg = 'assets/default image/blank_image@2x.png';

  // Collection
  private profileDetailsCollection: AngularFirestoreCollection<ProfileDetails>;
  private profileStickersCollection: AngularFirestoreCollection;
  private displayPictureCollection: AngularFirestoreCollection<DisplayPicture>;
  private onBoardingCollection: AngularFirestoreCollection<OnBoarding>;

  // Downloaded data storage
  private profileDetailsList: {uid: string, obs: BehaviorSubject<ProfileDetails>}[] = [];
  private profileStickersList: {uid: string, obs: BehaviorSubject<ProfileSticker[]>}[] = [];
  private displayPictureList: {uid: string, obs: BehaviorSubject<any>}[] = [];

  private dpLoadCheck = new BehaviorSubject<boolean>(false);

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
    let index = this.profileDetailsList.findIndex(details => {
      return details.uid === uid;
    })

    if (index === -1) {
      this.profileDetailsList.push({uid: uid, obs: new BehaviorSubject<ProfileDetails>(undefined)});
      let secIndex = this.profileDetailsList.length - 1;
      this.afs.doc<ProfileDetails>('profile details/' + uid).valueChanges().subscribe(async (response) => {
        this.profileDetailsList[secIndex].obs.next(response);
      });
      return this.profileDetailsList[secIndex].obs;
    } else {
     return this.profileDetailsList[index].obs;
    }
  }

  // Get profile details from cloud firestore by key
  // Used by auth service for username verification
  getProfileDetailsByKey(key: string, value: any) {
      return this.afs.collection<ProfileDetails>('profile details', ref => ref.where(key,'==',value)).valueChanges();
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
    let index = this.profileStickersList.findIndex(details => {
      return details.uid === uid;
    })

    if (index === -1) {
      this.profileStickersList.push({uid: uid, obs: new BehaviorSubject<ProfileSticker[]>(undefined)});
      let secIndex = this.profileStickersList.length - 1;
      this.afs.doc<{stickers: ProfileSticker[]}>('profile stickers/' + uid).valueChanges().pipe(catchError(this.handleError)).subscribe(response => {
        if (!response) return;
        const temp = [null,null,null,null,null];
        response.stickers.forEach((sticker,index) => {
          if (sticker.pid) {
           temp[index] = sticker;
          }
        });
        this.profileStickersList[secIndex].obs.next(temp);
      });;
      return this.profileStickersList[secIndex].obs;
    } else {
     return this.profileStickersList[index].obs;
    }
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

  // --------------------------------------- Display Picture ---------------------------------------

  // Update display picture from cloud firestore
  updateDisplayPictureRef(uid: string, displayPicture: DisplayPicture) {
    const dp = {...displayPicture}
    this.displayPictureCollection.doc(uid).update(dp);
  }

  // Get display picture from firebase storage by UID
  getDisplayPicture(uid: string, size: string='sm_') {
    let index = this.displayPictureList.findIndex(details => {
      return details.uid === uid;
    })

    if (index === -1) {
      this.displayPictureList.push({uid: uid, obs: new BehaviorSubject<any>('assets/images/dpPlaceholder.svg')});
      let secIndex = this.displayPictureList.length - 1;
      const ref = this.storage.ref('Display picture/' + `sm_${uid}`);
      ref.getDownloadURL().pipe(catchError(this.handleError), take(1)).subscribe(response => {
        this.displayPictureList[secIndex].obs.next(response);
        this.dpLoadCheck.next(true);
      }, error => {
        if (error.code_ === "storage/object-not-found") {
          const ref = this.storage.ref('Display picture/' + uid + size);
          ref.getDownloadURL().pipe(catchError(this.handleError), take(1)).subscribe(response => {
            if (response) {
              this.displayPictureList[secIndex].obs.next(response);
              this.dpLoadCheck.next(true);
            }
          });
        }
      });
      return this.displayPictureList[secIndex].obs
    } else {
      return this.displayPictureList[index].obs
    }
  }

  displayPictureLoaded() {
    return this.dpLoadCheck;
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
