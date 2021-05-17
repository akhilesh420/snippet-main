import { MixpanelService } from './../shared/mixpanel.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsersService } from 'src/app/shared/users.service';
import { WindowStateService } from './../shared/window.service';
import { AuthService } from './../auth/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
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

  pidList$: Observable<Feed[]>;

  feedList$: BehaviorSubject<Feed[]>;
  notifier$ = new Subject();

  postsList: Feed[];

  batch: number = 0;
  maxBatch: number = 0;
  batchSize: number = 4; //number of posts to load - min batch size is 2
  batchNumber: number = 1; //start from 1
  done: boolean = true;

  showProfileDisplay: boolean; //show the profile display tab
  showProfileNavigation: boolean; //show the profile display tab

  uid$ = new BehaviorSubject<string>(null); //From URL
  myUid$ = new BehaviorSubject<string>(null); //From URL
  displayPicture$: Observable<string>; //From URL
  myUid: string; //Authenticated user uid
  uid: string; //current profile uid
  isAuthenticated: boolean;
  lastRoute: string; //last route that user was on
  mobileCheck: boolean;
  tabletCheck: boolean;

  @ViewChild('post') postRef: ElementRef;

  profileStickerEdit: boolean = false;

  constructor(private miscellaneousService: MiscellaneousService,
              private feedService: FeedService,
              private router: Router,
              private route: ActivatedRoute,
              private auth: AngularFireAuth,
              private windowStateService: WindowStateService,
              private usersService: UsersService,
              private mixpanelService: MixpanelService) {
   }


  ngOnInit(): void {

    const emptyFeed = new Feed(undefined, undefined, undefined, false);
    this.feedList$ = new BehaviorSubject<Feed[]>([emptyFeed]);

    this.auth.onAuthStateChanged((user) => {
      this.isAuthenticated = !!user;
      if (!this.isAuthenticated) return;
      this.myUid = user.uid;
      this.myUid$.next(this.myUid);
      this.displayPicture$ = this.usersService.getDisplayPicture(this.myUid);
      if ((this.router.url.split('/')[1] === 'profile'
           || this.router.url.split('/')[1] === 'collection')
          && this.uid === this.myUid) this.showProfileNavigation = true;
    });

    this.windowStateService.screenWidthValue.pipe(takeUntil(this.notifier$))
    .subscribe(val => {
      if (!val) return;
      this.tabletCheck = this.windowStateService.tabletCheck;
      this.mobileCheck = this.windowStateService.mobileCheck;
    });

    this.route.params
    .subscribe(
      (params: Params) => {
        this.uid$.next(params['id']);
    });

    this.feedService.currentPost.pipe(takeUntil(this.notifier$)).subscribe(pid => {
      if (!pid) return;
      const currentFeed = this.feedList$.value
      const index = currentFeed.findIndex(post => post.pid === pid);
      if (index === currentFeed.length - 2) this.moreBatch();
    })

    this.miscellaneousService.profileStickerEdit.pipe(takeUntil(this.notifier$)).subscribe(value => this.profileStickerEdit = value);

    this.getPosts(this.router.url);

    this.router.events.pipe(takeUntil(this.notifier$)).subscribe(val => {
      this.getPosts(this.router.url);
    });

  }

  getPosts(currentRoute: string) {
    if (currentRoute === this.lastRoute) return;
    this.lastRoute = currentRoute;
    currentRoute = currentRoute.split('/')[1]; //get parent route

    this.showProfileDisplay = false;
    this.showProfileNavigation = false;
    this.done = true;
    if (currentRoute === 'explore') {
      this.myUid$.pipe(take(2)).subscribe(uid => {
        if (!uid) return;
        this.uid = uid;
        setTimeout(() => this.uid$.next(uid), 100);
      });
      this.pidList$ = this.feedService.getExplorePage();
    } else if (currentRoute === 'collection') {
      this.uid = this.route.snapshot.params['id'];
      this.uid$.next(this.uid);
      this.pidList$ = this.feedService.getCollectionPage(this.uid);
      if (this.tabletCheck) this.showProfileDisplay = true;
      this.showProfileNavigation = true;
    } else if (currentRoute === 'profile') {
      this.uid = this.route.snapshot.params['id']
      this.uid$.next(this.uid);
      this.pidList$ = this.feedService.getProfilePage(this.uid);
      if (this.tabletCheck) this.showProfileDisplay = true;
      if (this.uid === this.myUid) this.showProfileNavigation = true;
    } else if (currentRoute === 'post') {
      const pid = this.route.snapshot.params['id'];
      this.pidList$ = this.feedService.getPostPage(pid);
      this.pidList$.pipe(take(1)).subscribe(res => {
        this.uid = res[0].creatorID;
        this.uid$.next(this.uid);
      });
      if (this.tabletCheck) this.showProfileDisplay = true;
    }

    this.setUpPosts();
  }

  setUpPosts() {
    this.pidList$.subscribe(response => {
      if (!response) return this.done = true;

      this.done = false;
      this.postsList = response;
      if (this.postsList.length != 0) {
        this.initBatch();
      } else {
        this.done = true;
        this.feedList$.next([]);
      }

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

  onClickRouteChange(via) {
    this.mixpanelService.setRoutingVia(via);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
    this.feedList$.complete();
  }
}
