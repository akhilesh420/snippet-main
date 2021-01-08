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
  widthAuth: string =  '313.781px';

  myUid: string;

  collapsed = true;
  size = 35;
  mobile: boolean = false;
  marginBottom: string = '35px';
  marginLeft: string;

  windowWidth: number;

  collectionRoute: string = '/auth';
  profileRoute: string = '/auth';
  createRoute: string = '/auth';

  currentRoute: string = '';

  notifier$ = new Subject();
  loadingBar$: Subject<boolean>;

  dropdown: boolean = false;
  displayPicture$: BehaviorSubject<any>;

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
        this.collectionRoute = "collection/" + this.myUid;
        this.profileRoute = "profile/" + this.myUid;
        this.createRoute = "/create/content";
        this.displayPicture$ = this.usersService.getDisplayPicture(this.myUid);
      } else {
        this.collectionRoute = '/auth';
        this.profileRoute = '/auth';
        this.createRoute =  '/auth';
      }
    });

    this.router.events.pipe(takeUntil(this.notifier$)).subscribe(val => {
      this.currentRoute = this.router.url;
    });
  }

  clickAuth() {
    this.isAuthenticated ? this.authService.logout() : this.router.navigate(['/auth']);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}


