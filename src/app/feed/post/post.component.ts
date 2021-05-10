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

  holderList: Holder[];

  mobileCheck: boolean;
  tabletCheck: boolean;
  windowHeight: number;

  frameOffset: number;
  frameHeight: number;
  currentPost: string;

  engagementProp = {'width': '0','background': '#E2B33D'};

  stickerCollectionState: number;
  collectionLoaded = new BehaviorSubject<boolean>(undefined);
  engagementLoaded = new BehaviorSubject<boolean>(undefined);
  stickerContent$: Observable<any>;
  stickerDetails: StickerDetails;

  mutePost: boolean = false;

  // User stuff
  username$: Observable<{username: string}>;
  displayPicture$: Observable<string>;
  profileStickers$: Observable<{stickers: ProfileSticker[] | string[]}>;
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

  postInFrame() {
    if (!this.post) return;
    const rect = this.post.nativeElement.getBoundingClientRect();
    const height = this.post.nativeElement.offsetHeight;
    const midPoint = rect.top + height/2;
    this.postFocus = midPoint - this.frameOffset >= 0 && midPoint - this.frameOffset - this.frameHeight < 0;
    if (this.postFocus && this.currentPost != this.pid) this.feedService.currentPost.next(this.pid);
  }

  setUpPost() {
    if (!this.pid) return;

    this.post$ = this.postService.getPostInfo(this.pid);

    this.postContent$ = this.postService.getPostContent(this.pid);

    this.postService.getPostMetadata(this.pid).pipe(takeUntil(this.notifier$)).subscribe((response) => {
      if (!response) return;
      this.postType = response.contentType;
      this.postAspectRatio = (+response.customMetadata.height)/(+response.customMetadata.width);
    }, error => console.log(error));

    this.postDetails$ = this.postService.getPostDetails(this.pid);

    this.postService.getStickerDetails(this.pid).pipe(takeUntil(this.notifier$))
      .subscribe((response) => {
        this.stickerDetails = response;
        this.setUpEngagement();
      });

    // post collection list
    this.activityService.getHolderList(this.pid).pipe(takeUntil(this.notifier$))
     .subscribe(response => {
        this.holderList = response;
        this.collectionLoaded.next(true);
      });

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
    this.profileRoute = "/profile/" + this.uid;

    this.username$ = this.usersService.getUsername(this.uid);
    this.displayPicture$ = this.usersService.getDisplayPicture(this.uid);
    this.profileStickers$ = this.usersService.getProfileStickers(this.uid)
                              .pipe(startWith({stickers: ['loading','loading','loading','loading','loading']}));
  }

  setUpEngagement(){
    if (!this.stickerDetails || !this.collectedLoaded) return;
    let colour: string;
    this.engagementRatio = this.collected/this.stickerDetails.amountReleased;
    this.engagementRatio === 1 ? colour = '#13A032': colour = '#E3B33D';
    let percentage: string = (this.engagementRatio*100).toString() + '%';
    this.engagementProp.width = percentage;
    this.engagementProp.background = colour;
    this.engagementLoaded.next(true);
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

  stopPropagation(event) {
    event.stopPropagation();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  allowProcessing() {
    return new Promise<boolean>((resolve) => {
      combineLatest([this.collectionLoaded,this.engagementLoaded]).subscribe(results => {
        if (results[0] === true && results[1] === true) resolve(true);
      }, async (error) => {
        this.stickerCollectionState = -1; //reject
        const popUpObj = new PopUp("An unknown error occurred! Try again later.",'Okay', undefined, ['default', 'default']);
        this.miscellaneousService.setPopUp(popUpObj);
        await this.miscellaneousService.getPopUpInteraction().pipe(first()).toPromise();
        return; //end
      });
    })
  }

  async collectSticker() {
    this.auth.onAuthStateChanged(async (user) => {
      this.isAuthenticated = !!user;
      if (this.isAuthenticated)  {

        if (this.stickerCollectionState === 0) return;
        this.stickerCollectionState = undefined; //intermediate state
        await this.sleep(50);
        this.stickerCollectionState = 0; //loading

        const val = await this.allowProcessing();

        this.myUid = user.uid;

        for (let key in this.holderList) {
          if (this.holderList[key].collectorID === this.myUid) {
            this.stickerCollectionState = -1; //reject
            const popUpObj = new PopUp("You already collected this sticker!",'Okay', undefined, ['default', 'default']);
            this.miscellaneousService.setPopUp(popUpObj);
            return this.mixpanelService.stickerCollectionTrack({collected: false,
                                                                status: 'Already collected',
                                                                engagementRatioBefore: this.engagementRatio,
                                                                premium: false,
                                                                price: 0,
                                                                pid: this.pid,
                                                                collecteeID: this.uid,
                                                                postType: this.postType}); //end
          }
        }

        if (this.engagementRatio < 1) {
          const success = await this.activityService.addCollection(new Collection(this.myUid, this.uid, this.pid, new Date().getTime()));
          this.stickerCollectionState = 1; //confirm
          return this.mixpanelService.stickerCollectionTrack({collected: success,
                                                              status: 'Collected',
                                                              engagementRatioBefore: this.engagementRatio,
                                                              premium: false,
                                                              price: 0,
                                                              pid: this.pid,
                                                              collecteeID: this.uid,
                                                              postType: this.postType});
        } else {
          this.stickerCollectionState = -1; //reject
          const popUpObj = new PopUp("There are no more stickers left!",'Okay', undefined, ['default', 'default']);
          this.miscellaneousService.setPopUp(popUpObj);
          return this.mixpanelService.stickerCollectionTrack({collected: false,
                                                              status: 'Reached full engagement',
                                                              engagementRatioBefore: this.engagementRatio,
                                                              premium: false,
                                                              price: 0,
                                                              pid: this.pid,
                                                              collecteeID: this.uid,
                                                              postType: this.postType}); //end
        }
      } else {
        this.miscellaneousService.lastRoute='/post/' + this.pid;
        this.router.navigate(['/auth']);
      }
    });
  }

<<<<<<< HEAD
  stickerTrackByFn(index, item: ProfileSticker) {
    return !!item ? item.pid : index;
  }

  holderTrackByFn(index, item: Holder) {
    return !!item ? item.collectorID : index;
=======
  usernameClick() {
    this.mixpanelService.setRoutingVia('post');
>>>>>>> f-010
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
