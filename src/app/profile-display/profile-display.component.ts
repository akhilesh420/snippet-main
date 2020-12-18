import { UsersService } from './../shared/users.service';
import { ProfileSticker, ProfileDetails, DisplayPicture } from './../shared/profile.model';
import { Router} from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { ActivityService } from '../shared/activity.service';
import { Activity } from '../shared/activity.model';
import { WindowStateService } from '../shared/window.service';
import { MiscellaneousService, PopUp } from '../shared/miscellaneous.service';

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
  tempDisplayPicture$ = new BehaviorSubject<any>(null);
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
  profileStickers: ProfileSticker[] = [null,null,null,null,null];
  userStickers:  ProfileSticker[] = [null,null,null,null,null];
  error: string;
  displayPicture: any;
  changedDP: boolean = false;
  updatedDP: any;

  @ViewChild('usernameRef') usernameSpan : ElementRef;
  @ViewChild('descriptionRef') descriptionRef : ElementRef;
  @ViewChild('linkRef') linkRef : ElementRef;
  @ViewChild('dpInput') dpInput: ElementRef<HTMLElement>;

  constructor( private authService: AuthService,
               private usersService: UsersService,
               private activityService: ActivityService,
               private router: Router,
               private windowService: WindowStateService,
               private miscellaneousService: MiscellaneousService) { }

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
    this.displayPicture$.pipe(takeUntil(this.notifier$)).subscribe(dp => {
      this.tempDisplayPicture$.next(dp);
    })
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
    let noChange = true;
    let message = 'Profile updated!';
    this.resetState();

    if (this.profileStickers.length > 5) { //in case of an error
      for (let i=0; i <= this.profileStickers.length; i++) {
        this.profileStickers.pop();
       }
    }

    if (this.description != this.tempDescription || this.link != this.tempLink) {
      this.description = this.tempDescription;
      this.link = this.tempLink;
      // this.usersService.updateProfileDetails(this.uid, this.profileDetails);
      noChange = false;
    }

    if (this.changedDP) {
      noChange = false;
      message = "Profile updating! Feel free to explore but please don't close or reload the tab while your dp is being processed";

      this.miscellaneousService.startLoading();
      this.displayPicture$.next(this.updatedDP);
      this.usersService.updateDisplayPicture(this.uid, this.displayPicture).pipe(takeUntil(this.notifier$))
      .subscribe(response => {
        if (response === 100) {
          this.usersService.updateDisplayPictureRef(this.uid, new DisplayPicture(new Date(), this.displayPicture.type));
          this.miscellaneousService.endLoading();
        }
      });
    }
    if (noChange) return;
    this.miscellaneousService.setPopUp(new PopUp(message,'Okay', undefined, ['default', 'reject']));
  }

  resetState() {
    this.inEditing = !this.inEditing;
    this.editDesc = false;
    this.editLink = false
  }

  onPressEnter(event) {
    event.preventDefault();
    this.descriptionRef.nativeElement.focusout();
    this.linkRef.nativeElement.focusout();
  }

  fileUpload(event) {
    if (event.target.files)  {
      var reader = new FileReader();

      let file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = (event:any) => {
        if (file.size < 15*1024*1024) {
          this.error = null;
          this.displayPicture = file;
          this.updatedDP = event.target.result;
          this.tempDisplayPicture$.next(this.updatedDP);
          this.changedDP = true;
        } else {
          this.error ='Image file size too big! There is a 15 MB limit';
        }
      }
    }
  }

  onAddClick() {
    this.dpInput.nativeElement.click();
  }

  setCaret(description: boolean) {
    var range = document.createRange();
    var sel = window.getSelection();

    if (description) {
      range.setStart(this.descriptionRef.nativeElement.childNodes[0], this.description.length);
    } else {
      range.setStart(this.linkRef.nativeElement.childNodes[0], this.link.length);
    }
    range.collapse(true);

    sel.removeAllRanges();
    sel.addRange(range);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
