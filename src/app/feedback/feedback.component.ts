import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../shared/users.service';
import { Feedback, FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  notifier$ = new Subject();
  uid: string;
  username: string;
  fullname: string;
  email: string;
  feedback: string;
  isAuthenticated: boolean;
  data: Feedback;
  submitted: boolean;

  constructor(private feedbackService: FeedbackService,
              private authService: AuthService,
              private userService: UsersService) { }

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
            this.username = res.username;
          }
        })

        this.userService.getPersonalDetails(response.id).pipe(takeUntil(this.notifier$)) //get email and full name
        .subscribe(res => {
          if (res) {
            this.fullname = res.name;
            this.email = res.email;
          }
        })
      }
    })
  }

  onSubmit(form: NgForm) {
    this.feedback.trim();
    if (!this.submitted && this.feedback && this.feedback.length != 0) {
      if (this.isAuthenticated) {
        if (!this.username && !this.fullname && !this.email && !this.uid) {return}
        this.data = {uid: this.uid, username: this.username, fullname: this.fullname, email: this.email, dateCreated: new Date(), feedback: this.feedback};
      } else {
        this.data = {dateCreated: new Date(), feedback: this.feedback};
      }
      this.feedbackService.addFeedback(this.data);
      this.submitted = true;
      form.reset();
    }
  }

  autoGrowTextZone(e) {
    e.target.style.height = "0px";
    e.target.style.height = (e.target.scrollHeight + 25)+"px";
  }
}
