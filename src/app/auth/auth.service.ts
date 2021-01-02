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
  APIKey = environment.firebaseConfig.apiKey;
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient,
              private router: Router,
              private afs: AngularFirestore,
              private miscellaneousService: MiscellaneousService,
              public auth: AngularFireAuth) {
  }

  ngOnInit() {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.user.next(new User(user.email, user.uid));
        console.log("logged in:", this.user);
      } else {
        this.user.next(null);
      }
    });
  }

  signUp(email: string, password: string) {
    this.auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  }

  forgotPassword(email: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key='+this.APIKey,
        {
          requestType: 'PASSWORD_RESET',
          email: email,
        }
      )
      .pipe(
        catchError(this.handleError)
      );
  }

  logIn(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password)
    .then((user) => {
      this.user.next(new User(user.user.email, user.user.uid));
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  }

  deleteUser(token: string) {
    return this.http
    .post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:delete?key='+this.APIKey,
      {
        idToken: token
      }
    )
  }

  private handleError(errorRes: HttpErrorResponse) {
    console.log(errorRes.error.error.message);
    let errorMessage = 'we have no idea what happened...No cap';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'Too many attempts try again later';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email does not exist';
        break;
      case 'INVALID_EMAIL':
        errorMessage = 'Email is invalid';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Email and password do not match';
        break;
    }
    return throwError(errorMessage);
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
