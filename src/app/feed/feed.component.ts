import { Observable, Subject } from 'rxjs';
import { Component, OnInit, Input, HostListener, OnChanges, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { PostDetails } from './../shared/post.model';
import { takeUntil } from 'rxjs/operators';
import { InfiniteScrollService } from '../shared/infinite-scroll.service';
import { WindowStateService } from '../shared/window.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit, OnDestroy {

  @Input() postsList$: Observable<PostDetails[]>;
  @Input() feedType: string = 'afs';

  feedList$ = new Subject<PostDetails[]>();
  notifier$ = new Subject();

  postsList: PostDetails[];

  batch: number = 0;
  maxBatch: number = 0;
  batchSize: number = 4; //number of posts to load - min batch size is 2
  batchNumber: number = 0;
  done: boolean;
  postOffset: number; //Trigger next post after this value
  failSafe: boolean;
  loading: boolean;
  getScroll$ = new Subject();

  addIcon = "assets/icons/add_icon@2x.png";

  constructor() {
   }

  ngOnInit(): void {
    this.done = false;
    this.failSafe = true;
    this.loading = true;

    this.postsList$.pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.done = false;
      this.postsList = response;
      if (this.postsList) {
        this.initBatch();
        this.getScroll$.pipe(takeUntil(this.notifier$))
        .subscribe((event:string) => {
          event === 'error' ? this.failSafe = true : this.failSafe = false;
          if (!this.done && !this.failSafe) {
            if (event === 'bottom') {
              this.moreBatch();
            }
          }
        })
      } else { this.loading = false;}
    });
  }

  ngOnChanges() {
    this.ngOnInit();
  }

  initBatch() { // get initial batch of posts to render
    this.loading = true;
    if (this.postsList.length <= this.batchSize) {
      this.feedList$.next(this.postsList);
      this.done = true;
    } else {
      this.feedList$.next(this.postsList.slice(0,this.batchSize));
    }
    this.batchNumber++;
    this.loading = false;
  }

  moreBatch() { // get the next batch of posts used for manual render
    this.loading = true;
    if ((this.postsList.length - this.batchSize*this.batchNumber) <= 0) {
      this.feedList$.next(this.postsList);
      this.done = true;
    } else {
      this.feedList$.next(this.postsList.slice(0,this.batchSize*this.batchNumber));
    }
    this.batchNumber++;
    this.loading = false;
  }

  scrollHandler(event) {
    console.log(event);
    this.getScroll$.next(event);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
    this.feedList$.complete();
  }
}
