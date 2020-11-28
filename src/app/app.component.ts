import { ScrollService } from './shared/scroll.service';
import { MiscellaneousService, PopUp } from './shared/miscellaneous.service';
import { AuthService } from './auth/auth.service';
import { WindowStateService } from './shared/window.service';
import { Component, ElementRef, HostListener, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { takeUntil,} from 'rxjs/operators';
import { Subject } from 'rxjs';
import { InfiniteScrollService } from './shared/infinite-scroll.service';
import * as screenfull from 'screenfull';

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

  constructor(private windowService: WindowStateService,
              private authService: AuthService,
              private titleService: Title,
              private metaService: Meta,
              private router: Router,
              private infiniteScrollService: InfiniteScrollService,
              private miscellaneousService: MiscellaneousService,
              private scrollService: ScrollService){
  }

  ngOnInit(){
    if (screenfull.isEnabled) {
      screenfull.request().catch(error => console.log(error));
      screenfull.on('error', event => {console.log(event);});
    }

    this.elem = document.documentElement;
    this.openFullscreen();
    this.authService.autoLogin();

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

    this.router.events.pipe(takeUntil(this.notifier$)).subscribe(val => {
      this.currentRoute = this.router.url;
      if (!(val instanceof NavigationEnd)) {
        return;
      }

      // window.scrollTo(0, 1);
    });

    this.popUpVal = this.miscellaneousService.getPopUpSetUp();

    this.miscellaneousService.onBoarding$.pipe(takeUntil(this.notifier$)).subscribe(val => {
      this.onBoarding = val;
    });
  }

  ngAfterViewInit() {
    window.scrollTo(0,1);
  }

  onResize(){
    this.windowService.checkWidth();
  }

  openFullscreen() {
   if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  onWindowScroll($event){
    this.scrollService.setScroll();
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
    this.infiniteScrollService.getScroll$.complete();
  }
}
