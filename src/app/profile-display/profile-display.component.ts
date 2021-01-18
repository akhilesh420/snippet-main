import { UsersService } from './../shared/users.service';
import { ProfileSticker, ProfileDetails, DisplayPicture } from './../shared/profile.model';
import { Router} from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { take, takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef, OnChanges, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { ActivityService } from '../shared/activity.service';
import { Activity } from '../shared/activity.model';
import { WindowStateService } from '../shared/window.service';
import { MiscellaneousService, PopUp } from '../shared/miscellaneous.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css']
})
export class ProfileDisplayComponent implements OnInit, OnDestroy {

  @Input() uid$: BehaviorSubject<string>;
  @Input() editable?: boolean = true;
  uid: string;

  profileDetails$: BehaviorSubject<ProfileDetails>;
  profileStickers$: BehaviorSubject<ProfileSticker[]>;
  displayPicture$: BehaviorSubject<any>;
  tempDisplayPicture$ = new BehaviorSubject<any>(null);
  activity: Activity;

  isAuthenticated: boolean = true;
  allowEdit: boolean = false;
  notifier$ = new Subject();

  collected: string = '0';
  views: string = '0';

  myUid: string;
  stickerSize: string;
  profileRoute: string;

  inEditing: Boolean = false;
  dpLoaded: Boolean = false;
  descLoaded: Boolean = false;
  stickerLoaded: Boolean = false;
  editDesc: Boolean = false;
  editLink: Boolean = false;
  editStickers: Boolean = false;
  username: string = '';
  description: string = '';
  link: string = '';
  profileStickers: ProfileSticker[] = [null,null,null,null,null];
  userStickers:  ProfileSticker[] = [null,null,null,null,null];
  error: string;
  displayPicture: any;
  changedDP: boolean = false;
  profileStickersChanged: boolean = false;
  updatedDP: any;
  saving: boolean = false;

  @ViewChild('descriptionRef') descriptionRef : ElementRef;
  @ViewChild('linkRef') linkRef : ElementRef;
  @ViewChild('dpInput') dpInput: ElementRef<HTMLElement>;

  emittedPid: string;
  index: number;

  descriptionLimit: number = 105;
  linkLimit: number = 21;

  constructor( private auth: AngularFireAuth,
               private usersService: UsersService,
               private activityService: ActivityService,
               private router: Router,
               private miscellaneousService: MiscellaneousService) { }

  ngOnInit(): void {
    this.miscellaneousService.overrideEdit.pipe(takeUntil(this.notifier$)).subscribe(response => {
      if (!this.editable) return;
      this.inEditing = !response;
      this.resetState();
      this.inEditing = response; //incase data is not loaded
    });

    this.auth.onAuthStateChanged((user) => {
      this.isAuthenticated = !!user;
      this.allowEdit = this.isAuthenticated;
      if (this.isAuthenticated)  this.myUid = user.uid;
    });

    this.miscellaneousService.stickerSelectConfirm.pipe(takeUntil(this.notifier$)).subscribe(response => {
      if (response === 'reject') {
        this.userStickers.forEach((sticker, i) => this.profileStickers[4-i] = sticker);
        this.profileStickersChanged = false;
        this.miscellaneousService.profileStickerEdit.next(false);
      } else if (response === 'confirm') {
        this.miscellaneousService.profileStickerEdit.next(false);
      }else if (response === 'remove') {
        this.profileStickersChanged = true;
        this.profileStickers[this.index] = null;
      }
      this.miscellaneousService.userStickerSelection.next(null);
      this.index = undefined;
    });

    this.miscellaneousService.profileStickerEdit.pipe(takeUntil(this.notifier$)).subscribe(response => this.editStickers = response);

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
    this.dpLoaded = false;
    this.descLoaded = false;
    this.stickerLoaded = false;
    this.profileDetails$ = this.usersService.getProfileDetails(this.uid);
    this.profileDetails$.pipe(takeUntil(this.notifier$)).subscribe(details => {
      if (!details) return;
      this.username = details.username;
      this.description = details.description;
      this.link = details.link;

      this.dpLoaded = true;
    });
    this.profileStickers$ = this.usersService.getProfileStickers(this.uid);
    this.profileStickers$.pipe(takeUntil(this.notifier$)).subscribe(stickers => {
      if (!stickers) return;
      stickers.forEach((sticker, i) => this.userStickers[i] = sticker);
      this.userStickers.forEach((sticker, i) => this.profileStickers[4-i] = sticker);
      this.stickerLoaded = true;
    });
    this.displayPicture$ = this.usersService.getDisplayPicture(this.uid);
    this.displayPicture$.pipe(takeUntil(this.notifier$)).subscribe(dp => {
      this.tempDisplayPicture$.next(dp);
      this.dpLoaded = true;
    });
  }

