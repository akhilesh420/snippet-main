import { UsersService } from './../shared/users.service';
import { ProfileDetails, PersonalDetails, DisplayPicture, OnBoarding } from './../shared/profile.model';
import { Observable, Subject, Subscription } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService, AuthResponseData, ExclusiveID } from './auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivityService } from '../shared/activity.service';
import { MiscellaneousService, PopUp } from '../shared/miscellaneous.service';



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

  email: string;
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
              private miscellaneousService: MiscellaneousService) {}

  ngOnInit(): void {
    let todayDate = new Date();
    this.allowedDate = new Date(todayDate.getFullYear() - this.minAge, todayDate.getMonth(), todayDate.getDate());

    this.validID = false;

    this.miscellaneousService.onBoardingStep$.pipe(takeUntil(this.notifier$)).subscribe(step => {
      this.onBoardingStep = step;
    });

    this.exclusiveId = this.route.snapshot.params['id'];
    this.isLoginMode = !this.exclusiveId; //switch to signup if id exists
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

  onSwitchMode(event: string) {
    if (event === 'login') {
      // this.isLoginMode = !this.isLoginMode;
      this.isForgetMode = false;
      this.error = null;
    } else if (event === 'forget') {
      this.isForgetMode = true;
      this.isLoginMode = false;
      this.error = null;
    }
  }

  async onSubmit(form: NgForm) {

    if (!this.email || this.email.length === 0) return this.error = "Email is required";

    if (!this.isForgetMode) {
      if (!this.isLoginMode) {

        if (!this.validID) return

        if (!this.username || this.username.length === 0) return this.error = "Username is required"

        if (this.username && this.username.indexOf(' ') != -1) return this.error = "Username can't have spaces";

        if (this.username.length > 21) return this.error = "Username can't be longer than 21 characters";

        const usernameRes = await this.userService.getProfileDetailsByKey('username', this.username);

        if (Object.keys(usernameRes).length != 0) return this.error = "Username taken";

      }

      if (!this.password || this.password.length === 0) return this.error = "Password is required";

      if (!this.password || this.password.length < 6) return this.error = "Password must be at least 6 characters";
    }

    this.isLoading = true;
    let message: string;
    if (this.isLoginMode && !this.isForgetMode) {
      message = await this.authService.logIn(this.email, this.password);
    } else if (!this.isLoginMode && !this.isForgetMode){
      message = await this.authService.signUp(this.email, this.password);
    } else if (this.isForgetMode) {
      // this.authService.forgotPassword(email);
    }

    this.isLoading = false;
    if (message != 'success') return this.error = message;

    if (!this.isLoginMode && !this.isForgetMode) {
      const uid = this.authService.user.value.id;

      const profileDetails  = new ProfileDetails(this.username, '','');
      const personalDetails = new PersonalDetails(this.name, this.email, this.dob, new Date());
      const displayPicture = new DisplayPicture(new Date(), 'null');
      const onBoardingData = new OnBoarding(true, 2, this.exclusiveDetails.marketingRound, this.exclusiveDetails.batch, [0,0,0,0,0,0,0,0,0]);

      this.userService.addProfileDetails(uid, profileDetails);
      this.userService.addPersonalDetails(uid, personalDetails);
      this.userService.addProfileStickers(uid, []);
      this.userService.addDisplayPicture(uid, displayPicture, null);
      this.userService.addOnBoarding(uid, onBoardingData);
      this.activityService.addActivity(uid, 'user');
      this.authService.addExclusiveUser(this.exclusiveId, this.userNumber + 1, {dateCreated: new Date(), uid: uid, username: this.username, fullname: this.name, email: this.email});
    }

    form.reset();


    // authObs.subscribe(
    //   resData => {
    //     if (this.isLoginMode && !this.isForgetMode) {
    //       form.reset();
    //       this.isLoading = false;
    //       //navigate from startOnBoarding function
    //       this.miscellaneousService.startOnBoarding(resData.localId);
    //       this.router.navigate(['/explore']);
    //     } else if (!this.isLoginMode && !this.isForgetMode) {
    //       let profileDetails  = new ProfileDetails(this.username, '','');
    //       let onBoardingData = new OnBoarding(true, 2, this.exclusiveDetails.marketingRound, this.exclusiveDetails.batch, [0,0,0,0,0,0,0,0,0]);
    //       let personalDetails = new PersonalDetails(this.name,this.email,this.dob,new Date());
    //       this.userService.getProfileDetailsByKey('username', profileDetails.username).pipe(take(1)).subscribe((response) => {
    //         if (Object.keys(response).length === 0) {
    //           this.userService.addProfileDetails(resData.localId, profileDetails);
    //           this.userService.addPersonalDetails(resData.localId,personalDetails);
    //           this.userService.addProfileStickers(resData.localId,[]);
    //           this.userService.addDisplayPicture(resData.localId, new DisplayPicture(new Date(), 'null'), null);
    //           this.userService.addOnBoarding(resData.localId, onBoardingData);
    //           this.activityService.addActivity(resData.localId, 'user');
    //           this.authService.addExclusiveUser(this.exclusiveId, this.userNumber + 1, {dateCreated: new Date(), uid: resData.localId, username: this.username, fullname: this.name, email: this.email});
    //           form.reset();
    //           this.isLoading = false;
    //           this.miscellaneousService.onBoardingStep$.next(2);
    //           this.miscellaneousService.startOnBoarding(resData.localId);
    //           this.router.navigate(['/tutorial']);
    //         } else {
    //           this.error = "Username taken";
    //           this.authService.deleteUser(resData.idToken).pipe(take(1)).subscribe(response => {
    //             this.authService.logout(false);
    //             this.isLoading = false;
    //           }, errorMessage => {
    //             this.isLoading = false;
    //             console.log(errorMessage);
    //           });
    //         }
    //       });
    //     } else if (this.isForgetMode) {
    //       this.miscellaneousService.setPopUp(new PopUp("An email has been sent to your account",'okay', undefined, ['default', 'reject']));
    //       this.miscellaneousService.getPopUpInteraction().pipe(take(1)).subscribe(response => {
    //         this.isLoading = false;
    //       });
    //     }
    //   },
    //   errorMessage => {
    //     this.error = errorMessage;
    //     this.isLoading = false;
    //   }
    // );
  }

  avoidSpace(event) {
    let k = event.keyCode;
    if (k == 32) return false;
  }

  alphaOnly(event) {
    let key = event.keyCode;
    return ((key >= 65 && key <= 90) || key == 8 || key == 32);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
