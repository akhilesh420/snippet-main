import { MiscellaneousService, PopUp } from './shared/miscellaneous.service';
import { AuthService } from './auth/auth.service';
import { WindowStateService } from './shared/window.service';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Title, Meta} from '@angular/platform-browser';
import { Router } from '@angular/router';
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

  constructor(private windowService: WindowStateService,
              private authService: AuthService,
              private titleService: Title,
              private metaService: Meta,
              private router: Router,
              private infiniteScrollService: InfiniteScrollService,
              private miscellaneousService: MiscellaneousService){
  }

  ngOnInit(){

    if (screenfull.isEnabled) {
      screenfull.request();
      screenfull.on('error', event => {console.log(event);});
    }

    this.authService.autoLogin();

    this.titleService.setTitle("Snippet");
    this.metaService.addTags([
      {name: 'apple-mobile-web-app-capable', content: 'yes'}
    ]);

    this.windowService.checkWidth();
    this.windowService.screenWidthValue.pipe(takeUntil(this.notifier$))
    .subscribe(val => {
      if (val) {
        this.windowSize = val;
        if (val < 850) {
          this.mobileCheck = true;
        } else {
          this.mobileCheck = false;
        }
      }
    })

    this.onResize();

    this.router.events.pipe(takeUntil(this.notifier$)).subscribe(val => {
      this.currentRoute = this.router.url;
    });

    this.popUpVal = this.miscellaneousService.getPopUpSetUp();
    this.popUpVal.subscribe(response => console.log(response));
  }

  ngAfterViewInit() {
    window.scrollTo(0,1);
  }

  onResize(){
    this.windowService.checkWidth();
  }

  scrollHandler(event) {
    this.infiniteScrollService.getScroll$.next(event);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
    this.infiniteScrollService.getScroll$.complete();
  }
}
