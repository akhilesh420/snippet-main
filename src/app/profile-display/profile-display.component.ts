import { UsersService } from './../shared/users.service';
import { DisplayPicture, ProfileSticker, ProfileDetails } from './../shared/profile.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivityService } from '../shared/activity.service';
import { Activity } from '../shared/activity.model';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css']
})
export class ProfileDisplayComponent implements OnInit, OnDestroy {

  @Input() getUid: Subject<string>;
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
  placeholderImg = "assets/default image/blank_image@2x.png";

  imageProp = {'height':'100%', 'width':'auto'};

  constructor( private authService: AuthService,
               private usersService: UsersService,
               private activityService: ActivityService,
               private router: Router) { }

  ngOnInit(): void {

    this.authService.user.pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.isAuthenticated = !!response;
      if (this.isAuthenticated) {
        this.myUid = response.id;
      }
    }, errorMessage => {
      console.log(errorMessage);
    });

    this.getUid.pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.uid = response;
      this.setUpProfile();
      this.setUpActivity();
    })
  }

  setUpProfile() {
    this.profileDetails$ = this.usersService.getProfileDetails(this.uid);
    this.profileStickers$ = this.usersService.getProfileStickers(this.uid);
    this.displayPicture$ = this.usersService.getDisplayPicture(this.uid);
  }

  setUpActivity() {
    this.activityService.getActivity(this.uid).pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.activity = response[0];
      this.views = this.convertToShort(this.activity.views);
      this.collected = this.convertToShort(this.activity.collected);
    });;
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

  onLoad(event: any) {
    let width = event.target.width;
    let height= event.target.height;
    if (width/height < 1) {
      this.imageProp.width = '100%';
      this.imageProp.height = 'auto';
    } else {
      this.imageProp.width = 'auto';
      this.imageProp.height = '100%';
    }
  }

  getEmptySlots(stickers) {
    return [...Array(5-stickers.length).keys()]; 
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
