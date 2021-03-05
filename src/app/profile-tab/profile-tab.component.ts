import { UsersService } from 'src/app/shared/users.service';
import { Component, Input, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Activity } from '../shared/activity.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { ProfileDetails, ProfileSticker } from '../shared/profile.model';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.css']
})
export class ProfileTabComponent implements OnInit {

  @Input() uid: string;
  @Input() engagementProp: any;

  notifier$ = new Subject();
  profileDetails$: BehaviorSubject<ProfileDetails>;
  displayPicture$ = new BehaviorSubject<string>(null);
  profileStickers: ProfileSticker[] = [null,null,null,null,null];
  profileRoute: string;
  profileStickersLoaded: boolean = false;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.profileRoute = "/profile/" + this.uid;

    this.profileStickersLoaded = false;
    this.profileDetails$ = this.usersService.getProfileDetails(this.uid);
    this.displayPicture$ = this.usersService.getDisplayPicture(this.uid);
    this.usersService.getProfileStickers(this.uid).pipe(takeUntil(this.notifier$)).subscribe(response => {
      if (!response) return;
      this.profileStickers = response;
      this.profileStickersLoaded = true;
    });
<<<<<<< HEAD
    this.stickerContent$ = this.postService.getStickerContent(this.pid);
    // post collection list
    this.activityService.getPostCollection(this.pid).subscribe(response => {
      this.postCollection = response;
      this.collectionLoaded.next(true);
    });
  }

  setUpActivity() {
    // this.activityService.getActivity(this.pid).pipe(takeUntil(this.notifier$)).subscribe(response => {
    //   this.activity = response[0];
    //   this.setUpEngagement();
    // });
=======
>>>>>>> remotes/origin/f-006
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
