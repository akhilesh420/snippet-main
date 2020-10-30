import { AuthService } from './auth/auth.service';
import { WindowStateService } from './shared/window.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { takeUntil,} from 'rxjs/operators';
import { Subject } from 'rxjs';
import { InfiniteScrollService } from './shared/infinite-scroll.service';
import { MiscellaneousService } from './shared/miscellaneous.service';

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

  constructor(private windowService: WindowStateService,
              private authService: AuthService,
              private titleService: Title,
              private router: Router,
              private infiniteScrollService: InfiniteScrollService,
              private miscellaneousService: MiscellaneousService){
  }

  ngOnInit(){
    this.authService.autoLogin();
    this.titleService.setTitle("Snippet");
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
  }

  onResize(){
    this.windowService.checkWidth();
  }

  scrollHandler(event) {
    this.infiniteScrollService.getScroll$.next(event); //log
  }

  onClick() {
    this.miscellaneousService.onAppClick();
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
    this.infiniteScrollService.getScroll$.complete();
  }
}