  setUpActivity() {
    this.activityService.getActivity(this.uid).pipe(takeUntil(this.notifier$)).subscribe(response => {
      if (!response[0]) {
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
    if (this.saving) return;
    this.saving = true;
    let noChange = true;
    let message = 'Profile updated!';

    this.miscellaneousService.profileStickerEdit.next(false);
    this.miscellaneousService.userStickerSelection.next(null);

    var tempDescription = this.description;
    var tempLink  = this.link;

    if (this.descriptionRef) tempDescription = this.descriptionRef.nativeElement.textContent;
    if (this.linkRef) tempLink = this.linkRef.nativeElement.textContent;

    this.resetState();

    if (this.profileStickers.length > 5) { //in case of an error
      for (let i=0; i <= this.profileStickers.length; i++) {
        this.profileStickers.pop();
       }
    }

    if (this.profileStickersChanged) {
      noChange = false;
      this.profileStickers.forEach((sticker, i) => this.userStickers[4-i] = sticker);
      this.usersService.updateProfileSticker(this.uid,this.userStickers);
    }

    if (this.description != tempDescription) {
      this.description = tempDescription.slice(0,this.descriptionLimit);
      this.usersService.updateProfileDetails(this.uid, {description: this.description});
      noChange = false;
    }

    if (this.link != tempLink) {
      this.link = tempLink.trim().slice(0,this.linkLimit);
      this.usersService.updateProfileDetails(this.uid, {link: this.link});
      noChange = false;
    }

    if (this.changedDP) {
      noChange = false;
      message = "Profile updating! Feel free to explore but please don't close the tab while your dp is being processed";

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

    this.saving = false;
    if (noChange) return;
    this.miscellaneousService.setPopUp(new PopUp(message,'Okay', undefined, ['default', 'reject']));
    this.changedDP = false;
    this.profileStickersChanged = false;
  }

  resetState() {
    if (!this.dpLoaded && !this.stickerLoaded && !this.descLoaded) return;
    if (!this.editable) return this.onNoEditable();
    this.inEditing = !this.inEditing;
    this.editDesc = false;
    this.editLink = false;
    this.index = undefined;
    this.miscellaneousService.profileStickerEdit.next(false);
  }

  onPressEnter(event) {
    return event.preventDefault();
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

  charLimit(event, max: number) {
    const len = event.target.textContent.length;
    return len < max;
  }

  clickProfileSticker(sticker: any, index: number) {
    if (((sticker && !this.inEditing && !this.stickerLoaded) && !this.allowEdit || this.uid != this.myUid)) return;
    if (!this.editable) return this.onNoEditable('sticker');
    this.inEditing = true;
    this.index = index;
    this.miscellaneousService.profileStickerEdit.next(true);
    this.miscellaneousService.userStickerSelection.next(sticker);
    this.miscellaneousService.stickerEmitted.pipe(takeUntil(this.notifier$)).subscribe(pid => {
      if (!pid || (this.profileStickers[this.index] != null && this.profileStickers[this.index].pid === pid)) return;
      this.profileStickers.forEach((profileSticker, i) => { //Filter out same pid sticker
        if (profileSticker === null) return;
        if (profileSticker.pid === pid) this.profileStickers[i] = null;
      });
      this.profileStickers[this.index] = new ProfileSticker(pid, new Date());
      this.profileStickersChanged = true;
      this.miscellaneousService.userStickerSelection.next(this.profileStickers[this.index]);
    });
  }

  onNoEditable(type: string = 'button') {
    this.miscellaneousService.showDashboard.next(true);
    this.miscellaneousService.overrideEdit.next(true);
    if (type === 'sticker') this.miscellaneousService.profileStickerEdit.next(true);
  }

  onClickBack () {
    this.inEditing = false;
    this.index = undefined;
    this.miscellaneousService.profileStickerEdit.next(false);
    this.miscellaneousService.userStickerSelection.next(null);
    if (this.profileStickersChanged) {
      this.profileStickersChanged = false;
      this.userStickers.forEach((sticker, i) => this.profileStickers[4-i] = sticker);
    }
  }

  goToLink(){
    if (!this.link) return;
    const link = 'https://' + this.link;
    if (!this.validURL(link)) return;
    window.open(link, "_blank");
  }

 validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
