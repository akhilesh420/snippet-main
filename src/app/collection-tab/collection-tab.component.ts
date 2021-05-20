import { MixpanelService } from './../shared/mixpanel.service';
import { Feed } from './../shared/post.model';
import { Router } from '@angular/router';
import { takeUntil, map } from 'rxjs/operators';
import { ActivityService } from './../shared/activity.service';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MiscellaneousService } from '../shared/miscellaneous.service';
import { ProfileSticker } from '../shared/profile.model';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-collection-tab',
  templateUrl: './collection-tab.component.html',
  styleUrls: ['./collection-tab.component.css']
})
export class CollectionTabComponent implements OnInit, OnDestroy {

  feedList = new Observable((observer) => observer.next([null, null, null, null]));
  myUid: string;
  isAuthenticated: boolean = true;
  notifier$ = new Subject();
  editMode: boolean = false;
  userStickerSelected$: BehaviorSubject<ProfileSticker>;

  constructor(private auth: AngularFireAuth,
              private activityService: ActivityService,
              private miscellaneousService: MiscellaneousService,
              private mixpanelService: MixpanelService,
              private router: Router) { }

  ngOnInit(): void {

    this.auth.onAuthStateChanged((user) => {
      this.isAuthenticated = !!user;
      if (this.isAuthenticated) {
        this.myUid = user.uid;
        this.feedList = this.activityService.getUserCollection(this.myUid); //get details of user collection

      } else {
        this.feedList = new Observable((observer) => observer.next([])) ;
      }
    });

    this.userStickerSelected$ = this.miscellaneousService.userStickerSelection;
    this.miscellaneousService.profileStickerEdit.pipe(takeUntil(this.notifier$)).subscribe(value => this.editMode = value);
  }

  confirmSelection(confirm: string) {
    this.miscellaneousService.stickerSelectConfirm.next(confirm);
  }

  trackByFn(index, item) {
    return !!item ? item.pid : index; // or item.id
  }

  goToCollection() {
    if (this.editMode) return;
    this.router.navigate(["/profile/collection/"+this.myUid]);
    this.mixpanelService.setRoutingVia('collection tab');
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }

}
