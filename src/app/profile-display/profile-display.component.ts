import { MixpanelService } from './../shared/mixpanel.service';
import { UsersService } from './../shared/users.service';
import { ProfileSticker, DisplayPicture } from './../shared/profile.model';
import { Router} from '@angular/router';
import { startWith, takeUntil} from 'rxjs/operators';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import { ActivityService } from '../shared/activity.service';
import { MiscellaneousService, PopUp } from '../shared/miscellaneous.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { CustomMetadata } from '../shared/post.model';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css']
})
export class ProfileDisplayComponent implements OnInit, OnDestroy {

  @Input() uid$: BehaviorSubject<string>;
  @Input() editable?: boolean = true;
  uid: string;

  username$: Observable<{username: string}> = new Observable(observer => observer.next({username: ''}));
  displayPicture$: Observable<string>;
  tempDisplayPicture$ = new BehaviorSubject<any>(null);
  // activity: Activity;

  isAuthenticated: boolean = true;
  allowEdit: boolean = false;
  notifier$ = new Subject();

  collected: number = 0;
  views: number = 0;

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
  description: string = '';
  link: string = '';
  profileStickers: ProfileSticker[] = [null,null,null,null,null];
  userStickers:  ProfileSticker[] = [null,null,null,null,null];
  error: string;
  displayPicture: File;
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

  preloadImages = [ '/assets/images/Profile%20Display/editModeBackground.svg',
                    '/assets/images/Profile%20Display/profileDescription.svg',
                    '/assets/images/Profile%20Display/profileDisplayBorder.svg',
                    '/assets/images/Profile%20Display/profileLinkEdit.svg',
                    '/assets/images/Profile%20Display/saveButton.svg'];

  constructor( private auth: AngularFireAuth,
               private usersService: UsersService,
               private activityService: ActivityService,
               private router: Router,
               private miscellaneousService: MiscellaneousService,
               private mixpanelService: MixpanelService) { }

  ngOnInit(): void {

    this.miscellaneousService.preloadImages(this.preloadImages);

    this.miscellaneousService.overrideEdit.pipe(takeUntil(this.notifier$)).subscribe(response => {
      if (!this.editable) return;
      //ready editable state
      this.inEditing = false;
      this.resetState();

      if (response) {
        var index = this.profileStickers.findIndex(sticker => sticker === null);
        if (index === -1 || !index) index = 0;
        this.clickProfileSticker(this.profileStickers[index], index);
      }
    });

    this.miscellaneousService.showDashboard.pipe(takeUntil(this.notifier$)).subscribe(response => {

      if (response) return;

      this.inEditing = false;
      this.editDesc = false;
      this.editLink = false;
      this.index = undefined;
      this.miscellaneousService.profileStickerEdit.next(false);
    });

    this.auth.onAuthStateChanged((user) => {
      this.isAuthenticated = !!user;
      this.allowEdit = this.isAuthenticated;
      if (this.isAuthenticated)  {
        this.myUid = user.uid;
      }
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
    this.usersService.getProfileDetails(this.uid).pipe(takeUntil(this.notifier$)).subscribe(details => {
      if (!details) return;
      this.description = details.description;
      this.link = details.link;

      this.dpLoaded = true;
    });
    this.usersService.getProfileStickers(this.uid).pipe(takeUntil(this.notifier$)).subscribe(profileStickers => {
      profileStickers.stickers.forEach((sticker, i) => this.userStickers[i] = sticker);
      this.userStickers.forEach((sticker, i) => this.profileStickers[4-i] = sticker);
      this.stickerLoaded = true;
    });
    this.displayPicture$ = this.usersService.getDisplayPicture(this.uid);
    this.displayPicture$.pipe(takeUntil(this.notifier$)).subscribe(dp => {
      this.tempDisplayPicture$.next(dp);
      this.dpLoaded = true;
    });
    this.username$ = this.usersService.getUsername(this.uid).pipe(startWith({username: ''}));
  }

  setUpActivity() {
    this.activityService.getActivityCollection(this.uid).pipe(takeUntil(this.notifier$))
      .subscribe(response => this.collected = response ? response.counter : 0);

    this.activityService.getActivityViews(this.uid).pipe(takeUntil(this.notifier$))
      .subscribe(response => this.views = response ? response.counter : 0);
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

  async onSave() {
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

      const dimensions = await this.miscellaneousService.getDimension(this.displayPicture, this.displayPicture.type);
      const metadata = new CustomMetadata(this.uid, dimensions.width.toString(), dimensions.height.toString());
      const displayPictureData =  new DisplayPicture(this.uid,
                                                +metadata.width,
                                                +metadata.height,
                                                this.displayPicture.type,
                                                new Date());

      this.displayPicture$ = new Observable(observer => observer.next(this.updatedDP));

      this.usersService.uploadDisplayPicture(this.uid, this.displayPicture, metadata, displayPictureData);
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
    if (type === 'sticker') {this.miscellaneousService.overrideEdit.next(true);}
    else {this.miscellaneousService.overrideEdit.next(false);};
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

<<<<<<< HEAD
  trackByFn(index, item: ProfileSticker) {
    return !!item ? item.pid : index;
=======
  usernameClick() {
    this.mixpanelService.setRoutingVia('profile display');
>>>>>>> f-010
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
