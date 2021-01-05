import { MiscellaneousService } from 'src/app/shared/miscellaneous.service';
import { Feedback } from './../feedback/feedback.service';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap, take } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

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

  constructor(private http: HttpClient,
              private router: Router,
              private afs: AngularFirestore,
              private miscellaneousService: MiscellaneousService,
              public auth: AngularFireAuth) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.user.next(new User(user.email, user.uid));
        console.log("logged in:", this.user.value);
      } else {
        this.user.next(null);
      }
    });
  }

  async signUp(email: string, password: string) {
    console.log('sign up');
    let message = 'success';
    await this.auth.setPersistence('local');
    const user = await this.auth.createUserWithEmailAndPassword(email, password)
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      message = this.FirebaseErrors(errorCode);
    });
    console.log("sign up", user);
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

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/auth']);
      console.log('signed out');
    }).catch((error) => {
      // An error happened.
    });
  }

  // forgotPassword(email: string) {
  //   return this.http
  //     .post<AuthResponseData>(
  //       'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key='+this.APIKey,
  //       {
  //         requestType: 'PASSWORD_RESET',
  //         email: email,
  //       }
  //     )
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // deleteUser(token: string) {
  //   return this.http
  //   .post<AuthResponseData>(
  //     'https://identitytoolkit.googleapis.com/v1/accounts:delete?key='+this.APIKey,
  //     {
  //       idToken: token
  //     }
  //   )
  // }

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
      case 'auth/invalid-email  ':
        message = 'The email address is not a valid!';
        break;
      case 'auth/cannot-delete-own-user-account':
        message = 'You cannot delete your own user account.';
        break;
        default:
        message = 'Oops! Something went wrong. Try again later.';
        break;
    }
    console.log(message);
    return message;
  }

  getExclusiveDetails(id: string) {
    const idDoc = this.afs.doc<ExclusiveID>('exclusive ID/'+id);
    return idDoc.valueChanges();
  }

  updateIDused(id: string, userNumber: number) {
    const idCollection = this.afs.collection('exclusive ID');
    idCollection.doc(id).update({used: userNumber});
  }

  addExclusiveUser(id: string, userNumber: number, user: any) {
    const key = 'user' + userNumber.toString();
    const obj = {...user}
    const idDoc = this.afs.doc('exclusive ID/'+id);
    const idUserCollection = idDoc.collection('users');
    this.updateIDused(id, userNumber);
    idUserCollection.doc(key).set(obj);
  }
}
