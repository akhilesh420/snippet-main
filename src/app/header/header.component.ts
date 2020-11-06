import { AuthService } from './../auth/auth.service';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';;
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { MiscellaneousService } from '../shared/miscellaneous.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{

  isAuthenticated = false;
  widthAuth: string =  '313.781px';

  uid: string;

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

  @ViewChild('dropdown') dropdown: ElementRef;

  constructor(private authService: AuthService,
              private router: Router,
              private miscellaneousService: MiscellaneousService){
  }

  ngOnInit(): void {

    this.loadingBar$ = this.miscellaneousService.getLoading();

    this.authService.user.pipe(takeUntil(this.notifier$)).subscribe(user => {
      this.isAuthenticated = !!user;
      if (this.isAuthenticated) {
        this.uid = user.id;
        this.collectionRoute = "collection/" + this.uid;
        this.profileRoute = "profile/" + this.uid;
        this.createRoute = "/create";
      } else {
        this.collectionRoute = '/auth';
        this.profileRoute = '/auth';
        this.createRoute =  '/auth';
      }
    });

    this.router.events.pipe(takeUntil(this.notifier$)).subscribe(val => {
      this.currentRoute = this.router.url;
      if (this.currentRoute === '/tutorial') {this.marginBottom = '0px';}
      else {this.marginBottom = '35px';}
    });
  }

  onClick() {
    this.collapsed = !this.collapsed;
    if (this.collapsed) {
      setTimeout(value => {
        this.currentRoute === '/tutorial' ? this.marginBottom = '0px' : this.marginBottom = '35px';
        this.marginLeft = 'calc(50vw - 309.94px -'+ this.widthAuth +')';
      },0.5*1000);
    } else {
      this.marginBottom = '206px';
      this.marginLeft= '0';
    }

  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}


