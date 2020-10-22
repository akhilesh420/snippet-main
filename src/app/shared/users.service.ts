import { Observable, BehaviorSubject, throwError, Subject } from 'rxjs';
import { catchError, take, takeWhile } from 'rxjs/operators';
import { ProfileDetails, PersonalDetails, ProfileSticker, DisplayPicture } from './profile.model';
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
  private personalDetailsCollection: AngularFirestoreCollection<PersonalDetails>;
  private profileStickersCollection: AngularFirestoreCollection<ProfileSticker[]>;
  private displayPictureCollection: AngularFirestoreCollection<DisplayPicture>;

  // Downloaded data storage
  private profileDetailsList: {uid: string, obs: BehaviorSubject<ProfileDetails>}[] = [];
  private personalDetailsList: {uid: string, obs: BehaviorSubject<PersonalDetails>}[] = [];
  private profileStickersList: {uid: string, obs: BehaviorSubject<ProfileSticker[]>}[] = [];
  private displayPictureList: {uid: string, obs: BehaviorSubject<any>}[] = [];


  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) {
    this.profileDetailsCollection = afs.collection<ProfileDetails>('profile details');
    this.personalDetailsCollection = afs.collection<PersonalDetails>('personal details');
    this.profileStickersCollection = afs.collection<ProfileSticker[]>('profile stickers');
    this.displayPictureCollection = afs.collection<DisplayPicture>('display picture');
  }

  // Stops more than max connection from occurring
  // NOT WORKING RN -> maybe a subscription array??
  cleanUp(uid: string, folder: string, connectNumber: number) {
    return this.connectCount === connectNumber + this.maxConnect;
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
      this.afs.doc<ProfileDetails>('profile details/' + uid).valueChanges().subscribe(response => {
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

  // Add profile details from cloud firestore
  addProfileDetails(uid: string, details: ProfileDetails) {
    const bio = {title: details.bio.title, location: details.bio.location, content: details.bio.content};
    const obj = {username : details.username, bio: bio};
    this.profileDetailsCollection.doc(uid).set(obj);
  }

  // Update profile details from cloud firestore
  updateProfileDetails(uid: string, details: ProfileDetails) {
    const bio = {title: details.bio.title, location: details.bio.location, content: details.bio.content};
    const obj = {username : details.username, bio: bio};
    this.profileDetailsCollection.doc(uid).update(obj);
  }

  //--------------------------------------- Personal Details ---------------------------------------
  // Get personal details from cloud firestore by UID
  getPersonalDetails(uid: string) {
    let index = this.personalDetailsList.findIndex(details => {
      return details.uid === uid;
    })

    if (index === -1) {
      this.personalDetailsList.push({uid: uid, obs: new BehaviorSubject<PersonalDetails>(undefined)});
      let secIndex = this.personalDetailsList.length - 1;
      this.afs.doc<PersonalDetails>('personal details/' + uid).valueChanges().subscribe(response => {
        this.personalDetailsList[secIndex].obs.next(response);
      });;
      return this.personalDetailsList[secIndex].obs;
    } else {
     return this.personalDetailsList[index].obs;
    }
  }

  // Add personal details from cloud firestore
  addPersonalDetails(uid: string, details: PersonalDetails) {
    const obj = {dateCreated : details.dateCreated, dateOfBirth : details.dateOfBirth, email: details.email, name: details.name};
    this.personalDetailsCollection.doc(uid).set(obj);
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
      this.afs.doc<{stickers: ProfileSticker[]}>('profile stickers/' + uid).valueChanges().subscribe(response => {
        this.profileStickersList[secIndex].obs.next(response.stickers);
      });;
      return this.profileStickersList[secIndex].obs;
    } else {
     return this.profileStickersList[index].obs;
    }
  }

  // Add profile stickers from cloud firestore
  addProfileStickers(uid: string, profileSticker: ProfileSticker[]) {
    const stickerArray = [];
    profileSticker.forEach(sticker => {
      stickerArray.push({pid: sticker.pid, dateCreated: sticker.dateCreated})
    });
    this.profileStickersCollection.doc(uid).set({stickers: stickerArray});
  }

  // Update profile stickers from 
  updateProfileSticker(uid: string, profileSticker: ProfileSticker[]) {
    const stickerArray = [];
    profileSticker.forEach(sticker => {
      stickerArray.push({pid: sticker.pid, dateCreated: sticker.dateCreated})
    });
    this.profileStickersCollection.doc(uid).update({stickers: stickerArray});
  }

  // --------------------------------------- Display Picture ---------------------------------------
  // Get display picture from cloud firestore by UID
  private getDisplayPictureRef(uid: string) {
    return this.afs.doc<DisplayPicture>('display picture/' + uid).valueChanges();
  }

  // Add display picture from cloud firestore
  private addDisplayPictureRef(uid: string, displayPicture: DisplayPicture) {
    const dp = {name: uid, dateCreated: displayPicture.dateCreated}
    this.displayPictureCollection.doc(uid).set(dp);
  }

  // Update display picture from cloud firestore
  updateDisplayPictureRef(uid: string, displayPicture: DisplayPicture) {
    const dp = {name: uid, dateCreated: displayPicture.dateCreated}
    this.displayPictureCollection.doc(uid).update(dp);
  }

  // Get display picture from firebase storage by UID
  getDisplayPicture(uid: string) {
    let index = this.displayPictureList.findIndex(details => {
      return details.uid === uid;
    })

    if (index === -1) {
      this.displayPictureList.push({uid: uid, obs: new BehaviorSubject<any>(this.placeholderImg)});
      let secIndex = this.displayPictureList.length - 1;
      this.getDisplayPictureRef(uid).subscribe((response: DisplayPicture) => {
        console.log(response); //log
        const ref = this.storage.ref('Display picture/' + uid);
        ref.getDownloadURL().pipe(catchError(this.handleError), take(1)).subscribe(response => {
          this.displayPictureList[secIndex].obs.next(response);
        });
      });
      return this.displayPictureList[secIndex].obs
    } else {
      return this.displayPictureList[index].obs
    }
  }

  // Add display picture from firebase storage
  addDisplayPicture(uid: string, displayPicture: DisplayPicture, content: any) {
    // Upload to cloud firestore
    this.addDisplayPictureRef(uid, displayPicture);
    // Upload to storage
    if (content) {
      const file = content;
      const filePath = 'Display picture/'+uid;
      const ref = this.storage.ref(filePath);
      const task = ref.put(file);
      return task.percentageChanges();
    } 
  }

   // Update display picture from firebase storage
   updateDisplayPicture(uid: string, content: any) {
    const file = content;
    const filePath = 'Display picture/' + uid;
    const task = this.storage.upload(filePath, file);
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
// gaand mara akhilesh