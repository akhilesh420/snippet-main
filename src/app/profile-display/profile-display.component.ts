import { UsersService } from './../shared/users.service';
import { ProfileSticker, ProfileDetails } from './../shared/profile.model';
import { Router} from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { ActivityService } from '../shared/activity.service';
import { Activity } from '../shared/activity.model';
import { WindowStateService } from '../shared/window.service';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css']
})
export class ProfileDisplayComponent implements OnInit, OnChanges, OnDestroy {

  @Input() uid$: BehaviorSubject<string>;
  uid: string;

  profileDetails$: BehaviorSubject<ProfileDetails>;
  profileStickers$: BehaviorSubject<ProfileSticker[]>;
  displayPicture$: BehaviorSubject<any>;
  activity: Activity;

  isAuthenticated: boolean;
  notifier$ = new Subject();

  collected: string = '0';
  views: string = '0';

  myUid: string;
  stickerSize: string;
  fetchingWindow: boolean;
  profileRoute: string;

  usernameFontSize: number;
  usernamePadding: string;
  maxWidth: number;
  multiplier: number = 1;

  @ViewChild('usernameRef') usernameSpan : ElementRef;


  constructor( private authService: AuthService,
               private usersService: UsersService,
               private activityService: ActivityService,
               private router: Router,
               private windowService: WindowStateService) { }

  ngOnInit(): void {
    this.fetchingWindow = true;
    this.windowService.checkWidth();

    this.authService.user.pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.isAuthenticated = !!response;
      if (this.isAuthenticated) {
        this.myUid = response.id;
      }
    }, errorMessage => {
      console.log(errorMessage);
    });

    this.setUp();

    this.windowService.screenWidthValue.pipe(takeUntil(this.notifier$))
    .subscribe(val => {
      if (val < 560) {
        this.stickerSize = (60*val/560).toString() + 'px';
        this.usernameFontSize = 30*val/560;
      } else {
        this.stickerSize = '60px';
        this.usernameFontSize = 30;
      }
    });
  }

  ngOnChanges() {
    this.setUp();
  }

  setUp() {
    this.uid$.pipe(takeUntil(this.notifier$)).subscribe(uid =>{
      if (uid) {
        this.uid = uid;
        this.profileRoute = "/profile/" + this.uid;
        this.setUpProfile();
        this.setUpActivity();
      }
    })
  }

  setUpProfile() {
    this.profileDetails$ = this.usersService.getProfileDetails(this.uid);
    this.profileDetails$.pipe(takeUntil(this.notifier$)).subscribe(response => {
      if (response) {
       setInterval(this.getMultiplier(response),1000);
      }
    })
    this.profileStickers$ = this.usersService.getProfileStickers(this.uid);
    this.displayPicture$ = this.usersService.getDisplayPicture(this.uid);
  }

  getMultiplier(value: ProfileDetails) {
    try {
      // const currentWidth = this.usernameSpan.nativeElement.offsetWidth;
      this.multiplier = value.username.length <= 10 ? 1 : 10/value.username.length;
      return null;
    } catch(error) {
      return null;
    }
  }

  setUpActivity() {
    this.activityService.getActivity(this.uid).pipe(takeUntil(this.notifier$)).subscribe(response => {
      // console.log(response);
      if (!response[0]) {
        console.log('No activity found');
        return;
      }
      this.activity = response[0];
      this.views = this.convertToShort(this.activity.views);
      this.collected = this.convertToShort(this.activity.collected);
    });
  }

  convertToShort(num: number): string {
    let short = 0;
    if (num/1000000 <= 1) {
      if (num/1000 <= 1) {
          return num.toString();
      } else {
        short = Math.round((num/1000) * 10) / 10;
        return short.toString() + 'K';
      }
    } else {
      short = Math.round((num/1000000) * 100) / 100;
      return short.toString() + 'M';
      }
  }

  editProfile() {
    if (this.uid === this.myUid) {
      this.router.navigate(['profile/'+this.myUid+'/edit']);
    }
  }

  getEmptySlots(stickers) {
    return [...Array(5-stickers.length).keys()];
  }

  navigateRoute() {
    this.router.navigate([this.profileRoute]);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
