import firebase from 'firebase/app';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { MixpanelService } from './shared/mixpanel.service';
import { FeedService } from 'src/app/feed/feed.service';
import { ScrollService } from './shared/scroll.service';
import { MiscellaneousService, PopUp } from './shared/miscellaneous.service';
import { WindowStateService } from './shared/window.service';
import { Component,  HostListener,  Inject,  OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil,} from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'snippet';

  windowSize: number;
  mobileCheck: boolean;
  tabletCheck: boolean;
  currentRoute: string;
  lastScroll: number;

  notifier$ = new Subject();

  popUpVal: Subject<PopUp>;
  modalState = new Subject<boolean>();

  isAuthenticated: boolean = false;
  myUid: string;
  myUid$ = new BehaviorSubject<string>(null); //From URL

  profileStickerEdit: boolean = false;
  showDashboard: boolean = false;

  beforeUnloadTriggered: boolean = false;

  constructor(private windowStateService: WindowStateService,
              private router: Router,
              private miscellaneousService: MiscellaneousService,
              private feedService: FeedService,
              private scrollService: ScrollService,
              private auth: AngularFireAuth,
              private afs: AngularFirestore,
              private mixpanelService: MixpanelService,
              @Inject(DOCUMENT) private _document ) {
    document.addEventListener("visibilitychange", function() { //mute posts on tab change
      feedService.mutePosts.next(!!document.hidden);
    });
  }

  async ngOnInit() {
    this.setFirestorePersistance();

    this.mixpanelService.init(); //Initialize tracking

    this.mixpanelService.timeEvent('session end');
    this.mixpanelService.timeEvent('sticker collect');
    this.mixpanelService.timeEvent('open holder list');
    this.mixpanelService.timeEvent('route change');

    this.mixpanelService.sessionStartTrack();
    this.mixpanelService.triggerRouteTracks(this.router.url);

    this.windowStateService.checkWidth();
    this.windowStateService.setHeight();
    this.windowStateService.screenWidthValue.pipe(takeUntil(this.notifier$))
    .subscribe(val => {
      if (!val) return;
      this.tabletCheck = this.windowStateService.tabletCheck;
      this.mobileCheck = this.windowStateService.mobileCheck;
      if (!this.tabletCheck) this.miscellaneousService.showDashboard.next(false);
    });

    this.onResize();

    this.popUpVal = this.miscellaneousService.getPopUpSetUp();

    this.router.events.pipe(takeUntil(this.notifier$)).subscribe(val => {
      this.currentRoute = this.router.url;
      this.miscellaneousService.showDashboard.next(false);

      if (!this.currentRoute.includes('/auth')) this.miscellaneousService.lastRoute = this.currentRoute;
    });

    this.auth.onAuthStateChanged((user) => {
      this.isAuthenticated = !!user;
      if (!this.isAuthenticated) return this.mixpanelService.logout(); //reset on logout
      this.myUid = user.uid;
      this.myUid$.next(this.myUid);

      this.mixpanelService.signIn(this.myUid); //Identify user with uid
      this.mixpanelService.setUserProperties(this.myUid); //set user properties
    });

    this.miscellaneousService.showDashboard.pipe(takeUntil(this.notifier$)).subscribe(value => {
      this.showDashboard = value;
      this.modalState.next(value);
      if (!value) this.miscellaneousService.userStickerSelection.next(null);
      this.feedService.mutePosts.next(value); //mute posts
    });

    this.miscellaneousService.profileStickerEdit.pipe(takeUntil(this.notifier$)).subscribe(value => this.profileStickerEdit = value);

    this.modalState.pipe(takeUntil(this.notifier$)).subscribe(state => {
      if (!state) {
        this._document.body.style.top = null;
        this._document.body.classList.remove('body-no-scroll');
        window.scroll(0, this.lastScroll);
      } else {
        this.lastScroll = window.scrollY;
        this._document.body.style.top = (-1 * this.lastScroll).toString() + 'px';
        this._document.body.classList.add('body-no-scroll');
      }
    });

    this.popUpVal.pipe(takeUntil(this.notifier$)).subscribe(value => this.modalState.next(!!value));
  }

  async setFirestorePersistance() {
    this.afs.firestore.settings({cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED});
    return this.afs.firestore.enablePersistence()
            .then(() => console.log('persistance set'))
            .catch((err) => {
              if (err.code == 'failed-precondition') {
                  // Multiple tabs open, persistence can only be enabled
                  // in one tab at a a time.
                  // ...
              } else if (err.code == 'unimplemented') {
                  // The current browser does not support all of the
                  // features required to enable persistence
                  // ...
              }
            });
  }

  onResize(){
    this.windowStateService.checkWidth();
  }

  onWindowScroll($event){
    console.log('scroll')
    this.scrollService.setScroll();
  }

  toggleDashboard(event) {
    if (!this.tabletCheck || !this.showDashboard) return;
    this.miscellaneousService.showDashboard.next(false);
  }

  stopPropagation(event) {
    event.stopPropagation();
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.mixpanelService.setRoutingVia('inbuilt navigation');
  }

  @HostListener('window:beforeunload')
  onBeforeUnload() {
    if (this.beforeUnloadTriggered) return;
    this.beforeUnloadTriggered= true;
    this.mixpanelService.sessionEndTrack();
    this.mixpanelService.routeChangeTrack({parentRoute: this.currentRoute.split('/')[1]});
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
