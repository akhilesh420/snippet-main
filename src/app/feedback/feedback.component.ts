import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { MiscellaneousService, PopUp } from '../shared/miscellaneous.service';
import { UsersService } from '../shared/users.service';
import { Feedback, FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit, OnDestroy {

  notifier$ = new Subject();
  uid: string;
  username: string;
  fullname: string;
  email: string;
  isAuthenticated: boolean;
  submitted: boolean;

  inputFocus: boolean;
  @ViewChild('input') inputRef : ElementRef;
  feedbackCharLim: number = 500;

  constructor(private feedbackService: FeedbackService,
              private authService: AuthService,
              private userService: UsersService,
              private miscellaneousService: MiscellaneousService) { }

  ngOnInit(): void {
    this.submitted = false;
    this.authService.user.pipe(takeUntil(this.notifier$)) //check if authenticated
    .subscribe(response => {
      this.isAuthenticated = !!response;
      if (this.isAuthenticated) {
        this.uid = response.id; //get uid

        this.userService.getProfileDetails(response.id).pipe(takeUntil(this.notifier$)) //get username
        .subscribe(res => {
          if (res) {
            // this.email = res.email;
            // this.username = res.username;
          }
        })

        this.userService.getPersonalDetails(response.id).pipe(takeUntil(this.notifier$)) //get email and full name
        .subscribe(res => {
          if (res) {
            this.fullname = res.name;
          }
        })
      }
    })
  }

  onSubmit(form: NgForm) {
    if (this.submitted) return;
    const feedback = this.inputRef.nativeElement.textContent.trim();
    if (!feedback && feedback.length === 0) return;
    if (feedback.length > this.feedbackCharLim) return this.miscellaneousService.setPopUp(new PopUp('Feedback has a limit of 500 characters.','Okay', undefined, ['default', 'reject']));
    this.submitted = true;
    var data: Feedback;
    if (this.isAuthenticated) {
      if (!this.username && !this.fullname && !this.email && !this.uid) return this.onError();
      data = {uid: this.uid,
              username: this.username,
              fullname: this.fullname,
              email: this.email,
              dateCreated: new Date(),
              feedback: feedback};
    } else {
      data = {dateCreated: new Date(), feedback: feedback};
    }
    this.feedbackService.addFeedback(data);
    form.reset();
  }

  onClick() {
    this.inputFocus = true;
    setTimeout(() => this.inputRef.nativeElement.focus(), 100);
  }

  onError() {
    this.miscellaneousService.setPopUp(new PopUp('An error occurred! Try again later.','Okay', undefined, ['default', 'reject']));
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
