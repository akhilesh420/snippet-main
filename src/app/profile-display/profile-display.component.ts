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

  inEditing: Boolean = false;
  editDesc: Boolean = false;
  editLink: Boolean = false;
  username: string = '';
  description: string = '';
  tempDescription: string = '';
  link: string = '';
  tempLink: string = '';
  @ViewChild('usernameRef') usernameSpan : ElementRef;
  @ViewChild('descriptionRef') descriptionRef : ElementRef;
  @ViewChild('linkRef') linkRef : ElementRef;
  profileStickers: ProfileSticker[] = [null,null,null,null,null];
  userStickers:  ProfileSticker[] = [null,null,null,null,null];

  constructor( private authService: AuthService,
               private usersService: UsersService,
               private activityService: ActivityService,
               private router: Router,
               private windowService: WindowStateService) { }

  ngOnInit(): void {
    this.fetchingWindow = true;
    this.windowService.checkWidth();
    console.log('init');

    this.authService.user.pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.isAuthenticated = !!response;
      if (this.isAuthenticated) {
        this.myUid = response.id;
      }
    }, errorMessage => {
      console.log(errorMessage);
    });

    this.setUp();
  }

  ngOnChanges() {
    this.setUp();
  }

  setUp() {
    this.uid$.pipe(takeUntil(this.notifier$)).subscribe(uid =>{
      if (uid) {
        this.uid = uid;
        console.log(this.uid);
        this.profileRoute = "/profile/" + this.uid;
        this.setUpProfile();
        this.setUpActivity();
      }
    })
  }

  setUpProfile() {
    this.profileDetails$ = this.usersService.getProfileDetails(this.uid);
    this.profileDetails$.pipe(takeUntil(this.notifier$)).subscribe(details => {
      if (!details) return;
      setInterval(this.getMultiplier(details),1000);
      this.username = details.username;
      this.description = 'test description hdfkajsdhfljaksdhfljkdashflkja';
      this.link = 'test link';

      this.tempDescription = this.description;
      this.tempLink = this.link;
    });
    this.profileStickers$ = this.usersService.getProfileStickers(this.uid);
    this.profileStickers$.pipe(takeUntil(this.notifier$)).subscribe(stickers => {
      if (!stickers) return;
      stickers.forEach((sticker, i) => this.userStickers[i] = sticker);
      this.userStickers.forEach((sticker, i) => this.profileStickers[4-i] = sticker);
      console.log(this.profileStickers);
    });
    this.displayPicture$ = this.usersService.getDisplayPicture(this.uid);
  }

  getMultiplier(value: ProfileDetails) {
    try {
      const currentWidth = this.usernameSpan.nativeElement.offsetWidth;
      this.multiplier = value.username.length <= 10 ? 1 : 10/value.username.length;
      return null;
    } catch(error) {
      return null;
    }
  }

  setUpActivity() {
    this.activityService.getActivity(this.uid).pipe(takeUntil(this.notifier$)).subscribe(response => {
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

  getEmptySlots(stickers) {
    return [...Array(5-stickers.length).keys()];
  }

  navigateRoute() {
    this.router.navigate([this.profileRoute]);
  }


  onEditDescClick() {
    this.editDesc = true;
    setTimeout(() => this.descriptionRef.nativeElement.focus(), 100);
  }

  onEditLinkClick() {
    this.editLink = true;
    setTimeout(() => this.linkRef.nativeElement.focus(), 100);
  }

  onSave() {
    this.resetState();
    this.description = this.tempDescription;
    this.link = this.tempLink;
  }

  resetState() {
    this.inEditing = !this.inEditing;
    this.editDesc = false;
    this.editLink = false
  }

  onPressEnter(event) {
    event.preventDefault();
    this.editDesc = false;
    this.editLink = false;
  }

  stopPropagation(event) {
    event.stopPropagation();
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
