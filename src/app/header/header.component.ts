import { MixpanelService } from './../shared/mixpanel.service';
import { AuthService } from './../auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, OnDestroy } from '@angular/core';;
import { Subject, Observable } from 'rxjs';
import { filter, takeUntil, pairwise } from 'rxjs/operators';
import { MiscellaneousService } from '../shared/miscellaneous.service';
import { UsersService } from '../shared/users.service';
import { NavigationEnd, Router, Event as NavigationEvent, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{

  isAuthenticated = false;
  myUid: string;

  profileRoute: string = '/auth';

  parentRoute: string = '';
  uid: string = '';

  notifier$ = new Subject();
  loadingBar$: Subject<boolean>;

  dropdown: boolean = false;

  showDashboard: boolean = false;

  constructor(private auth: AngularFireAuth,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private usersService: UsersService,
              private miscellaneousService: MiscellaneousService,
              private mixpanelService: MixpanelService){
  }

  ngOnInit(): void {
    this.parentRoute = this.router.url.split('/')[1];
    this.router.events
      .pipe(filter((event: NavigationEvent) => event instanceof NavigationEnd), takeUntil(this.notifier$))
      .subscribe((event: NavigationEnd) => {
        const currentRoute = event.urlAfterRedirects;
        this.parentRoute = currentRoute.split('/')[1];
        if (this.parentRoute === "profile") this.uid = currentRoute.split("/")[3];
      });

    this.loadingBar$ = this.miscellaneousService.getLoading();

    this.auth.onAuthStateChanged(user => {
      this.isAuthenticated = !!user;
      if (this.isAuthenticated) {
        this.myUid = user.uid;
        this.profileRoute = "/profile/posts/" + this.myUid;
      } else {
        this.myUid = undefined;
        this.profileRoute = '/auth';
      }
    });

    this.miscellaneousService.showDashboard
      .pipe(takeUntil(this.notifier$))
      .subscribe(value => this.showDashboard = value);
  }

  clickAuth() {
    this.isAuthenticated ? this.authService.logout() : this.router.navigate(['/auth']);
  }

  dashboardToggle() {
    this.showDashboard = !this.showDashboard;
    this.miscellaneousService.showDashboard.next(this.showDashboard);
  }

  dpClick() {
    this.mixpanelService.setRoutingVia('header/navbar');
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}


