import { MixpanelService } from './../shared/mixpanel.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsersService } from 'src/app/shared/users.service';
import { WindowStateService } from './../shared/window.service';
import { AuthService } from './../auth/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Component, OnInit, OnDestroy, ElementRef, ViewChild, Input } from '@angular/core';
import { Feed, PostDetails } from './../shared/post.model';
import { take, takeUntil } from 'rxjs/operators';
import { FeedService } from './feed.service';
import { MiscellaneousService } from '../shared/miscellaneous.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})

export class FeedComponent implements OnInit, OnDestroy {

  @Input() posts$: Observable<Feed[]>;

  feedList$: BehaviorSubject<Feed[]>;
  notifier$ = new Subject();

  postsList: Feed[];

  batch: number = 0;
  maxBatch: number = 0;
  batchSize: number = 4; //number of posts to load - min batch size is 2
  batchNumber: number = 1; //start from 1
  done: boolean = true;

  tabletCheck: boolean;

  constructor(private feedService: FeedService,
              private windowStateService:  WindowStateService) {
   }


  ngOnInit(): void {

    const emptyFeed = new Feed(undefined, undefined, undefined);
    this.feedList$ = new BehaviorSubject<Feed[]>([emptyFeed]);

    this.windowStateService.screenWidthValue.pipe(takeUntil(this.notifier$))
    .subscribe(val => {
      if (!val) return;
      this.tabletCheck = this.windowStateService.tabletCheck;
    });

    this.setUpPosts();
  }

  setUpPosts() {
    this.posts$.pipe(take(1)).subscribe(response => {
      if (!response) return this.done = true;

      this.done = false;
      this.postsList = response;

      if (this.postsList.length != 0) return this.initBatch();

      this.done = true;
      this.feedList$.next([]);
    }, error => {
      this.feedList$.next([]);
      this.done = true;
      return console.log(error);
    });
  }

  initBatch() { // get initial batch of posts to render
    this.batchNumber = 1;
    if (this.postsList.length <= this.batchSize) {
      this.feedList$.next(this.postsList);
      this.done = true;
    } else {
      this.feedList$.next(this.postsList.slice(0,this.batchSize));
    }
    this.batchNumber++;
    this.feedService.currentPost.next(this.feedList$.value[0].pid);
  }

  moreBatch() { // get the next batch of posts used for manual render
    if (this.done) return;
    if ((this.postsList.length - this.batchSize*this.batchNumber) <= 0) {
      this.feedList$.next(this.postsList);
      this.done = true;
    } else {
      this.feedList$.next(this.postsList.slice(0,this.batchSize*this.batchNumber));
    }
    this.batchNumber++;
  }

  trackByFn(index, item) {
    return !!item ? item.pid : index;
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
    this.feedList$.complete();
  }
}
