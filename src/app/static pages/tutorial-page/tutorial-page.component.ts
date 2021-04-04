import { environment } from './../../../environments/environment';
import { AuthService } from './../../auth/auth.service';
import { PostDetails } from './../../shared/post.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MiscellaneousService, PopUp } from 'src/app/shared/miscellaneous.service';
import { FeedService } from 'src/app/feed/feed.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tutorial-page',
  templateUrl: './tutorial-page.component.html',
  styleUrls: ['./tutorial-page.component.css']
})
export class TutorialPageComponent implements OnInit, OnDestroy {

  notifier$ = new Subject();

  onBoardingStep: number;
  onBoardingStep$ = new Subject<number>();

  constructor(public router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
