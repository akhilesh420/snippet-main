import { AuthService } from './../auth/auth.service';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';;
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { MiscellaneousService } from '../shared/miscellaneous.service';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{

  isAuthenticated = false;
  myUid: string;

  profileRoute: string = '/auth';
  createRoute: string = '/auth';

  currentRoute: string = '';

  notifier$ = new Subject();
  loadingBar$: Subject<boolean>;

  dropdown: boolean = false;
  displayPicture$: BehaviorSubject<any>;

  showDashboard: boolean = false;

  constructor(private authService: AuthService,
              private router: Router,
              private usersService: UsersService,
              private miscellaneousService: MiscellaneousService){
  }

  ngOnInit(): void {

    this.loadingBar$ = this.miscellaneousService.getLoading();

    this.authService.user.pipe(takeUntil(this.notifier$)).subscribe(user => {
      this.isAuthenticated = !!user;
      if (this.isAuthenticated) {
        this.myUid = user.id;
        this.profileRoute = "/profile/" + this.myUid;
        this.createRoute = "/create/content";
        this.displayPicture$ = this.usersService.getDisplayPicture(this.myUid);
      } else {
        this.profileRoute = '/auth';
        this.createRoute =  '/auth';
      }
    });

    this.router.events.pipe(takeUntil(this.notifier$)).subscribe(val => this.currentRoute = this.router.url);

    this.miscellaneousService.showDashboard.pipe(takeUntil(this.notifier$)).subscribe(value => this.showDashboard = value);
  }

  clickAuth() {
    this.isAuthenticated ? this.authService.logout() : this.router.navigate(['/auth']);
  }

  dashboardToggle() {
    this.showDashboard = !this.showDashboard;
    this.miscellaneousService.showDashboard.next(this.showDashboard);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}


