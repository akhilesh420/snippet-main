import { FeedService } from 'src/app/feed/feed.service';
import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Subject,Observable, BehaviorSubject } from 'rxjs';
import { PostService } from './../../shared/post.service';
import { PostDetails} from './../../shared/post.model';
import { Component, OnInit, Input, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { takeUntil} from 'rxjs/operators';
import { ActivityService } from 'src/app/shared/activity.service';
import { Activity, Collection } from 'src/app/shared/activity.model';
import { ScrollService } from 'src/app/shared/scroll.service';
import { WindowStateService } from 'src/app/shared/window.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
  export class PostComponent implements OnInit, OnDestroy {

  @Input() postDetails: PostDetails;
  postFocus: boolean;

  pid: string;
  postContent$: BehaviorSubject<any>;
  postType$: Subject<string>;

  postType: string = 'video/mp4';
  notifier$ = new Subject();
  collectionList: Observable<Collection[]>;

  viewed: boolean = false;
  holderListAnalysed: boolean = false;
  showDetails = false;
  showComments = false;
  holderToggle = false;
  fullscreenToggle = false;
  collected: string = '0';
  views: string = '0';
  engagementRatio: number = 0;
  uid: string;
  myUid: string;
  isAuthenticated: boolean;

  @ViewChild('videoPlayer') videoPlayer : ElementRef;
  @ViewChild('post') post : ElementRef;

  viewTimer: any;
  viewTime: number = 1500; //how long for a viewed post in milliseconds

  playFailSafe: boolean = false;
  buffering: boolean = false;
  check: boolean = false;

  postCollection: Collection[];
  activity: Activity;

  mobileCheck: boolean;
  tabletCheck: boolean;
  windowHeight: number;

  frameOffset: number;
  activePost: string;

  constructor(private postService: PostService,
              private authService: AuthService,
              private activityService: ActivityService,
              private scrollService: ScrollService,
              private feedService: FeedService,
              private windowStateService: WindowStateService,
              private router: Router) { }

  ngOnInit(): void {
    if (!this.postDetails) return;

    this.scrollService.getScroll().pipe(takeUntil(this.notifier$)).subscribe(() => {
      this.postInFrame();
    });

    this.windowStateService.screenWidthValue.pipe(takeUntil(this.notifier$))
    .subscribe(val => {
      if (!val) return;
      val < 800 ? this.tabletCheck = true : this.tabletCheck = false;
      val < 550 ? this.mobileCheck = true : this.mobileCheck = false;
      const windowHeight = window.innerHeight;
      this.frameOffset = this.mobileCheck ? 0 : 54 + 5.444*windowHeight/100;
    });

    this.feedService.currentPost.pipe(takeUntil(this.notifier$))
    .subscribe(val => {
      this.activePost = val
      this.videoToggle();
      this.postViewTime();
    });

    this.restartPost();
  }

  postInFrame() {
    if (!this.post) return;
    const rect = this.post.nativeElement.getBoundingClientRect();
    const height = this.post.nativeElement.offsetHeight;
    const midPoint = rect.top + height/2;
    this.postFocus = midPoint - this.frameOffset >= 0 && midPoint - this.frameOffset - height < 0;
    if (this.postFocus && this.feedService.currentPost.value != this.pid) this.feedService.currentPost.next(this.pid);
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

    if (this.postDetails.pid === null || this.postDetails.uid === null) return;
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
      this.postContent$.pipe(takeUntil(this.notifier$)).subscribe((val) => {
        setTimeout(() => {
          this.postInFrame();
          this.videoToggle();
        },300);
      })
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
    this.viewed = true;
    if (!this.isAuthenticated) {
      this.activityService.addViews(this.pid,this.uid);
    } else {
      this.activityService.addViews(this.pid,this.uid,this.myUid);
    }
  }

  postViewTime() {
    if (this.viewed) return;
    if (this.activePost === this.pid) {
      this.viewTimer = setTimeout(() => this.postView(), this.viewTime);
    } else {
      if (!this.viewTimer) return;
      clearTimeout(this.viewTimer);
    }
  }

  videoToggle() {
    try {
      if (!this.postType.includes('video')) return;
      if (this.activePost === this.pid) {
        this.videoPlayer.nativeElement.play()
          .then(() => this.playFailSafe = false)
          .catch((e) => {
            console.log(e);
            this.playFailSafe = true
          });
      } else {
        this.videoPlayer.nativeElement.pause();
      }
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

  holderAnalytics() {
    if (this.holderListAnalysed) return;
    this.holderListAnalysed = true;
    const timeSpent = new Date().getTime() -  this.activityService.holderListStartTime;
    this.activityService.holderListStartTime = new Date().getTime();
    const analytics = {type: 'holder list', route: this.router.url.split('/')[1], timeSpent: timeSpent};
    this.activityService.addAnalytics(this.myUid, 'holder list analytics', analytics);
  }

  stopPropagation(event) {
    event.stopPropagation();
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
