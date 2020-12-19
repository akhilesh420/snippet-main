import { takeUntil } from 'rxjs/operators';
import { ActivityService } from './../shared/activity.service';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Collection } from '../shared/activity.model';
import { PostDetails } from '../shared/post.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-collection-tab',
  templateUrl: './collection-tab.component.html',
  styleUrls: ['./collection-tab.component.css']
})
export class CollectionTabComponent implements OnInit, OnDestroy {

  collectionList: Collection[] = [];
  myUid: string;
  notifier$ = new Subject();

  constructor(private authService: AuthService,
              private activityService: ActivityService) { }

  ngOnInit(): void {
    this.authService.user.pipe(takeUntil(this.notifier$)).subscribe(authRes => {
      if (!authRes) return;
      this.myUid = authRes.id;
      this.getCollection();
    }, errorMessage => {
      console.log(errorMessage);
    });
  }

  getCollection() {
    this.activityService.getUserCollection(this.myUid) //get details of user collection
    .subscribe((response:Collection[]) => {
      this.collectionList = response;
      console.log(this.collectionList);
    });
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }

}
