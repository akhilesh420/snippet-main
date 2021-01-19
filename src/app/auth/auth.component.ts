import { UsersService } from './../shared/users.service';
import { ProfileDetails, PersonalDetails, DisplayPicture } from './../shared/profile.model';
import { Subject, Subscription } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService, ExclusiveID } from './auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivityService } from '../shared/activity.service';
import { MiscellaneousService, PopUp } from '../shared/miscellaneous.service';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  isLoginMode = true;
  isForgetMode = false;
  isLoading = false;
  error: string = null;
  passwordError: string = null;

  credential: string;
  password: string;
  name: string;
  username: string;
  passwordValidator = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";

  subProfileDetails: Subscription;

  isAuthenticated: boolean = false;

  exclusiveId: string;
  validID: boolean = false;
  userNumber: number;
  notifier$ = new Subject();

  exclusiveDetails: ExclusiveID;
  onBoarding: boolean = false;
  onBoardingStep: number;
  errorField: number = -1; //sign up which field number has an error

  constructor(private authService: AuthService,
              private userService: UsersService,
              private router: Router,
              private route: ActivatedRoute,
              private miscellaneousService: MiscellaneousService) {}

  ngOnInit(): void {
    this.validID = false;

    this.exclusiveId = this.route.snapshot.params['id'];
    this.isLoginMode = !this.exclusiveId; //switch to sign up if id exists
    if (this.exclusiveId) {
      this.checkID();
    }

    this.route.params
    .subscribe(
      (params: Params) => {
        this.exclusiveId = params['id'];
        this.isLoginMode = !this.exclusiveId;
        if (this.exclusiveId) {
          this.checkID();
        }
      }
    );
  }

  checkID() {

    this.authService.getExclusiveDetails(this.exclusiveId).pipe(takeUntil(this.notifier$)).subscribe(response => {
      if (response) {
        this.exclusiveDetails = response;
        if (response.used <= 2) {
          this.userNumber = response.used;
          this.validID = true;
        } else {
          this.validID = false;
          this.error = "This link can't be used anymore";
        }
      } else {
        this.validID = false;
        this.error = "Invalid link";
      }
    });
  }

  async onSubmit(form: NgForm) {
    if (this.isLoading) return;

    this.isLoading = true;
    var signInEmail: string;


    if (!this.isForgetMode) {
      if (!this.isLoginMode) { //sign up

        if (!this.validID) return this.errorMessage(this.error);

        if (!this.credential || this.credential.length === 0) return this.errorMessage("Email is required", 0);

        if (!this.validEmail(this.credential)) return this.errorMessage("Invalid email", 0);

        if (!this.name || this.name.length === 0) return this.errorMessage("Full name is required", 1);

        if (!this.username || this.username.length === 0) return this.errorMessage("Username is required", 2);

        if (this.username && this.username.indexOf(' ') != -1) return this.errorMessage("Username can't have spaces", 2);

        if (this.username.length > 21) return this.errorMessage("Username can't be longer than 21 characters", 2);

        const usernameRes = await this.userService.getProfileDetailsByKey('username', this.username).pipe(first()).toPromise();

        if (Object.keys(usernameRes).length != 0) return this.errorMessage("Username taken", 2);

      } else { //sign in

        if (!this.credential || this.credential.length === 0) return this.errorMessage("Email or username is required");

        if (!this.validEmail(this.credential)) {
          this.isLoading = true;
          const usernameRes = await this.userService.getProfileDetailsByKey('username', this.credential).pipe(first()).toPromise();
          if (usernameRes.length === 0) return this.errorMessage("Username does not exist");
          signInEmail = usernameRes[0].email;
        } else signInEmail = this.credential;
      }

      //both sign in and sign up
      if (!this.password || this.password.length === 0) return this.errorMessage("Password is required", 3);

      if (!this.password || this.password.length < 6) return this.errorMessage("Password must be at least 6 characters", 3);
    } else {//forgot password mode
      if (!this.credential || this.credential.length === 0) return this.errorMessage("Email is required");
    }

    let message: string;
    if (this.isLoginMode && !this.isForgetMode) {
      message = await this.authService.logIn(signInEmail, this.password);
    } else if (!this.isLoginMode && !this.isForgetMode){
      message = await this.authService.signUp(this.credential, this.password);
    } else if (this.isForgetMode) {
      message = await this.authService.forgotPassword(this.credential);
    }

    if (message != 'success') return this.errorMessage(message, 0);

    if (this.isForgetMode) {
      this.miscellaneousService.setPopUp(new PopUp("An email has been sent to your account",'okay', undefined, ['default', 'reject']));
      this.isLoading = false;
      return await this.miscellaneousService.getPopUpInteraction().pipe(first()).toPromise();
    }

    if (!this.isLoginMode && !this.isForgetMode) {
      const uid = this.authService.user.value.id;

      const profileDetails  = new ProfileDetails(this.username, '','', this.credential);
      const personalDetails = new PersonalDetails(this.name, new Date(), new Date());
      const displayPicture = new DisplayPicture(new Date(), 'null');
      const exclusiveObj = {dateCreated: new Date(), uid: uid, username: this.username, fullname: this.name, email: this.credential};

      const success: boolean = await this.authService.newUser(uid, profileDetails, personalDetails, displayPicture, this.exclusiveId, exclusiveObj);

      if (!success) {
        this.miscellaneousService.setPopUp(new PopUp("An error occurred while creating your account. Please try again later",'okay', undefined, ['default', 'reject']));
        this.isLoading = false;
        return await this.miscellaneousService.getPopUpInteraction().pipe(first()).toPromise();
      }
    }

    this.router.navigate([this.miscellaneousService.lastRoute]);

    this.isLoading = false;
    form.reset();
  }

  errorMessage(error: string, errorField: number = -1) {
    this.errorField = errorField;
    this.error = error;
    this.isLoading = false;
  }

  avoidSpace(event) {
    let k = event.keyCode;
    if (k == 32) return false;
  }

  alphaOnly(event) {
    let key = event.keyCode;
    return ((key >= 65 && key <= 90) || key == 8 || key == 32);
  }

  validEmail(str) {
    var pattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return !!pattern.test(str);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
