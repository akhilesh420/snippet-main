import { FeedService } from 'src/app/feed/feed.service';
import { ScrollService } from './shared/scroll.service';
import { MiscellaneousService, PopUp } from './shared/miscellaneous.service';
import { AuthService } from './auth/auth.service';
import { WindowStateService } from './shared/window.service';
import { Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { take, takeUntil,} from 'rxjs/operators';
import { Subject } from 'rxjs';
import { InfiniteScrollService } from './shared/infinite-scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'snippet';
  windowSize: number;
  mobileCheck: boolean;
  currentRoute: string;
  notifier$ = new Subject();

  popUpVal: Subject<PopUp>;
  elem: any;

  onBoarding: boolean = false;
  onBoardingStep: number;
  failSafeTimer: any;
  allowFailSafe: boolean = true;
  isAuthenticated: boolean = false;
  uid: string;

  constructor(private windowService: WindowStateService,
              private authService: AuthService,
              private router: Router,
              private infiniteScrollService: InfiniteScrollService,
              private miscellaneousService: MiscellaneousService,
              private feedService: FeedService,
              private scrollService: ScrollService){
  }

  ngOnInit() {

    this.feedService.getExplorePage().pipe(take(1)).subscribe(() => {return});

    this.windowService.checkWidth();
    this.windowService.screenWidthValue.pipe(takeUntil(this.notifier$))
    .subscribe(val => {
      if (val) {
        this.windowSize = val;
        if (val < 550) {
          this.mobileCheck = true;
        } else {
          this.mobileCheck = false;
        }
      }
    })

    this.onResize();

    this.popUpVal = this.miscellaneousService.getPopUpSetUp();

    this.router.events.pipe(takeUntil(this.notifier$)).subscribe(val => {
      this.currentRoute = this.router.url;
      if (this.currentRoute != '/auth') this.miscellaneousService.lastRoute = this.currentRoute;
      this.onBoardingFailSafe();
    });

    this.miscellaneousService.onBoarding$.pipe(takeUntil(this.notifier$)).subscribe(val => {
      this.onBoarding = val;
      if (val) {
        this.miscellaneousService.onBoardingStep$.pipe(takeUntil(this.notifier$)).subscribe(step => {
          this.onBoardingStep = step;
          console.log(this.onBoardingStep);
          this.setOnBoardingStep(false);
        });
        this.onBoardingFailSafe();
      } else {
        this.allowFailSafe = true;
      }
    });

    this.authService.user.pipe(takeUntil(this.notifier$)).subscribe(user => {
      this.isAuthenticated = !!user;
      if (this.isAuthenticated) {
        this.uid = user.id;
      }
    });
  }

  onBoardingFailSafe() {
    if (!this.allowFailSafe) return;
    if (this.onBoarding && !(this.currentRoute.includes('tutorial') || this.currentRoute.includes('edit') || this.currentRoute.includes('auth/'))) {
      this.allowFailSafe = false;
      this.router.navigate(['tutorial']);
    }
  }

  ngAfterViewInit() {
    window.scrollTo(0,1);
  }

  onResize(){
    this.windowService.checkWidth();
  }

  onWindowScroll($event){
    this.scrollService.setScroll();
  }

  @HostListener('window:beforeunload')
  setOnBoardingStep(unload: boolean = true) {
    if (this.onBoarding && this.onBoardingStep >= 2) {
      this.miscellaneousService.setTimeTaken(this.onBoardingStep, unload);
      this.miscellaneousService.setOnBoardingStep(this.uid);
    }
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
    this.infiniteScrollService.getScroll$.complete();
  }
}
