import { AuthService } from './../auth/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Component, OnInit, Input, HostListener, OnChanges, OnDestroy, ChangeDetectionStrategy, ElementRef, ViewChild } from '@angular/core';
import { PostDetails } from './../shared/post.model';
import { take, takeUntil } from 'rxjs/operators';
import { WindowStateService } from '../shared/window.service';
import { FeedService } from './feed.service';
import { ScrollService } from '../shared/scroll.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit, OnDestroy {

  postsList$: Observable<PostDetails[]>;

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

  addIcon = "assets/icons/add_icon@2x.png";

  //Video auto play and pause
  postHeight: number; //height of the posts
  postMargin: number; //margin on each post;
  postNumber: number; //the index of the post thats being viewed
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

  navbarHeight: number = 47;

  @ViewChild('scrollContainer') scrollContainer: ElementRef;

  constructor(private windowService: WindowStateService,
              private feedService: FeedService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private scrollService: ScrollService) {
   }


  ngOnInit(): void {

    this.postNumber = this.showProfileDisplay ? undefined : 0;

    this.authService.user.pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.isAuthenticated = !!response;
      if (this.isAuthenticated) {
        this.myUid = response.id;
      }
    });

    this.done = false;
    this.failSafe = true;
    this.loading = true;
    this.inSnap = false;

    this.getPosts(this.router.url);
    this.router.events.pipe(takeUntil(this.notifier$)).subscribe(val => {
      this.getPosts(this.router.url);
    });

    this.route.params
    .subscribe(
      (params: Params) => {
        this.uid$.next(params['id']);
      });

    this.postMargin = 0;
    this.postHeight = window.innerHeight - this.navbarHeight;
    this.windowService.screenWidthValue.pipe(takeUntil(this.notifier$))
    .subscribe(val => {
      if (val < 850) {
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

    this.viewPort = (this.postHeight+this.postMargin);

    this.scrollService.getScroll().pipe(takeUntil(this.notifier$)).subscribe(scrollY => {
      console.log(scrollY, this.scrollContainer.nativeElement.offsetHeight - this.viewPort); //temp log
      this.infiniteScroll(scrollY);
      this.postFocus(scrollY);
    })
  }

  getPosts(currentRoute: string) {
    if (currentRoute === this.lastRoute) {return}
    this.lastRoute = currentRoute;
    console.log(currentRoute.split('/')); //log
    currentRoute = currentRoute.split('/')[1]; //get parent route
    this.showProfileDisplay = false;
    if (currentRoute === 'explore') {
      this.postsList$ = this.feedService.getExplorePage();
    } else if (currentRoute === 'collection') {
      const uid = this.route.snapshot.params['id']
      this.uid$.next(uid);
      if (this.myUid != uid) { //Redirect if not your collection
        this.router.navigate(['/explore']);
        return;
      }
      this.postsList$ = this.feedService.getCollectionPage(uid,this.notifier$);
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

  setUpPosts() {
    this.postsList$.pipe(takeUntil(this.notifier$)).subscribe(response => {
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

  infiniteScroll(scrollY: number) {

    // if (!this.done && !this.failSafe) {
    //   if (bottom) {
    //     this.moreBatch();
    //   }
    // }
  }

  postFocus(scrollY: number) {
    //Don't play while on profile display box
    if (this.showProfileDisplay) scrollY = scrollY - this.profileDisplayHeight;
    if (scrollY < 0) {
      this.postNumber = undefined;
      return;
    }

    this.postNumber = Math.floor(scrollY/this.viewPort);
  }

  snapScroll(scrollDiff) {
    // console.log(scrollDiff);
    // const snapActivate: number = 0.2;
    // let i = this.postNumber;
    // if (scrollDiff >= this.viewPort*snapActivate) {
    //   ++i;
    // } else if (scrollDiff <= -this.viewPort*snapActivate){
    //   if (i > 0) --i;
    // }
    // this.inSnap = true;
    // this.scrollContainer.nativeElement.scroll(0,i*this.viewPort);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
    this.feedList$.complete();
  }
}
