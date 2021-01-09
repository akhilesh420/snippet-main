import { takeUntil } from 'rxjs/operators';
import { ActivityService } from './../shared/activity.service';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit, OnDestroy, Input, EventEmitter } from '@angular/core';
import { Collection } from '../shared/activity.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { MiscellaneousService } from '../shared/miscellaneous.service';
import { ProfileSticker } from '../shared/profile.model';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-collection-tab',
  templateUrl: './collection-tab.component.html',
  styleUrls: ['./collection-tab.component.css']
})
export class CollectionTabComponent implements OnInit, OnDestroy {

  collectionList: Collection[] = [null, null, null, null];
  myUid: string;
  isAuthenticated: boolean = true;
  notifier$ = new Subject();
  editMode: boolean;
  userStickerSelected$: BehaviorSubject<ProfileSticker>;

  constructor(private auth: AngularFireAuth,
              private activityService: ActivityService,
              private miscellaneousService: MiscellaneousService) { }

  ngOnInit(): void {

    this.auth.onAuthStateChanged((user) => {
      this.isAuthenticated = !!user;
      if (this.isAuthenticated) {
        this.myUid = user.uid;
        this.getCollection();
      }
    });

    this.userStickerSelected$ = this.miscellaneousService.userStickerSelection;
    this.miscellaneousService.profileStickerEdit.pipe(takeUntil(this.notifier$)).subscribe(value => this.editMode = value);
  }

  getCollection() {
    this.activityService.getUserCollection(this.myUid).pipe(takeUntil(this.notifier$)) //get details of user collection
    .subscribe((response:Collection[]) => {
      this.collectionList = response;
    });
  }

  confirmSelection(confirm: string) {
    this.miscellaneousService.stickerSelectConfirm.next(confirm);
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }

}
