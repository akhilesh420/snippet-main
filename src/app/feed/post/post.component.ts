import { MixpanelService } from './../../shared/mixpanel.service';
import { UsersService } from 'src/app/shared/users.service';
import { FeedService } from 'src/app/feed/feed.service';
import { Router } from '@angular/router';
import { Subject,Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { PostService } from './../../shared/post.service';
import { Feed, Holder, PostDetails, StickerDetails} from './../../shared/post.model';
import { Component, OnInit, Input, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { first, startWith, takeUntil} from 'rxjs/operators';
import { ActivityService } from 'src/app/shared/activity.service';
import { ScrollService } from 'src/app/shared/scroll.service';
import { WindowStateService } from 'src/app/shared/window.service';
import { MiscellaneousService, PopUp } from 'src/app/shared/miscellaneous.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Collection } from 'src/app/shared/activity.model';
import { ProfileSticker } from 'src/app/shared/profile.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  @Input() pid: string;
  @Input() uid: string;

  postFocus: boolean;

  post$: Observable<Feed>;
  postDetails$: Observable<PostDetails>;
  postContent$: Observable<any>;
  postType$: Subject<string>;
  postAspectRatio: number = 1;

  postType: string = 'video/mp4';
  notifier$ = new Subject();
  collectionList: Observable<Holder[]>;

  viewed: boolean = false;
  showDetails = false;
  fullscreenToggle = false;
  collected: number = 0;
  views: number = 0;
  collectedLoaded = false;
  engagementRatio: number = 0;
  myUid: string;
  isAuthenticated: boolean;

  @ViewChild('videoPlayer') videoPlayer : ElementRef;
  @ViewChild('post') post : ElementRef;

  viewTimer: any;
  viewTime: number = 1500; //how long for a viewed post in milliseconds

  playFailSafe: boolean = false;
  buffering: boolean = false;
  check: boolean = false;

  holderList: Observable<Holder[]>;

  mobileCheck: boolean;
  tabletCheck: boolean;
  windowHeight: number;

  frameOffset: number;
  frameHeight: number;
  currentPost: string;

  engagementProp = {'width': '0','background': '#E2B33D'};

  stickerCollectionState: number;
  stickerContent$: Observable<any>;
  stickerDetails: StickerDetails;

  mutePost: boolean = false;

  // User stuff
  username$: Observable<{username: string}>;
  displayPicture$: Observable<string>;
  profileStickers$: Observable<{stickers: ProfileSticker[] | string[]}> = new Observable<{stickers: ProfileSticker[] | string[]}>()
    .pipe(startWith({stickers: ['loading','loading','loading','loading','loading']}));
  profileRoute: string;
  profileStickerClasses = ['stickerOne', 'stickerTwo', 'stickerThree', 'stickerFour', 'stickerFive']

  constructor(private postService: PostService,
              private auth: AngularFireAuth,
              private activityService: ActivityService,
              private usersService: UsersService,
              private scrollService: ScrollService,
              private feedService: FeedService,
              private windowStateService: WindowStateService,
              private miscellaneousService: MiscellaneousService,
              private mixpanelService: MixpanelService,
              private router: Router) { }

  ngOnInit(): void {

    this.scrollService.getScroll().pipe(takeUntil(this.notifier$)).subscribe(() => {
      this.postInFrame();
    });

    this.windowStateService.screenWidthValue.pipe(takeUntil(this.notifier$))
    .subscribe(val => {
      if (!val) return;
      this.tabletCheck = this.windowStateService.tabletCheck;
      this.mobileCheck = this.windowStateService.mobileCheck;
      const windowHeight = window.innerHeight;
      this.frameOffset = this.mobileCheck ? 0 : 54 + 5.444*windowHeight/100;
      this.frameHeight = this.mobileCheck ? 4*windowHeight/5 : 625*this.windowStateService.normHeight;
    });

    this.feedService.currentPost.pipe(takeUntil(this.notifier$))
    .subscribe(val => {
      this.currentPost = val
      this.videoToggle();
      this.postViewTime();
    });

    this.feedService.mutePosts.pipe(takeUntil(this.notifier$))
    .subscribe(val => {
      this.mutePost = val;
      if (this.videoPlayer) this.videoPlayer.nativeElement.muted = val;
    });

    this.auth.onAuthStateChanged((user) => {
      this.isAuthenticated = !!user;
      if (this.isAuthenticated)  this.myUid = user.uid;
    });

    this.setUpPost();
    this.setUpUser();
  }

  setUpPost() {
    if (!this.pid) return;

    this.post$ = this.postService.getPostInfo(this.pid);

    this.postContent$ = this.postService.getPostContent(this.pid);

    this.postService.getPostContentRef(this.pid).pipe(takeUntil(this.notifier$)).subscribe((response) => {
      this.postType = response.fileFormat;
      this.postAspectRatio = response.height/response.width;
    }, error => console.log(error));

    this.postDetails$ = this.postService.getPostDetails(this.pid);

    this.postService.getStickerDetails(this.pid).pipe(takeUntil(this.notifier$))
      .subscribe((response) => {
        this.stickerDetails = response;
        this.setUpEngagement();
      });

    // post collection list
    this.holderList = this.activityService.getHolderList(this.pid);

    this.stickerContent$ = this.postService.getStickerContent(this.pid);

    this.activityService.getActivityCollection(this.pid).pipe(takeUntil(this.notifier$))
      .subscribe(response => {
        this.collected = response.counter;
        this.collectedLoaded = true;
        this.setUpEngagement();
      });

    this.activityService.getActivityViews(this.pid).pipe(takeUntil(this.notifier$))
      .subscribe(response => this.views = response.counter,
                 error => console.log(error));
  }

  setUpUser() {
    if (!this.uid) return;

    this.profileRoute = "/profile/posts/" + this.uid;

    this.username$ = this.usersService.getUsername(this.uid);
    this.displayPicture$ = this.usersService.getDisplayPicture(this.uid);
    this.profileStickers$ = this.usersService.getProfileStickers(this.uid)
                              .pipe(startWith({stickers: ['loading','loading','loading','loading','loading']}));
  }

  setUpEngagement(){
    if (!this.stickerDetails || !this.collectedLoaded) return;
    let colour: string;
    this.engagementRatio = this.collected/this.stickerDetails.amountReleased;
    this.engagementRatio === 1 ? colour = '#E2B33D': colour = '#FFFFFF';
    let percentage: string = (this.engagementRatio*100).toString() + '%';
    this.engagementProp.width = percentage;
    this.engagementProp.background = colour;
  }

  postInFrame() {
    if (!this.post) return;
    const rect = this.post.nativeElement.getBoundingClientRect();
    const height = this.post.nativeElement.offsetHeight;
    const midPoint = rect.top + height/2;
    this.postFocus = midPoint - this.frameOffset >= 0 && midPoint - this.frameOffset - this.frameHeight < 0;
    if (this.postFocus && this.currentPost != this.pid) this.feedService.currentPost.next(this.pid);
  }

  async collectSticker() {
    if (!this.isAuthenticated) {
      this.miscellaneousService.lastRoute='/post/' + this.pid;
      return this.router.navigate(['/auth']);
    }

    if (this.stickerCollectionState === 0) return;
    if (!this.uid) return this.stickerCollectionState = -1; //reject
    this.stickerCollectionState = 0; //loading

    let mixpanelObj = {};

    this.activityService.addCollection(new Collection(this.myUid, this.uid, this.pid, new Date().getTime()))
      .then(() => {
        this.stickerCollectionState = 1; //confirm
        mixpanelObj = { collected: true,
                        status: 'Collected',
                        engagementRatioBefore: this.engagementRatio,
                        premium: false,
                        price: 0,
                        pid: this.pid,
                        collecteeID: this.uid,
                        postType: this.postType};
      }).catch((e) => {
        this.stickerCollectionState = -1; //reject
        const popUpObj = new PopUp(e,'Okay', undefined, ['default', 'default']);
        this.miscellaneousService.setPopUp(popUpObj);
        mixpanelObj = { collected: false,
                        status: e,
                        engagementRatioBefore: this.engagementRatio,
                        premium: false,
                        price: 0,
                        pid: this.pid,
                        collecteeID: this.uid,
                        postType: this.postType}
      }).finally(() => {
        this.mixpanelService.stickerCollectionTrack(mixpanelObj);
      });
  }

  postView() {
    if (this.viewed || this.uid === this.myUid || !this.pid || !this.uid) return;
    this.viewed = true;
    if (!this.isAuthenticated) {
      this.activityService.addViews(this.pid,this.uid);
    } else {
      this.activityService.addViews(this.pid,this.uid,this.myUid);
    }
  }

  postViewTime() {
    if (this.viewed) return;
    if (this.currentPost === this.pid) {
      this.viewTimer = setTimeout(() => this.postView(), this.viewTime);
    } else {
      if (!this.viewTimer) return;
      clearTimeout(this.viewTimer);
    }
  }

  videoToggle() {
    try {
      if (!this.postType.includes('video')) return;
      if (this.currentPost === this.pid) {
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

  onCanPlay() {
    if (this.currentPost === this.pid) this.videoToggle();
  }

  toggleHolderList() {
    this.showDetails = !this.showDetails;

    if (this.showDetails) this.mixpanelService.openHolderListTrack({ pid: this.pid, creatorID: this.uid, postType: this.postType });
  }

  usernameClick() {
    this.mixpanelService.setRoutingVia('post');
  }

  stopPropagation(event) {
    event.stopPropagation();
  }

  stickerTrackByFn(index, item: ProfileSticker) {
    return !!item ? item.pid : index;
  }

  holderTrackByFn(index, item: Holder) {
    return !!item ? item.collectorID : index;
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
