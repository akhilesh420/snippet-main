import { UsersService } from 'src/app/shared/users.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivityService } from '../shared/activity.service';
import { PostService } from '../shared/post.service';
import { takeUntil } from 'rxjs/operators';
import { StickerDetails } from '../shared/post.model';
import { Activity } from '../shared/activity.model';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { ProfileDetails, ProfileSticker } from '../shared/profile.model';

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
  profileStickers$: Observable<ProfileSticker[]>;
  profileRoute: string;
  engagementProp = {'width': '0','background': '#D8B869'};
  stickerDetails: StickerDetails;
  activity: Activity;
  collected: string = '0';
  views: string = '0';
  engagementRatio: number = 0;

  constructor(private postService: PostService,
              private usersService: UsersService,
              private activityService: ActivityService) { }

  ngOnInit(): void {
    this.profileRoute = "/profile/" + this.uid;

    this.postService.getStickerDetails(this.pid).pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.stickerDetails = response;
      this.setUpEngagement();
    });

    this.profileStickers$ = this.usersService.getProfileStickers(this.uid);
  }

  setUpProfile() {
    this.profileDetails$ = this.usersService.getProfileDetails(this.uid);
  }

  setUpActivity() {
    this.activityService.getActivity(this.pid).pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.activity = response[0];
      this.setUpEngagement();
    });;
  }

  setUpEngagement(){
    if (this.stickerDetails && this.activity) {
      let colour: string;
      this.engagementRatio = this.activity.collected/this.stickerDetails.amountReleased;
      this.engagementRatio === 1 ? colour = '#53BD9C': colour = '#D8B869';
      let percentage: string = (this.engagementRatio*100).toString() + '%';
      this.engagementProp.width = percentage;
      this.engagementProp.background = colour;
      if (this.engagementRatio === 1) {
        this.views = this.convertToShort(this.activity.views);
        this.collected = this.convertToShort(this.activity.collected);
      }
    }
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

}
