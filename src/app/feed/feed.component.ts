import { AuthService } from './../auth/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { PostDetails } from './../shared/post.model';
import { take, takeUntil } from 'rxjs/operators';
import { WindowStateService } from '../shared/window.service';
import { FeedService } from './feed.service';
import { ScrollService } from '../shared/scroll.service';
import { MiscellaneousService } from '../shared/miscellaneous.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})

export class FeedComponent implements OnInit, OnDestroy {

  postsList$: Observable<PostDetails[]>;

  feedList$ = new Subject<PostDetails[]>();
  notifier$ = new Subject();

  postsList: PostDetails[];

  batch: number = 0;
  maxBatch: number = 0;
  batchSize: number = 4; //number of posts to load - min batch size is 2
  batchNumber: number = 1;
  done: boolean;
  postOffset: number; //Trigger next post after this value
  failSafe: boolean;
  loading: boolean;

  addIcon = "assets/icons/add_icon@2x.png";

  //Video auto play and pause
  postHeight: number; //height of the posts
  postMarginTop: number; //margin on each post;
  postNumber: number; //the index of the post thats being viewed
  postNumber$ = new Subject<number>(); //the index of the post thats being viewed
  showProfileDisplay: boolean; //weather or not to show the profile display tab
  profileDisplayHeight: number; //height of the posts

  firstView: number;
  viewPort: number;

  uid$ = new BehaviorSubject<string>(null); //From URL
  myUid: string; //Authenticated user uid
  isAuthenticated: boolean;
  lastRoute: string; //last route that user was on
  inSnap: boolean;
  lastScroll: number;
  mobileCheck: boolean;

  lastHeight: number = 0;
  currentScroll: number = 0;
  triggerMultiplier = 0.03;
  triggerArea: number;
  scrolled: boolean; //scroll completed
  scrolling: boolean;//scroll in progress
  touchDown: boolean = false;
  maxPostNumber: number = -2;

  @ViewChild('scrollContainer') scrollContainer: ElementRef;
  @ViewChild('post') post: ElementRef;

  constructor(private windowService: WindowStateService,
              private feedService: FeedService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private scrollService: ScrollService) {
   }


  ngOnInit(): void {

    this.authService.user.pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.isAuthenticated = !!response;
      if (this.isAuthenticated) {
        this.myUid = response.id;
      }
    });

    this.done = false;
    this.failSafe = false;
    this.loading = true;
    this.inSnap = false;

    this.getPosts(this.router.url);
    this.router.events.pipe(takeUntil(this.notifier$)).subscribe(val => {
      this.lastHeight = 0;
      this.getPosts(this.router.url);
    });

    this.route.params
    .subscribe(
      (params: Params) => {
        this.uid$.next(params['id']);
      });

     this.windowService.screenWidthValue.pipe(takeUntil(this.notifier$))
    .subscribe(val => {
      if (val < 768) {
        this.mobileCheck = true;
      } else {
        this.mobileCheck = false;
      }

      if (val < 560) {
        this.profileDisplayHeight = 281*val/560;
      } else {
        this.profileDisplayHeight = 281;
      }
    });

    this.setUpScroll();
    this.resetPostNumber();
    this.postNumber$.pipe(takeUntil(this.notifier$)).subscribe(newNum => {
      this.postNumber = newNum;
      this.infiniteScroll();
    })
  }

  setUpScroll() {
    this.scrollService.getScroll().pipe(takeUntil(this.notifier$)).subscribe(scrollY => {
      this.postFocus(scrollY);
    });
  }

  getViewport() {
    this.postMarginTop = 0;
    this.postHeight = this.post.nativeElement.offsetHeight;
    this.viewPort = (this.postHeight+this.postMarginTop);
    this.triggerArea = this.triggerMultiplier*this.viewPort;
  }

  getPosts(currentRoute: string) {
    if (currentRoute === this.lastRoute) {return}
    this.lastRoute = currentRoute;
    currentRoute = currentRoute.split('/')[1]; //get parent route
    this.showProfileDisplay = false;
    this.resetPostNumber();
    if (currentRoute === 'explore') {
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
    this.postNumber = this.showProfileDisplay ? -1 : 0;
    this.postNumber$.next(this.postNumber);
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
      } else { this.loading = false;}
    }, error => {
      return;
    });
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
    setTimeout(() => {
      if (this.postsList.length === 0) return;
      this.getViewport();
    }, 100);
  }

  moreBatch() { // get the next batch of posts used for manual render
    this.loading = true;
    if ((this.postsList.length - this.batchSize*this.batchNumber) <= 0) {
      this.feedList$.next(this.postsList);
      this.done = true;
    } else {
      this.feedList$.next(this.postsList.slice(0,this.batchSize*this.batchNumber));
    }
    console.log(this.postsList.slice(0,this.batchSize*this.batchNumber));
    this.batchNumber++;
    this.loading = false;
  }

  infiniteScroll() {
    if (!this.done && this.postNumber > this.maxPostNumber) {
      if (this.postNumber === (this.batchNumber-1)*this.batchSize - 2) {
        this.moreBatch();
      }
      this.maxPostNumber = this.postNumber;
    }
  }

  //user interactions
  userTouchStart() {
    this.touchDown = true;
    this.scrolled = false;
  }

  userTouchEnd() {
    this.touchDown = false;
    if (!this.scrolled) {
      this.postNumber$.next(this.postNumber);
      this.scrolled = true;
    }
  }

  snapTrigger(scrollY: number) {
    if (this.inSnap) return;
    this.inSnap = true;
    const diff = scrollY - this.postNumber*this.viewPort;
    if (diff > this.triggerArea) {
      this.postNumber$.next(this.postNumber+1);
    } else if (diff < -this.triggerArea) {
      this.postNumber$.next(this.postNumber-1);
    }
    setTimeout(() => this.inSnap = false, 1000);
    console.log(this.postNumber,diff);
  }

  setScroll() {
    if (this.touchDown) return;
    window.scrollTo({top:this.postNumber*this.viewPort, left: 0, behavior: 'smooth'});
    this.scrolling = true;
  }

  snapScroll(scrollY) {
    if (this.inSnap) return;
    this.inSnap = true;
    const diff = scrollY - this.postNumber*this.viewPort;
    console.log(diff, this.triggerArea); //temp log
    if (diff > this.triggerArea) {
      this.postNumber$.next(this.postNumber+1);
    } else if (diff < -this.triggerArea) {
      this.postNumber$.next(this.postNumber-1);
    }
    setTimeout(() => this.inSnap = false, 500);
    this.currentScroll = this.postNumber*this.viewPort;
  }

  snapLimiter(scrollY: number) {
    if (this.scrolling) return;
    if (scrollY != this.postNumber*this.viewPort) {
      // this.setScroll();
      window.scrollTo(0,this.postNumber*this.viewPort);
    }
  }

  scrollComplete(scrollY) {
    if (scrollY === this.postNumber*this.viewPort) {
      this.scrolling = false;
    }
  }

  //temp
  postFocus(scrollY) {
    const scroll = this.showProfileDisplay ? scrollY - this.profileDisplayHeight : scrollY;
    this.postNumber$.next(Math.floor(scroll/this.viewPort));
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
    this.feedList$.complete();
  }
}
