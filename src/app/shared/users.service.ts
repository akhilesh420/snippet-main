import { MiscellaneousService, PopUp } from './miscellaneous.service';
import { MixpanelService } from './mixpanel.service';
import { throwError} from 'rxjs';
import { catchError, finalize, map, startWith, take, first } from 'rxjs/operators';
import { ProfileDetails, PersonalDetails, ProfileSticker, DisplayPicture, Credential } from './profile.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { CustomMetadata } from './post.model';
import { AngularFireAuth } from '@angular/fire/auth';

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
              private auth: AngularFireAuth,
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
      .then(async () => {
        if (!!details.description) {
          this.mixpanelService.profileDescriptionTrack();
          this.mixpanelService.setProperty((await this.auth.currentUser).uid, 'description', details.description.length > 0);
        }
        if (!!details.link) {
          this.mixpanelService.profileLinkTrack();
          this.mixpanelService.setProperty((await this.auth.currentUser).uid, 'link', details.link.length > 0);
        }
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
      .then(async () => {
        this.mixpanelService.profileStickersTrack({numberOfStickers: count,
                                                    sticker5: !!profileSticker[0], //counted from the left side
                                                    sticker4: !!profileSticker[1],
                                                    sticker3: !!profileSticker[2],
                                                    sticker2: !!profileSticker[3],
                                                    sticker1: !!profileSticker[4]})

        this.mixpanelService.setProperty((await this.auth.currentUser).uid, 'profile stickers', count)
      });
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
<<<<<<< HEAD
    const metadataUp = {contentType: file.type, cacheControl: 'public, max-age=31536000', ...customMetadata};
=======
    const metadataUp = {contentType: file.type, customMetadata: {...customMetadata}};
>>>>>>> f-010
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
        .then(() => {
          success = true;
          this.mixpanelService.setProperty(uid, 'dp', true);
        })
        .catch(() => {
          success = false;
          this.miscellaneousService.setPopUp(new PopUp("There was a problem while uploading your display picture! Try again later",
                                                       'Okay',
                                                       undefined,
                                                       ['default', 'reject']));
        })
        .finally(() => {
          this.miscellaneousService.endLoading();

          this.mixpanelService.dpUpdateTrack({
            fileType: content.type,
            fileSize: content.size,
            fileDimensions: {width: +customMetadata.width, height: +customMetadata.height},
            success: success
          });
        });
    }, error => {
      this.miscellaneousService.endLoading();
      this.mixpanelService.dpUpdateTrack({
        fileType: content.type,
        fileSize: content.size,
        fileDimensions: {width: +customMetadata.width, height: +customMetadata.height},
        success: success
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
