import { MixpanelService } from './../shared/mixpanel.service';
import { UsersService } from './../shared/users.service';
import { ProfileSticker, DisplayPicture, PersonalDetails, ProfileDetails } from './../shared/profile.model';
import { Router} from '@angular/router';
import { startWith, takeUntil} from 'rxjs/operators';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef, OnChanges} from '@angular/core';
import { ActivityService } from '../shared/activity.service';
import { MiscellaneousService, PopUp } from '../shared/miscellaneous.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { CustomMetadata } from '../shared/post.model';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css']
})
export class ProfileDisplayComponent implements OnInit, OnChanges, OnDestroy {

  @Input() uid: string;
  lastUid: string;
  myUid: string;

  isAuthenticated: boolean = true;

  username$: Observable<{username: string}>;
  displayPicture$: Observable<string>;
  personalDetails$: Observable<PersonalDetails>;
  profileDetails$: Observable<ProfileDetails>;
  views$: Observable<{ counter: number }>;
  collectors$: Observable<{ counter: number }>;
  profileStickers$: Observable<{stickers: ProfileSticker[] | string[]}> = new Observable<{stickers: ProfileSticker[] | string[]}>()
    .pipe(startWith({stickers: ['loading','loading','loading','loading','loading']}));
  link: string = '';

  gradientColour: string = '#0B0B0B';

  notifier$ = new Subject();

  constructor( private auth: AngularFireAuth,
               private usersService: UsersService,
               private activityService: ActivityService,
               private mixpanelService: MixpanelService,
               private miscellaneousService: MiscellaneousService) { }

  ngOnInit(): void {
    this.setUpProfile(this.uid);
    this.auth.onAuthStateChanged((user) => {
      this.isAuthenticated = !!user;
      if (this.isAuthenticated)  this.myUid = user.uid;
    });
  }

  ngOnChanges() {
    console.log('on changes profile display');
    this.setUpProfile(this.uid);
  }

  setUpProfile(uid: string) {
    if (this.lastUid === uid) return;
    console.log(uid);
    this.lastUid = uid;
    this.username$ = this.usersService.getUsername(uid);
    this.displayPicture$ = this.usersService.getDisplayPicture(uid);
    this.personalDetails$ = this.usersService.getPersonalDetails(uid);
    this.profileDetails$ = this.usersService.getProfileDetails(uid);

    this.views$ = this.activityService.getActivityViews(uid)
      .pipe(startWith({counter: 0}));
    this.collectors$ = this.activityService.getActivityCollection(uid)
      .pipe(startWith({counter: 0}));

    this.profileStickers$ = this.usersService.getProfileStickers(uid)
      .pipe(startWith({stickers: ['loading','loading','loading','loading','loading']}));

    this.usersService.getDisplayPictureRef(uid)
    .pipe(takeUntil(this.notifier$))
    .subscribe((details) => {
      if(!details) return;
      if (!!details.colours) this.gradientColour = details.colours[1];
    });
  }

  trackByFn(index, item: ProfileSticker) {
    return !!item ? item.pid : index;
  }

  usernameClick() {
    this.mixpanelService.setRoutingVia('profile display');
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
