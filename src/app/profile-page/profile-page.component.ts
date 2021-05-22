import { ScrollService } from './../shared/scroll.service';
import { ActivityService } from './../shared/activity.service';
import { UsersService } from './../shared/users.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { FeedService } from './../feed/feed.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, Event as NavigationEvent, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import { Feed } from '../shared/post.model';
import { ProfileSticker } from '../shared/profile.model';
import { WindowStateService } from '../shared/window.service';
import { MiscellaneousService } from '../shared/miscellaneous.service';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit, OnDestroy {

  posts$: Observable<Feed[]> = new Observable();

  myUid: string;
  lastUid: string; //To stop reloading of user data on route change
  uid: string;
  isAuthenticated: boolean = false;

  username$: Observable<{username: string}>;
  views$: Observable<{ counter: number }>;
  collectors$: Observable<{ counter: number }>;
  profileStickers$: Observable<{stickers: ProfileSticker[] | string[]}> = new Observable<{stickers: ProfileSticker[] | string[]}>()
    .pipe(startWith({stickers: ['loading','loading','loading','loading','loading']}));
  description: string = '';
  link: string = '';
  name: string = '';
  dateJoined: any;

  childRoute: string;
  tabletCheck: boolean;

  currentScroll: number;

  notifier$ = new Subject();

  constructor(private feedService: FeedService,
              private usersService: UsersService,
              private activityService: ActivityService,
              private miscellaneousService: MiscellaneousService,
              private router: Router,
              private route: ActivatedRoute,
              private auth: AngularFireAuth,
              private windowStateService: WindowStateService,
              private scrollService: ScrollService) { }

  ngOnInit(): void {    
    this.route.params
      .pipe(takeUntil(this.notifier$))
      .subscribe(params => {
      this.getPosts(params['page'], params['id']);
      });

    this.auth.onAuthStateChanged((user) => {
      this.isAuthenticated = !!user;
      if(this.isAuthenticated) this.myUid = user.uid;
    });

    this.windowStateService.screenWidthValue
      .pipe(takeUntil(this.notifier$))
      .subscribe(() => {
        this.tabletCheck = this.windowStateService.tabletCheck;
      });

    this.currentScroll = window.scrollY;
    this.scrollService.getScroll()
      .pipe(takeUntil(this.notifier$))
      .subscribe((scroll) => {
        this.currentScroll = scroll;
      });

  }

  setUpProfile(uid: string) {
    if (this.lastUid === uid) return;
    this.lastUid = uid;
    this.username$ = this.usersService.getUsername(uid);
    this.views$ = this.activityService.getActivityViews(uid)
      .pipe(startWith({counter: 0}));
    this.collectors$ = this.activityService.getActivityCollection(uid)
      .pipe(startWith({counter: 0}));
    this.profileStickers$ = this.usersService.getProfileStickers(uid)
      .pipe(startWith({stickers: ['loading','loading','loading','loading','loading']}));
    this.usersService.getPersonalDetails(uid)
      .pipe(takeUntil(this.notifier$))
      .subscribe((personal) => {
        if (!personal) return;
        this.name = personal.name;
        this.dateJoined = personal.dateCreated.seconds * 1000;
      });
    this.usersService.getProfileDetails(uid)
      .pipe(takeUntil(this.notifier$))
      .subscribe((details) => {
        if (!details) return;
        this.description = details.description;
        this.link = details.link;
      });
  }

  getPosts(childRoute: string, uid: string) {
    this.childRoute = childRoute;
    this.uid = uid;

    this.setUpProfile(this.uid);
    // My posts
    if (this.childRoute === 'posts') return this.posts$ = this.feedService.getProfilePage(this.uid);
    // My Collection
    this.posts$ = this.feedService.getCollectionPage(this.uid);
    this.miscellaneousService.startLoading();
  }

  stickerTrackByFn(index, item: ProfileSticker) {
    return !!item ? item.pid : index;
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
