import { Observable, Subject } from 'rxjs';
import { Component, OnInit, Input, HostListener, OnChanges, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { PostDetails } from './../shared/post.model';
import { takeUntil } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit, OnDestroy {

  @Input() postsList$: Observable<PostDetails[]>; 
  @Input() feedType: string; 

  feedList$ = new Subject<PostDetails[]>();
  notifier$ = new Subject();

  postsList: PostDetails[];
  
  batch: number = 0;
  maxBatch: number = 0;
  batchSize: number = 2; //number of posts to load - min batch size is 2
  batchNumber: number = 0;
  done: boolean;

  constructor() {
   }

  ngOnInit(): void {
    this.done = false;
    this.postsList$.pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.postsList = response;
      this.dateSort();
      console.log(this.postsList); //log
      this.initBatch();
    })
  }

  dateSort() { //sort by date depending onif the data was fetched from cloud firestore or realtime database
    if (this.feedType === 'afs' || this.feedType === 'afs') {
      this.postsList.sort((a, b) => b.dateCreated.toMillis() - a.dateCreated.toMillis())
    } else if (this.feedType === 'db') {
      this.postsList.sort((a, b) => b.dateCreated - a.dateCreated);
    }
  }

  initBatch() {
    if (this.postsList.length <= this.batchSize) {
      this.feedList$.next(this.postsList);
      this.done = true;
    } else {
      console.log(this.postsList.slice(0,this.batchSize)); //log
      this.feedList$.next(this.postsList.slice(0,this.batchSize));
    }
    this.batchNumber++;
  }

  more() {
    if ((this.postsList.length - this.batchSize + this.batchNumber) <= 0) {
      this.feedList$.next(this.postsList);
      this.done = true;
    } else {
      console.log(this.postsList.slice(this.batchSize*this.batchNumber)); //log
      this.feedList$.next(this.postsList.slice(0,this.batchSize+this.batchNumber));
    }
    this.batchNumber++;
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    if (!this.done) {
      this.batch = Math.floor(window.pageYOffset / 600);
      if (this.maxBatch < this.batch) {
        console.log("Scroll Event:", this.batch); //log
        this.more();
        this.maxBatch = this.batch
      }}
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
    this.feedList$.complete();
  }
}
