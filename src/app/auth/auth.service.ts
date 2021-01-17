import { ProfileDetails, PersonalDetails, ProfileSticker, DisplayPicture } from './../shared/profile.model';
import { UsersService } from './../shared/users.service';
import { FeedService } from './../feed/feed.service';
import { Feedback } from './../feedback/feedback.service';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivityService } from '../shared/activity.service';
import { AngularFireFunctions } from '@angular/fire/functions';
import { first } from 'rxjs/operators';
import * as firebase from 'firebase/app';

export interface AuthResponseData {
  localId: string;
}

export interface ExclusiveID {
  used: number; //number of times the link has been used
  marketingRound: string;
  batch: string;
  user1?: Feedback;
  user2?: Feedback;
  user3?: Feedback;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private router: Router,
              private afs: AngularFirestore,
              private auth: AngularFireAuth,
              private feedService: FeedService,
              private activityService: ActivityService,
              private fns: AngularFireFunctions) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.user.next(new User(user.email, user.uid));
        console.log("logged in:", this.user.value);
      } else {
        console.log("null");
        this.user.next(null);
      }
    });
  }

  async signUp(email: string, password: string) {
    let message = 'success';
    await this.auth.setPersistence('local');
    await this.auth.createUserWithEmailAndPassword(email, password)
    // .then(async () => {
    //   console.log("signed up", user);
      // (await this.auth.currentUser).sendEmailVerification()
      // .then(() => console.log('verification email sent'));
    // })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage, errorCode);
      message = this.FirebaseErrors(errorCode);
    });
    return message
  }

  async logIn(email: string, password: string) {
    let message = 'success';
    await this.auth.setPersistence('local');
    await this.auth.signInWithEmailAndPassword(email, password)
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      message = this.FirebaseErrors(errorCode);
    });
    return message
  }

  logout(redirect: boolean = true) {
    this.auth.signOut().then(() => {
      this.feedService.$collectionPageList.next(undefined);
      if (redirect) this.router.navigate(['/auth']);
      console.log('signed out');
    }).catch((error) => {
      console.log(error);
    });
  }

  async forgotPassword(email: string) {
    let message = 'success';
    await this.auth.sendPasswordResetEmail(email)
    .then(() => console.log("password reset email sent"))
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      message = this.FirebaseErrors(errorCode);
    });
    return message
  }

  private FirebaseErrors (errorCode: string): string {

    let message: string;

    switch (errorCode) {
      case 'auth/wrong-password':
        message = 'Invalid email or password';
        break;
      case 'auth/network-request-failed':
        message = 'Please check your internet connection';
        break;
      case 'auth/too-many-requests':
        message =
          'We have detected too many requests from your device. Take a break please!';
        break;
      case 'auth/user-disabled':
        message =
          'Your account has been disabled or deleted. Please contact the system administrator.';
        break;
      case 'auth/requires-recent-login':
        message = 'Please login again and try again!';
        break;
      case 'auth/email-already-exists':
        message = 'Email address is already in use';
        break;
      case 'auth/email-already-in-use':
        message = 'Email address is already in use';
        break;
      case 'auth/user-not-found':
        message =
          'Email does not exist';
        break;
      case 'auth/phone-number-already-exists':
        message = 'The phone number is already in use by an existing user.';
        break;
      case 'auth/invalid-phone-number':
        message = 'The phone number is not a valid phone number!';
        break;
      case 'auth/invalid-email':
        message = 'The email address is not valid!';
        break;
      case 'auth/cannot-delete-own-user-account':
        message = 'You cannot delete your own user account.';
        break;
        default:
        message = 'Oops! Something went wrong. Try again later.';
        break;
    }

    console.log(errorCode, message);
    return message;
  }

  async newUser(uid: string, profileDetails: ProfileDetails, personalDetails: PersonalDetails, displayPicture: DisplayPicture, exclusiveId: string, exclusiveObj: any): Promise<boolean> {

    var success: boolean;

    const batch = this.afs.firestore.batch();

    const profileDetailsDoc = this.afs.firestore.doc('profile details/'+uid);
    const personalDetailsDoc = this.afs.firestore.doc('personal details/'+uid);
    const profileStickersDoc = this.afs.firestore.doc('profile stickers/'+uid);
    const displayPictureDoc= this.afs.firestore.doc('display picture/'+uid);

    const dp = {name: uid, ...displayPicture};

    //Exclusive users
    const key = this.afs.createId();
    const exclusiveIdDoc = this.afs.firestore.doc('exclusive ID/'+exclusiveId);
    const exclusiveUserDoc = this.afs.firestore.doc('exclusive ID/'+exclusiveId+'/users/'+key);

    batch.set(profileDetailsDoc, {...profileDetails});
    batch.set(personalDetailsDoc, {...personalDetails});
    batch.set(profileStickersDoc, { stickers: [] });
    batch.set(displayPictureDoc, dp);
    batch.set(exclusiveUserDoc, exclusiveObj);
    batch.update(exclusiveIdDoc, {used: firebase.firestore.FieldValue.increment(1)});

    await batch.commit()
          .then(() => {
            this.activityService.addActivity(uid, 'user');
            success =  true;
          })
          .catch(async (e) => {
            console.log(e);
            const callable = this.fns.httpsCallable('deleteUser');
            const data$ = await callable({uid: uid}).pipe(first()).toPromise();
            this.logout(false);
            console.log(data$);
            success =  false;
          });

    return success;
  }

  getExclusiveDetails(id: string) {
    const idDoc = this.afs.doc<ExclusiveID>('exclusive ID/'+id);
    return idDoc.valueChanges();
  }

}
