import { ScrollService } from './../shared/scroll.service';
import { ActivityService } from './../shared/activity.service';
import { UsersService } from './../shared/users.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { FeedService } from './../feed/feed.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, Event as NavigationEvent } from '@angular/router';
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
  displayPicture$: Observable<string>;
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
  gradientColour: string = '#0B0B0B';

  notifier$ = new Subject();

  constructor(private feedService: FeedService,
              private usersService: UsersService,
              private activityService: ActivityService,
              private miscellaneousService: MiscellaneousService,
              private router: Router,
              private auth: AngularFireAuth,
              private windowStateService: WindowStateService,
              private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.getPosts(this.router.url);
    this.router.events
      .pipe(filter((event: NavigationEvent) => event instanceof NavigationEnd), takeUntil(this.notifier$))
      .subscribe((event: NavigationEnd) => {
        this.miscellaneousService.startLoading();
        this.getPosts(event.urlAfterRedirects);
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
    this.displayPicture$ = this.usersService.getDisplayPicture(uid);
    this.views$ = this.activityService.getActivityViews(uid)
      .pipe(startWith({counter: 0}));
    this.collectors$ = this.activityService.getActivityCollection(uid)
      .pipe(startWith({counter: 0}));
    this.profileStickers$ = this.usersService.getProfileStickers(uid)
      .pipe(startWith({stickers: ['loading','loading','loading','loading','loading']}));
    this.usersService.getPersonalDetails(uid)
      .pipe(takeUntil(this.notifier$))
      .subscribe((personal) => {
        this.name = personal.name;
        this.dateJoined = personal.dateCreated.seconds * 1000;
      });
    this.usersService.getProfileDetails(uid)
      .pipe(takeUntil(this.notifier$))
      .subscribe((details) => {
        this.description = details.description;
        this.link = details.link;
      });
    this.usersService.getDisplayPictureRef(uid)
      .pipe(takeUntil(this.notifier$))
      .subscribe((details) => {
        if (!!details.colours) this.gradientColour = details.colours[1];
      });
  }

  getPosts(currentRoute: string) {
    this.childRoute = currentRoute.split('/')[2];
    this.uid = currentRoute.split('/')[3];

    this.setUpProfile(this.uid);
    // My posts
    if (this.childRoute === 'posts') return this.posts$ = this.feedService.getProfilePage(this.uid);
    // My Collection
    this.posts$ = this.feedService.getCollectionPage(this.uid);
  }

  stickerTrackByFn(index, item: ProfileSticker) {
    return !!item ? item.pid : index;
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
