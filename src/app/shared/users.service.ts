import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { ProfileDetails, PersonalDetails, ProfileSticker, DisplayPicture } from './profile.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // Collection
  private profileDetailsCollection: AngularFirestoreCollection<ProfileDetails>;
  private personalDetailsCollection: AngularFirestoreCollection<PersonalDetails>;
  private profileStickersCollection: AngularFirestoreCollection<ProfileSticker[]>;
  private displayPictureCollection: AngularFirestoreCollection<DisplayPicture>;

  // Downloaded data storage
  private profileDetailsList: {uid: string, obs: Observable<ProfileDetails>}[] = [];
  private personalDetailsList: {uid: string, obs: Observable<PersonalDetails>}[] = [];
  private profileStickersList: {uid: string, obs: Observable<ProfileSticker[]>}[] = [];
  private displayPictureRefList: {uid: string, obs: Observable<DisplayPicture>}[] = [];
  private displayPictureList: {uid: string, obs: BehaviorSubject<any>}[] = [];


  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage) {
    this.profileDetailsCollection = afs.collection<ProfileDetails>('profile details');
    this.personalDetailsCollection = afs.collection<PersonalDetails>('personal details');
    this.profileStickersCollection = afs.collection<ProfileSticker[]>('profile stickers');
    this.displayPictureCollection = afs.collection<DisplayPicture>('display picture');
  }


  //--------------------------------------- Profile details ---------------------------------------
  getProfileDetails(uid: string) {
    let index = this.profileDetailsList.findIndex(details => {
      return details.uid === uid;
    })

    if (index === -1) {
      const observe = this.afs.doc<ProfileDetails>('profile details/' + uid).valueChanges();
      this.profileDetailsList.push({uid: uid, obs: observe});
      return observe;
    } else {
     return this.profileDetailsList[index].obs;
    }
  }

  addProfileDetails(uid: string, details: ProfileDetails) {
    const bio = {title: details.bio.title, location: details.bio.location, content: details.bio.content};
    const obj = {username : details.username, bio: bio};
    this.profileDetailsCollection.doc(uid).set(obj);
  }


  //--------------------------------------- Personal Details ---------------------------------------
  getPersonalDetails(uid: string) {
    let index = this.personalDetailsList.findIndex(details => {
      return details.uid === uid;
    })

    if (index === -1) {
      const observe = this.afs.doc<PersonalDetails>('personal details/' + uid).valueChanges();
      this.personalDetailsList.push({uid: uid, obs: observe});
      return observe;
    } else {
     return this.personalDetailsList[index].obs;
    }
  }

  addPersonalDetails(uid: string, details: PersonalDetails) {
    const obj = {dateCreated : details.dateCreated, dateOfBirth : details.dateOfBirth,email: details.email, name: details.name};
    this.personalDetailsCollection.doc(uid).set(obj);
  }


  //--------------------------------------- Profile Stickers ---------------------------------------
  getProfileStickers(uid: string) {
    let index = this.profileStickersList.findIndex(details => {
      return details.uid === uid;
    })

    if (index === -1) {
      const observe = this.afs.doc<ProfileSticker[]>('profile stickers/' + uid).valueChanges();
      this.profileStickersList.push({uid: uid, obs: observe});
      return observe;
    } else {
     return this.profileStickersList[index].obs;
    }
  }

  addProfileStickers(uid: string, profileSticker: ProfileSticker[]) {
    const stickerArray = [];
    profileSticker.forEach(sticker => {
      stickerArray.push({pid: sticker.pid, dateCreated: sticker.dateCreated})
    });
    this.profileStickersCollection.doc(uid).set(stickerArray);
  }


  // --------------------------------------- Display Picture ---------------------------------------
  // Reference cloud firestore
  private getDisplayPictureRef(uid: string) {
    let index = this.displayPictureRefList.findIndex(details => {
      return details.uid === uid;
    })

    if (index === -1) {
      const observe = this.afs.doc<DisplayPicture>('display picture/' + uid).valueChanges();
      this.displayPictureRefList.push({uid: uid, obs: observe});
      return observe;
    } else {
     return this.displayPictureRefList[index].obs;
    }
  }

  private addDisplayPictureRef(uid: string, displayPicture: DisplayPicture) {
    const dp = {name: uid, dateCreated: displayPicture.dateCreated}
    this.displayPictureCollection.doc(uid).set(dp);
  }

  // Reference firebase storage
  getDisplayPicture(uid: string) {
    let index = this.displayPictureList.findIndex(details => {
      return details.uid === uid;
    })

    if (index === -1) {
      this.displayPictureList.push({uid: uid, obs: new BehaviorSubject<any>(null)});
      let secIndex = this.displayPictureList.length - 1;
      this.getDisplayPictureRef(uid).subscribe((response: DisplayPicture) => {
        const ref = this.storage.ref('Display picture/' + uid + "." + response.fileFormat);
        ref.getDownloadURL().subscribe(response => {
          this.displayPictureList[secIndex].obs.next(response);
        });
      });
      return this.displayPictureList[secIndex].obs
    } else {
      return this.displayPictureList[index].obs
    }
  }

  addDisplayPicture(uid: string, displayPicture: DisplayPicture, content: any) {
    // Upload to cloud firestore
    this.addDisplayPictureRef(uid, displayPicture);
    // Upload to storage
    const file = content.target.files[0];
    const filePath = 'Display picture/'+uid;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
  }
// chutiya
}
