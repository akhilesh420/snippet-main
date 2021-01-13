import { UsersService } from './../shared/users.service';
import { ProfileDetails, PersonalDetails, DisplayPicture, OnBoarding } from './../shared/profile.model';
import { Observable, Subject, Subscription } from 'rxjs';
import { first, take, takeUntil } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService, AuthResponseData, ExclusiveID } from './auth.service';
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
  dob: Date;
  allowedDate: Date;
  minAge: number = 13;
  passwordValidator = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";

  userSubs: Subscription;
  subProfileDetails: Subscription;

  isAuthenticated: boolean = false;

  exclusiveId: string;
  validID: boolean = false;
  userNumber: number;
  notifier$ = new Subject();

  exclusiveDetails: ExclusiveID;
  onBoarding: boolean = false;
  onBoardingStep: number;

  constructor(private authService: AuthService,
              private userService: UsersService,
              private activityService: ActivityService,
              private router: Router,
              private route: ActivatedRoute,
              private miscellaneousService: MiscellaneousService,
              private afs: AngularFirestore) {}

  ngOnInit(): void {
    // let todayDate = new Date();
    // this.allowedDate = new Date(todayDate.getFullYear() - this.minAge, todayDate.getMonth(), todayDate.getDate());

    // this.validID = false;

    // this.miscellaneousService.onBoardingStep$.pipe(takeUntil(this.notifier$)).subscribe(step => {
    //   this.onBoardingStep = step;
    // });

    // this.exclusiveId = this.route.snapshot.params['id'];
    // this.isLoginMode = !this.exclusiveId; //switch to signup if id exists
    // if (this.exclusiveId) {
    //   this.checkID();
    // }

    // this.route.params
    // .subscribe(
    //   (params: Params) => {
    //     this.exclusiveId = params['id'];
    //     this.isLoginMode = !this.exclusiveId;
    //     if (this.exclusiveId) {
    //       this.checkID();
    //     }
    //   }
    // );
  }

  checkID() {

    this.authService.getExclusiveDetails(this.exclusiveId).pipe(takeUntil(this.notifier$)).subscribe(response => {
      if (response) {
        this.exclusiveDetails = response;
        if (response.used <= 2) {
          this.userNumber = response.used;
          this.validID = true;
          if (this.onBoardingStep === 0) {
            this.miscellaneousService.onBoarding$.next(true);
            this.miscellaneousService.exclusiveId = this.exclusiveId;
            this.router.navigate(['/tutorial']);
          }
        } else {
          this.validID = false;
          this.error = "This link can't be used anymore";
        }
      } else {
        this.error = "Invalid link";
      }
    });
  }

  onSwitchMode() {
    this.isForgetMode = !this.isForgetMode;
  }

  async onSubmit(form: NgForm) {
    if (this.isLoading) return;

    this.isLoading = true;

    if (!this.credential || this.credential.length === 0) return this.errorMessage("Email or username is required");

    if (!this.isForgetMode) {
      if (!this.isLoginMode) {

        // if (!this.validID) return
        this.username = this.afs.createId();
        this.dob = new Date();
        this.name = "test";

        if (!this.username || this.username.length === 0) return this.errorMessage("Username is required");

        if (this.username && this.username.indexOf(' ') != -1) return this.errorMessage("Username can't have spaces");

        if (this.username.length > 21) return this.errorMessage("Username can't be longer than 21 characters");

        const usernameRes = await this.userService.getProfileDetailsByKey('username', this.username).pipe(first()).toPromise();

        if (Object.keys(usernameRes).length != 0) return this.errorMessage("Username taken");

      } else {
        if (!this.validEmail(this.credential)) {
          this.isLoading = true;
          const usernameRes = await this.userService.getProfileDetailsByKey('username', this.credential).pipe(first()).toPromise();
          if (usernameRes.length === 0) return this.errorMessage("Username does not exist");
          this.credential = usernameRes[0].email;
        }
      }


      if (!this.password || this.password.length === 0) return this.errorMessage("Password is required");

      if (!this.password || this.password.length < 6) return this.errorMessage("Password must be at least 6 characters");
    }

    let message: string;
    if (this.isLoginMode && !this.isForgetMode) {
      message = await this.authService.logIn(this.credential, this.password);
    } else if (!this.isLoginMode && !this.isForgetMode){
      message = await this.authService.signUp(this.credential, this.password);
    } else if (this.isForgetMode) {
      message = await this.authService.forgotPassword(this.credential);
    }

    if (message != 'success') {
      this.isLoading = false;
      return this.error = message;
    }

    if (this.isForgetMode) {
      this.miscellaneousService.setPopUp(new PopUp("An email has been sent to your account",'okay', undefined, ['default', 'reject']));
      this.isLoading = false;
      return await this.miscellaneousService.getPopUpInteraction().pipe(first()).toPromise();
    }

    if (!this.isLoginMode && !this.isForgetMode) {
      const uid = this.authService.user.value.id;

      const profileDetails  = new ProfileDetails(this.username, '','', this.credential);
      const personalDetails = new PersonalDetails(this.name, this.dob, new Date());
      const displayPicture = new DisplayPicture(new Date(), 'null');
      // const onBoardingData = new OnBoarding(true, 2, this.exclusiveDetails.marketingRound, this.exclusiveDetails.batch, [0,0,0,0,0,0,0,0,0]);

      this.userService.addProfileDetails(uid, profileDetails);
      this.userService.addPersonalDetails(uid, personalDetails);
      this.userService.addProfileStickers(uid, []);
      this.userService.addDisplayPicture(uid, displayPicture, null);
      this.activityService.addActivity(uid, 'user');

      // this.userService.addOnBoarding(uid, onBoardingData);
      // this.authService.addExclusiveUser(this.exclusiveId, this.userNumber + 1, {dateCreated: new Date(), uid: uid, username: this.username, fullname: this.name, email: this.email});
    }

    this.router.navigate([this.miscellaneousService.lastRoute]);

    this.isLoading = false;
    form.reset();
  }

  errorMessage(error: string) {
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
