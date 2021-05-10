import { MiscellaneousService, PopUp } from './miscellaneous.service';
import { MixpanelService } from './mixpanel.service';
import { throwError} from 'rxjs';
import { catchError, finalize, map, startWith, take, first } from 'rxjs/operators';
import { ProfileDetails, PersonalDetails, ProfileSticker, DisplayPicture, Credential } from './profile.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { CustomMetadata } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  placeholderDP = 'assets/images/dpPlaceholder.svg';

  // Collection
  private profileDetailsCollection: AngularFirestoreCollection<ProfileDetails>;
  private profileStickersCollection: AngularFirestoreCollection;
  private displayPictureCollection: AngularFirestoreCollection<DisplayPicture>;

  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage,
              private mixpanelService: MixpanelService,
              private miscellaneousService: MiscellaneousService) {
    this.profileDetailsCollection = afs.collection<ProfileDetails>('profile details');
    this.profileStickersCollection = afs.collection<ProfileSticker[]>('profile stickers');
    this.displayPictureCollection = afs.collection<DisplayPicture>('display picture');
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
    this.profileDetailsCollection.doc(uid).update(obj)
      .then(() => {
        if (!!details.description) this.mixpanelService.profileDescriptionTrack();
        if (!!details.link) this.mixpanelService.profileLinkTrack();
      });
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
                response.stickers.forEach((sticker, index) => {
                   if (!sticker || sticker === 'empty') response.stickers[index] = null;
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
    const count = profileSticker.filter((sticker) => !!sticker).length;
    this.profileStickersCollection.doc(uid).update({stickers: stickerArray})
      .then(() => this.mixpanelService.profileStickersTrack({numberOfStickers: count,
                                                             sticker1: !!profileSticker[0], //counted from the right side
                                                             sticker2: !!profileSticker[1],
                                                             sticker3: !!profileSticker[2],
                                                             sticker4: !!profileSticker[3],
                                                             sticker5: !!profileSticker[4]}));
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
    return this.displayPictureCollection.doc(uid).update(dp);
  }

   // get display picture from cloud firestore
   getDisplayPictureRef(uid: string) {
    return this.afs.doc('display picture/' + uid).valueChanges();
  }

  // Get display picture from firebase storage by UID
  getDisplayPicture(uid: string) {
    const ref = this.storage.ref('display pictures/' + uid +'/small');
    return ref.getDownloadURL().pipe(
      startWith(this.placeholderDP),
      catchError(err => {
        this.handleError(err);
        const ref = this.storage.ref('display pictures/' + uid +'/original');
        return ref.getDownloadURL().pipe(
          startWith(this.placeholderDP),
          catchError(err => {
            return this.handleError(err);
          }));
      }));
  }


   // Update display picture from firebase storage
  updateDisplayPicture(uid: string, content: any, customMetadata: CustomMetadata) {
    const file = content;
    const filePath = 'display pictures/' + uid +'/original';
    const ref = this.storage.ref(filePath);
    const metadataUp = {contentType: file.type, customMetadata: {...customMetadata}};
    const task = ref.put(file, metadataUp);
    return task.percentageChanges();
  }

  uploadDisplayPicture( uid: string,
                        content: File,
                        customMetadata: CustomMetadata,
                        displayPicture: DisplayPicture) {

    let success: Boolean = false;
    this.miscellaneousService.startLoading();

    this.updateDisplayPicture(uid, content, customMetadata).pipe(first(progress => progress === 100)).subscribe(response => {
      this.updateDisplayPictureRef(uid, displayPicture)
        .then(() => success = true)
        .catch(() => {
          success = false;
          this.miscellaneousService.setPopUp(new PopUp("There was a problem while uploading your display picture! Try again later",
                                                       'Okay',
                                                       undefined,
                                                       ['default', 'reject']));
        })
        .finally(() => {
          this.mixpanelService.dpUpdateTrack({
            fileType: content.type,
            fileSize: content.size,
            fileDimensions: {width: +customMetadata.width, height: +customMetadata.height},
            success: success
          });
          this.miscellaneousService.endLoading();
        });
    }, error => {
      this.mixpanelService.dpUpdateTrack({
        fileType: content.type,
        fileSize: content.size,
        fileDimensions: {width: +customMetadata.width, height: +customMetadata.height},
        success: success
      });
      this.miscellaneousService.endLoading();
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
