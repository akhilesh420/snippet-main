import { AuthService } from './../auth/auth.service';
import { WindowStateService } from './../shared/window.service';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';;
import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

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

  collectionRoute: string;
  profileRoute: string;

  currentRoute: string;

  
  exploreSymbol: string = "assets/icons/exploreSymbol@2x.png";
  collectionSymbol: string = "assets/icons/sticker-icon.png";
  createSymbol: string = "assets/icons/createSymbol@2x.png";
  dropdownSymbol: string = "assets/icons/dropdownSymbol@2x.png";
  
  notifier$ = new Subject();

  @ViewChild('dropdown') dropdown: ElementRef;

  constructor(private  windowStateService: WindowStateService,
              private authService: AuthService,
              private router: Router){
  }

  ngOnInit(): void {
    this.authService.user.pipe(takeUntil(this.notifier$)).subscribe(user => {
      this.isAuthenticated = !!user;
      if (this.isAuthenticated) {
        this.uid = user.id;
        this.collectionRoute = "collection/" + this.uid;
        this.profileRoute = "profile/" + this.uid;
      }
      this.widthAuth = !!user ?  '313.781px' : '123.6125px';
      if (this.collapsed) {
        this.marginLeft = 'calc(50vw - 309.94px - '+ this.widthAuth +')';
      } else {
        this.marginLeft = '0';
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


