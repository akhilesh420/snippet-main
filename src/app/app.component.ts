import { AuthService } from './auth/auth.service';
import { WindowStateService } from './shared/window.service';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { takeUntil,} from 'rxjs/operators';
import { Subject } from 'rxjs';
import { InfiniteScrollService } from './shared/infinite-scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'snippet';
  mobileCheck: boolean;
  currentRoute: string;
  notifier$ = new Subject();

  constructor(private windowService: WindowStateService,
              private authService: AuthService,
              private titleService: Title,
              private router: Router,
              private infiniteScrollService: InfiniteScrollService){
  }

  ngOnInit(){
    this.authService.autoLogin();
    this.titleService.setTitle("Snippet");
    this.windowService.checkWidth();
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

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
    this.infiniteScrollService.getScroll$.complete();
  }

}
