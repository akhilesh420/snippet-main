import { WindowStateService } from './../shared/window.service';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Feed } from './../shared/post.model';
import { takeUntil } from 'rxjs/operators';
import { FeedService } from './feed.service';
import { MiscellaneousService } from '../shared/miscellaneous.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FeedComponent implements OnInit, OnChanges, OnDestroy {

  @Input() posts$: Observable<Feed[]> = new Observable();

  feedList$: BehaviorSubject<Feed[]>;
  notifier$ = new Subject();

  postsList: Feed[];

  batch: number = 0;
  maxBatch: number = 0;
  batchSize: number = 4; //number of posts to load - min batch size is 2
  batchNumber: number = 1; //start from 1
  done: boolean = true;

  mobileCheck: boolean;
  tabletCheck: boolean;

  subscription: Subscription;

  constructor(private feedService: FeedService,
              private windowStateService:  WindowStateService,
              private miscellaneousService: MiscellaneousService) {
   }


  ngOnInit(): void {
    this.windowStateService.screenWidthValue.pipe(takeUntil(this.notifier$))
    .subscribe(val => {
      if (!val) return;
      this.tabletCheck = this.windowStateService.tabletCheck;
      this.mobileCheck = this.windowStateService.mobileCheck;
    });

    // Infinite scroll
    this.feedService.currentPost.pipe(takeUntil(this.notifier$)).subscribe(pid => {
      if (!pid) return;
      const currentFeed = this.feedList$.value
      const index = currentFeed.findIndex(post => post.pid === pid);
      if (index === currentFeed.length - 2) this.moreBatch();
    });

    this.setUpPosts();
  }

  ngOnChanges() {
    if (this.subscription) this.subscription.unsubscribe();
    this.setUpPosts();
  }

  setUpPosts() {
    const emptyFeed = new Feed(undefined, undefined, undefined);
    this.feedList$ = new BehaviorSubject<Feed[]>([emptyFeed]);
    this.done = true;

    this.subscription = this.posts$.pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.miscellaneousService.endLoading();
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
