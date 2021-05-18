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


    this.auth.onAuthStateChanged((user) => {
      this.isAuthenticated = !!user;
      this.allowEdit = this.isAuthenticated;
      if (this.isAuthenticated)  {
        this.myUid = user.uid;
      }
    });
  }

  setUpProfile() {

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
