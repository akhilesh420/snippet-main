import { AuthService } from './../auth/auth.service';
import { WindowStateService } from './../shared/window.service';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';;
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{

  private userSub: Subscription;
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

  @ViewChild('dropdown') dropdown: ElementRef;

  constructor(private  windowStateService: WindowStateService,
              private authService: AuthService){
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
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
  }

  onClick() {
    this.collapsed = !this.collapsed;
    if (this.collapsed) {
      setTimeout(value => {
        this.marginBottom = '35px';
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
    this.userSub.unsubscribe();
  }
}


