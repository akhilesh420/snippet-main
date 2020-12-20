import { takeUntil } from 'rxjs/operators';
import { ActivityService } from './../shared/activity.service';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit, OnDestroy, Input, EventEmitter } from '@angular/core';
import { Collection } from '../shared/activity.model';
import { Subject } from 'rxjs';
import { MiscellaneousService } from '../shared/miscellaneous.service';

@Component({
  selector: 'app-collection-tab',
  templateUrl: './collection-tab.component.html',
  styleUrls: ['./collection-tab.component.css']
})
export class CollectionTabComponent implements OnInit, OnDestroy {

  collectionList: Collection[] = [];
  myUid: string;
  notifier$ = new Subject();
  editMode: boolean;

  constructor(private authService: AuthService,
              private activityService: ActivityService,
              private miscellaneousService: MiscellaneousService) { }

  ngOnInit(): void {
    this.authService.user.pipe(takeUntil(this.notifier$)).subscribe(authRes => {
      if (!authRes) return;
      this.myUid = authRes.id;
      this.getCollection();
    }, errorMessage => {
      console.log(errorMessage);
    });

    this.miscellaneousService.profileStickerEdit.pipe(takeUntil(this.notifier$)).subscribe(value => this.editMode = value);
  }

  getCollection() {
    this.activityService.getUserCollection(this.myUid).pipe(takeUntil(this.notifier$)) //get details of user collection
    .subscribe((response:Collection[]) => {
      this.collectionList = response;
      console.log(this.collectionList);
    });
  }

  confirmSelection(confirm: string) {
    this.miscellaneousService.stickerSelectConfirm.next(confirm);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }

}
