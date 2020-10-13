import { ProfileService } from './../shared/profile.service';
import { DataService } from './../shared/data.service';
import { Biography, ProfileDetails, PersonalDetails } from './../shared/profile.model';
import { ProfileDataService } from './../shared/profiledata.service';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, AuthResponseData } from './auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';



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
  passwordValidator = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

  userSubs: Subscription;
  subProfileDetails: Subscription;

  isAuthenticated: boolean = false;


  constructor(private authService: AuthService,
              private router: Router,
              private dataService: DataService,
              private profileService: ProfileService,
              private profileDataService: ProfileDataService) {}

  ngOnInit(): void {
     let todayDate = new Date();
    this.allowedDate = new Date(todayDate.getFullYear() - this.minAge, todayDate.getMonth(), todayDate.getDate());
  }

  onSwitchMode(event: string) {
    if (event === 'login') {
      this.isLoginMode = !this.isLoginMode;
      this.isForgetMode = false;
      this.error = null;
    } else if (event === 'forget') {
      this.isForgetMode = true;
      this.isLoginMode = false;
      this.error = null;
    }
  }

  onSubmit(form: NgForm) {

    if (!this.email || this.email.length === 0) {
      this.error = "Email is required"
      return;
    }

    if (!this.isForgetMode) {
      if (!this.isLoginMode) {
        if (!this.name || this.name.length === 0) {
          this.error = "Full name is required"
          return;
        }
        if (!this.username || this.username.length === 0) {
          this.error = "Username is required"
          return;
        }
        if (this.username && this.username.indexOf(' ') != -1) {
          this.error = "Username can't have spaces"
          return;
        }
        if (!this.dob || this.dob <= this.allowedDate) {
          this.error = "Must be at least 13 years old"
          return;
        }
      }

      if (!this.password || this.password.length === 0) {
        this.error = "Password is required"
        return;
      }
      if (!this.password || this.password.length < 6) {
        this.error = "Password must be at least 6 characters"
        return;
      }
    }


    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode && !this.isForgetMode) {
      authObs = this.authService.logIn(email, password);
    } else if (!this.isLoginMode && !this.isForgetMode){
      authObs = this.authService.signUp(email, password);
    } else if (this.isForgetMode) {
      authObs = this.authService.forgotPassword(email);
    }

    authObs.subscribe(
      resData => {
        if (this.isLoginMode && !this.isForgetMode) {
          this.subProfileDetails = this.profileService.getProfileDetails(resData.localId).pipe(take(2)).subscribe(response => {
          },
          errorMessage => {
            console.log(errorMessage);
          });

          form.reset();
          this.router.navigate(['/explore']);
        } else if (!this.isLoginMode && !this.isForgetMode) {
          let profileDetails  = new ProfileDetails(this.username, new Biography("","",""));
          let personalDetails = new PersonalDetails(this.name,this.email,this.dob,new Date());
          let prid: string;
          this.profileDataService.fetchUsername(profileDetails.username).subscribe((response) => {
            if (Object.keys(response).length === 0) {
              this.profileDataService.addProfileDetails(profileDetails, resData.localId).subscribe((response) => {
                prid = response['name'];
                this.profileDataService.addUsername(profileDetails.username).subscribe( response => {
                  this.profileDataService.addPersonalDetails(personalDetails, resData.localId).subscribe(
                    response => {}, errorMessage => {
                      this.error = errorMessage;
                    }
                  )
                 }, errorMessage => {
                   this.error = errorMessage;
                  })
              },errorMessage => { this.error = errorMessage;});
              form.reset();
              this.router.navigate(['/explore']);
            } else {
              this.error = "Username taken";
              this.authService.deleteUser(resData.idToken).subscribe(response => {
                this.authService.logout(false);
              }, errorMessage => {
                console.log(errorMessage);
              });
            }
          })
        } else if (this.isForgetMode) {
          alert("An email has been sent to your account");
        }
        this.isLoading = false;
      },
      errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
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
  }
}
