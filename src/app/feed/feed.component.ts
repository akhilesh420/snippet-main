import { AuthService } from './../auth/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Component, OnInit, OnDestroy, ElementRef, ViewChild, EventEmitter, Input } from '@angular/core';
import { PostDetails } from './../shared/post.model';
import { take, takeUntil } from 'rxjs/operators';
import { FeedService } from './feed.service';
import { MiscellaneousService } from '../shared/miscellaneous.service';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})

export class FeedComponent implements OnInit, OnDestroy {

  postsList$: Observable<PostDetails[]> | BehaviorSubject<PostDetails[]>;

  feedList$: BehaviorSubject<PostDetails[]>;
  notifier$ = new Subject();

  postsList: PostDetails[];

  batch: number = 0;
  maxBatch: number = 0;
  batchSize: number = 4; //number of posts to load - min batch size is 2
  batchNumber: number = 1;
  done: boolean;
  postOffset: number; //Trigger next post after this value
  failSafe: boolean;

  //Video auto play and pause
  postHeight: number; //height of the posts
  postMarginTop: number; //top margin on each post;
  postMarginBottom: number; // bottom margin on each post;
  postNumber: number; //the index of the post thats being viewed
  postNumber$ = new BehaviorSubject<number>(0); //the index of the post thats being viewed
  showProfileDisplay: boolean; //weather or not to show the profile display tab

  viewPort: number;

  uid$ = new BehaviorSubject<string>(null); //From URL
  myUid$ = new BehaviorSubject<string>(null); //From URL
  myUid: string; //Authenticated user uid
  isAuthenticated: boolean;
  lastRoute: string; //last route that user was on
  mobileCheck: boolean;

  maxPostNumber: number = -2;

  @ViewChild('post') post: ElementRef;

  profileStickerEdit: boolean = false;

  constructor(private miscellaneousService: MiscellaneousService,
              private feedService: FeedService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private scrollService: ScrollService) {
   }


  ngOnInit(): void {

    this.feedList$ = new BehaviorSubject<PostDetails[]>(null);

    this.authService.user.pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.isAuthenticated = !!response;
      if (this.isAuthenticated) {
        this.myUid = response.id;
        this.myUid$.next(response.id);
      }
    });

    this.done = false;
    this.failSafe = false;

    this.getPosts(this.router.url);
    this.router.events.pipe(takeUntil(this.notifier$)).subscribe(val => {
      this.getPosts(this.router.url);
    });

    this.route.params
    .subscribe(
      (params: Params) => {
        this.uid$.next(params['id']);
      });

    this.setUpScroll();

    this.resetPostNumber();

    this.postNumber$.pipe(takeUntil(this.notifier$)).subscribe(newNum => {
      this.postNumber = newNum;
      this.infiniteScroll();
    });

    this.miscellaneousService.profileStickerEdit.pipe(takeUntil(this.notifier$))
      .subscribe(value => this.profileStickerEdit = value);
  }

  setUpScroll() {
    this.scrollService.getScroll().pipe(takeUntil(this.notifier$)).subscribe(scrollY => {
      this.postFocus(scrollY);
    });
  }

  getViewport() {
    try {
      this.postMarginTop = 15;
      this.postMarginBottom = this.mobileCheck ? 0 : 25;
      this.postHeight = this.post.nativeElement.offsetHeight;
      this.viewPort = (this.postHeight);
    } catch(error) {
      console.log(error);
    }
  }

  getPosts(currentRoute: string) {
    if (currentRoute === this.lastRoute) return;
    this.lastRoute = currentRoute;
    currentRoute = currentRoute.split('/')[1]; //get parent route
    this.showProfileDisplay = false;
    this.resetPostNumber();
    if (currentRoute === 'explore') {
      this.myUid$.pipe(take(2)).subscribe(uid => {
        if (!uid) return;
        setTimeout(() => this.uid$.next(uid), 100);
      });
      this.postsList$ = this.feedService.getExplorePage();
    } else if (currentRoute === 'collection') {
      const uid = this.route.snapshot.params['id']
      this.uid$.next(uid);
      if (this.myUid != uid) { //Redirect if not your collection
        this.router.navigate(['/explore']);
        return;
      }
      this.postsList$ = this.feedService.getCollectionPage(uid);
      this.showProfileDisplay = true;
    } else if (currentRoute === 'profile') {
      const uid = this.route.snapshot.params['id']
      this.uid$.next(uid);
      this.postsList$ = this.feedService.getProfilePage(uid);
      this.showProfileDisplay = true;
    } else if (currentRoute === 'post') {
      const pid = this.route.snapshot.params['id'];
      this.postsList$ = this.feedService.getPostPage(pid);
      this.postsList$.pipe(take(1)).subscribe(res => {
        this.uid$.next(res[0].uid);
      });
      this.showProfileDisplay = true;
    }

    this.setUpPosts();
  }

  resetPostNumber() {
    this.postNumber$.next(0);
    this.done = true;
  }

  setUpPosts() {
    this.postsList$.pipe(takeUntil(this.notifier$)).subscribe(response => {
      if (!response) {
        this.done = true;
        return;
      }
      this.done = false;
      this.postsList = response;
      if (this.postsList) {
        this.initBatch();
      }
    }, error => {
      this.feedList$.next([]);
      this.done = true;
      return console.log(error);
    });
  }

  initBatch() { // get initial batch of posts to render
    if (this.postsList.length <= this.batchSize) {
      this.feedList$.next(this.postsList);
      this.done = true;
    } else {
      this.feedList$.next(this.postsList.slice(0,this.batchSize));
    }
    this.batchNumber++;
    setTimeout(() => {
      if (this.postsList.length === 0) return;
      this.getViewport();
    }, 100);
  }

  moreBatch() { // get the next batch of posts used for manual render
    if ((this.postsList.length - this.batchSize*this.batchNumber) <= 0) {
      this.feedList$.next(this.postsList);
      this.done = true;
    } else {
      this.feedList$.next(this.postsList.slice(0,this.batchSize*this.batchNumber));
    }
    this.batchNumber++;
  }

  infiniteScroll() {
    if (!this.done && this.postNumber > this.maxPostNumber) {
      if (this.postNumber >= (this.batchNumber-1)*this.batchSize - 2) {
        this.moreBatch();
      }
      this.maxPostNumber = this.postNumber;
    }
  }

  //temp
  postFocus(scrollY) {
    const scroll = scrollY;
    // const scroll = this.showProfileDisplay ? scrollY - this.profileDisplayHeight : scrollY;
    this.postNumber$.next(Math.round(scroll/this.viewPort));
    // this.postNumber$.next(Math.floor(scroll/this.viewPort));
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  ngOnDestroy() {
    console.log('destroy');
    this.notifier$.next();
    this.notifier$.complete();
    this.feedList$.complete();
  }
}
