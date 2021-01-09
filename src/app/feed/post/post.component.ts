import { MiscellaneousService, PopUp } from './../../shared/miscellaneous.service';
import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Subject, Subscription, Observable, BehaviorSubject } from 'rxjs';
import { ProfileDetails, ProfileSticker} from './../../shared/profile.model';
import { PostService } from './../../shared/post.service';
import { StickerDetails, PostDetails, PostContent } from './../../shared/post.model';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ElementRef, ViewChild, AfterViewInit, OnChanges, AfterViewChecked } from '@angular/core';
import { filter, map, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { UsersService } from 'src/app/shared/users.service';
import { ActivityService } from 'src/app/shared/activity.service';
import { Activity, Collection } from 'src/app/shared/activity.model';
import { WindowStateService } from 'src/app/shared/window.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
  export class PostComponent implements OnInit, AfterViewChecked, OnChanges, OnDestroy {

  @Input() postDetails: PostDetails;
  @Input() postFocus: boolean;

  pid: string;
  postContent$: BehaviorSubject<any>;
  postType$: Subject<string>;

  postType: string = 'image/jpeg';
  notifier$ = new Subject();
  collectionList: Observable<Collection[]>;

  viewed: boolean = false;
  showDetails = false;
  showComments = false;
  holderToggle = false;
  collected: string = '0';
  views: string = '0';
  engagementRatio: number = 0;
  uid: string;
  myUid: string;
  isAuthenticated: boolean;

  @ViewChild('videoPlayer') videoPlayer : ElementRef;

  viewTimer: any;
  viewTime: number = 1500; //how long for a viewed post in milliseconds

  playFailSafe: boolean = false;
  allowToggle: boolean = true;

  postCollection: Collection[];
  activity: Activity;

  constructor(private postService: PostService,
              private authService: AuthService,
              private activityService: ActivityService) { }

  ngOnInit(): void {
    if (!this.postDetails) return;
    this.restartPost();
    this.postViewTime();
  }

  ngOnChanges() {
    this.postViewTime();
    this.allowToggle = true;
  }

  ngAfterViewChecked() {
    this.videoToggle();
  }

  restartPost() {
    this.authService.user.pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.isAuthenticated = !!response;
      if (this.isAuthenticated) {
        this.myUid = response.id;
      }
    }, errorMessage => {
      console.log(errorMessage);
    });

    if (!this.postDetails.pid) return;
    // user profile setup
    this.uid = this.postDetails.uid;

    // post setup
    this.pid = this.postDetails.pid; //exists because of id field
    this.setUpPost();
  }

  setUpPost() {
    this.postService.getPostContentRef(this.pid).pipe(takeUntil(this.notifier$))
    .subscribe(response => {
      this.postType = response.fileFormat;
      this.postContent$ = this.postService.getPostContent(this.pid, response);
    });
    // post collection list
    this.activityService.getPostCollection(this.pid).pipe(takeUntil(this.notifier$))
    .subscribe(response => {
      this.postCollection = response;
    });

    this.activityService.getActivity(this.pid).pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.activity = response[0];
      this.views = this.convertToShort(this.activity.views);
      this.collected = this.convertToShort(this.activity.collected);
    });
  }

  postView() {
    if (this.viewed || this.uid === this.myUid || !this.postDetails.pid || !this.postDetails.uid) return;
    console.log('post viewed'); //temp log
    this.viewed = true;
    if (!this.isAuthenticated) {
      this.activityService.addViews(this.pid,this.uid);
    } else {
      this.activityService.addViews(this.pid,this.uid,this.myUid);
    }
  }

  postViewTime() {
    if (this.viewed) return;
    if (this.postFocus) {
      this.viewTimer = setTimeout(() => this.postView(), this.viewTime);
    } else {
      if (!this.viewTimer) return;
      clearTimeout(this.viewTimer);
    }
  }

  videoToggle() {
    try {
      if (!this.postType.includes('video') || !this.allowToggle) return;
      if (this.postFocus) {
        this.videoPlayer.nativeElement.play()
          .then(() => this.playFailSafe = false)
          .catch((error) => this.playFailSafe = true);
      } else {
        this.videoPlayer.nativeElement.pause();
      }
      this.allowToggle = false;
    } catch (error) {
      return;
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

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
