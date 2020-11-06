import { Feedback } from './../feedback/feedback.service';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap, take } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

interface ExclusiveID {
  used: number; //number of times the link has been used
  user1?: Feedback;
  user2?: Feedback;
  user3?: Feedback;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);
  APIKey = environment.firebaseConfig.apiKey;
  private tokenExpirationTimer: any;

  onBoarding = new BehaviorSubject<string>(null); //Check if user signed up or logged in

  constructor(private http: HttpClient,
              private router: Router,
              private afs: AngularFirestore) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+this.APIKey,
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.onBoarding.next('Signup');
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
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
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+this.APIKey,
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.onBoarding.next('Login');
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogin() {

    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
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

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
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

  getIDused(id: string) {
    const idDoc = this.afs.doc<{used: number}>('exclusive ID/'+id);
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
