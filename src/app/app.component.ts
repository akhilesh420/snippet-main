import { UsersService } from './shared/users.service';
import { AuthService } from './auth/auth.service';
import { WindowStateService } from './shared/window.service';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Biography, ProfileDetails } from './shared/profile.model';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { takeUntil,} from 'rxjs/operators';
import { Subject } from 'rxjs';

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
              private userService: UsersService,
              private titleService: Title,
              private router: Router){
  }

  ngOnInit(){
    this.authService.autoLogin();
    this.titleService.setTitle("Snippet");
    this.windowService.getMobileStatus().subscribe( isMobile =>{
      if(isMobile){
        this.mobileCheck = true;
      }
      else{
        this.mobileCheck = false;
      }
    });
    this.onResize();
    this.router.events.pipe(takeUntil(this.notifier$)).subscribe(val => {
      this.currentRoute = this.router.url;
      console.log(this.currentRoute); //log
    });
  }

  onResize(){
    this.windowService.checkWidth();
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    // console.log("Scroll Event:", window.pageYOffset);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }

}
