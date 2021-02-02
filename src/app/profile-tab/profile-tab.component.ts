import { environment } from './../../environments/environment.prod';
import { UsersService } from 'src/app/shared/users.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivityService } from '../shared/activity.service';
import { PostService } from '../shared/post.service';
import { first, take, takeUntil } from 'rxjs/operators';
import { StickerDetails } from '../shared/post.model';
import { Activity, Collection } from '../shared/activity.model';
import { Subject, BehaviorSubject, Observable, forkJoin, combineLatest } from 'rxjs';
import { ProfileDetails, ProfileSticker } from '../shared/profile.model';
import { MiscellaneousService, PopUp } from '../shared/miscellaneous.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.css']
})
export class ProfileTabComponent implements OnInit {

  @Input() uid: string;
  @Input() pid: string;

  notifier$ = new Subject();
  profileDetails$: BehaviorSubject<ProfileDetails>;
  profileStickers: ProfileSticker[] = [null,null,null,null,null];
  stickerContent$: BehaviorSubject<any>;
  profileRoute: string;
  engagementProp = {'width': '0','background': '#E2B33D'};
  stickerDetails: StickerDetails;
  activity: Activity;
  engagementRatio: number;
  myUid: string;
  isAuthenticated: boolean;
  postCollection: Collection[] = [];
  profileStickersLoaded: boolean = false;

  stickerCollectionState: number;
  collectionLoaded = new BehaviorSubject<boolean>(undefined);
  engagementLoaded = new BehaviorSubject<boolean>(undefined);

  constructor(private postService: PostService,
              private usersService: UsersService,
              private activityService: ActivityService,
              private auth: AngularFireAuth,
              private miscellaneousService: MiscellaneousService,
              private router: Router) { }

  ngOnInit(): void {

    if (!this.pid || !this.uid) return;

    this.profileRoute = "/profile/" + this.uid;

    this.postService.getStickerDetails(this.pid).pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.stickerDetails = response;
      this.setUpEngagement();
    });

    this.setUp();
    this.setUpActivity();
  }

  setUp() {
    this.profileStickersLoaded = false;
    this.profileDetails$ = this.usersService.getProfileDetails(this.uid);
    this.usersService.getProfileStickers(this.uid).pipe(takeUntil(this.notifier$)).subscribe(response => {
      if (!response) return;
      this.profileStickers = response;
      this.profileStickersLoaded = true;
    });
    this.stickerContent$ = this.postService.getStickerContent(this.pid);
    // post collection list
    this.activityService.getPostCollection(this.pid).subscribe(response => {
      this.postCollection = response;
      this.collectionLoaded.next(true);
    });
  }

  setUpActivity() {
    this.activityService.getActivity(this.pid).pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.activity = response[0];
      this.setUpEngagement();
    });
  }

  setUpEngagement(){
    if (this.stickerDetails && this.activity) {
      let colour: string;
      this.engagementRatio = this.activity.collected/this.stickerDetails.amountReleased;
      this.engagementRatio === 1 ? colour = '#13A032': colour = '#E3B33D';
      let percentage: string = (this.engagementRatio*100).toString() + '%';
      this.engagementProp.width = percentage;
      this.engagementProp.background = colour;
      this.engagementLoaded.next(true);
    }
  }

  allowProcessing() {
    console.log('start request');
    return new Promise<boolean>((resolve) => {
      combineLatest([this.collectionLoaded,this.engagementLoaded]).subscribe(results => {
        if (results[0] === true && results[1] === true) resolve(true);
      }, async (error) => {
        this.stickerCollectionState = -1; //reject
        const popUpObj = new PopUp("An unknown error occurred! Try again later.",'Okay', undefined, ['default', 'default']);
        this.miscellaneousService.setPopUp(popUpObj);
        await this.miscellaneousService.getPopUpInteraction().pipe(first()).toPromise();
        return; //end
      });
    })
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  collectSticker() {
    this.auth.onAuthStateChanged(async (user) => {
      this.isAuthenticated = !!user;
      if (this.isAuthenticated)  {

        if (this.stickerCollectionState === 0) return;
        this.stickerCollectionState = undefined; //intermediate state
        await this.sleep(50);
        this.stickerCollectionState = 0; //loading

        const val = await this.allowProcessing();
        console.log(val);

        this.myUid = user.uid;

        for (let key in this.postCollection) {
          if (this.postCollection[key].collectorID === this.myUid) {
            this.stickerCollectionState = -1; //reject
            const popUpObj = new PopUp("You already collected this sticker!",'Okay', undefined, ['default', 'default']);
            this.miscellaneousService.setPopUp(popUpObj);
            return; //end
          }
        }

        if (this.engagementRatio < 1) {
          this.activityService.addCollection(new Collection(this.myUid, this.uid, this.pid, new Date().getTime()));
          this.stickerCollectionState = 1; //confirm
          return; //end
        } else {
          this.stickerCollectionState = -1; //reject
          const popUpObj = new PopUp("There are no more stickers left!",'Okay', undefined, ['default', 'default']);
          this.miscellaneousService.setPopUp(popUpObj);
          return; //end
        }
      } else {
        this.miscellaneousService.lastRoute='/post/' + this.pid;
        this.router.navigate(['/auth']);
      }
    });
  }
}
