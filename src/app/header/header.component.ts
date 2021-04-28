import { MixpanelService } from './../shared/mixpanel.service';
import { AuthService } from './../auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';;
import { Subject, Observable } from 'rxjs';
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
  createRoute: string = "/create/content";

  currentRoute: string = '';

  notifier$ = new Subject();
  loadingBar$: Subject<boolean>;

  dropdown: boolean = false;
  displayPicture$: Observable<string>;

  showDashboard: boolean = false;

  preloadImages = ['/assets/images/Header%20Icons/createButtonActive.svg',
                   '/assets/images/Header%20Icons/createButtonInactive.svg',
                   '/assets/images/Header%20Icons/exploreActive.svg',
                   '/assets/images/Header%20Icons/exploreInactive.svg',
                   '/assets/images/Header%20Icons/optionsButtonActive.svg',
                   '/assets/images/Header%20Icons/optionsButtonInactive.svg',
                   '/assets/images/Header%20Icons/profileButtonActive.svg',
                   '/assets/images/Header%20Icons/profileButtonInactive.svg',
                   '/assets/images/Header%20Icons/displaybuttonInactive.svg',
                   '/assets/images/Header%20Icons/displaybuttonActive.svg'];

  constructor(private auth: AngularFireAuth,
              private authService: AuthService,
              private router: Router,
              private usersService: UsersService,
              private miscellaneousService: MiscellaneousService,
              private mixpanelService: MixpanelService){
  }

  ngOnInit(): void {

    this.miscellaneousService.preloadImages(this.preloadImages); //preload icons
    this.loadingBar$ = this.miscellaneousService.getLoading();

    this.auth.onAuthStateChanged(user => {
      this.isAuthenticated = !!user;
      if (this.isAuthenticated) {
        this.myUid = user.uid;
        this.profileRoute = "/profile/" + this.myUid;
        this.createRoute = "/create/content";
        this.displayPicture$ = this.usersService.getDisplayPicture(this.myUid);
        this.updateOnDPChange();
      } else {
        this.myUid = undefined;
        this.profileRoute = '/auth';
      }
    });

    this.router.events.pipe(takeUntil(this.notifier$)).subscribe(val => this.currentRoute = this.router.url);

    this.miscellaneousService.showDashboard.pipe(takeUntil(this.notifier$)).subscribe(value => this.showDashboard = value);

  }

  updateOnDPChange() {
    this.usersService.getDisplayPictureRef(this.myUid).pipe(takeUntil(this.notifier$)).subscribe(res => {
      this.displayPicture$ = this.usersService.getDisplayPicture(this.myUid);
    });
  }

  clickAuth() {
    this.isAuthenticated ? this.authService.logout() : this.router.navigate(['/auth']);
  }

  dashboardToggle() {
    this.showDashboard = !this.showDashboard;
    this.miscellaneousService.showDashboard.next(this.showDashboard);
  }

  dpClick() {
    this.mixpanelService.setVisitProfileVia('header/navbar');
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}


