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
  export class PostComponent implements OnInit, AfterViewChecked, OnDestroy {

  @Input() postDetails: PostDetails;
  @Input() createPost?: boolean = false;
  pid: string;
  @Input() postContent$?: BehaviorSubject<any>;
  @Input() postType$?: Subject<string>;
  @Input() stickerContent$?: BehaviorSubject<any>;
  @Input() playVideo: boolean;

  @Output() addClick = new EventEmitter();

  profileDetails?: ProfileDetails;
  profileStickers$?: Observable<ProfileSticker[]>;
  postType: string;
  notifier$ = new Subject();
  collectionList: Observable<Collection[]>;

  stickerDetails: StickerDetails;
  activity: Activity;

  addIcon = "assets/icons/add_icon@2x.png"

  videoProp = {'height':'100%', 'width':'auto'};
  imageProp = {'height':'auto', 'width':'auto'};
  stickerProp = {'height':'auto', 'width':'auto'};
  engagementProp = {'width': '0','background': '#D8B869'};

  viewed: boolean = false;
  collectingSticker: boolean = false;
  showDetails = false;
  showComments = false;
  holderToggle = false;
  collected: string = '0';
  views: string = '0';
  uid: string;
  myUid: string;
  isAuthenticated: boolean;
  profileRoute: string;
  engagementRatio: number = 0;
  windowSize: number;
  tabClose: string;
  tabOpen: string ;
  stickerSize: string;
  userSubs: Subscription;
  fetchingWindow: boolean;

  @ViewChild('usernameRef') usernameSpan : ElementRef;
  @ViewChild('usernameCol') usernameCol : ElementRef;
  maxWidth: number;
  usernameCounter: number;
  username: string;
  usernameFetch: boolean;

  detailsButtonSize: number = 20;

  @ViewChild('videoPlayer') videoPlayer : ElementRef;

  viewHeight: any;

  constructor(private postService: PostService,
              private authService: AuthService,
              private usersService: UsersService,
              private activityService: ActivityService,
              private router: Router,
              private windowService: WindowStateService,
              private miscellaneousService: MiscellaneousService) { }

  ngOnInit(): void {
    this.viewHeight = window.innerHeight - 46.5;
    this.usernameFetch = false;

    this.fetchingWindow = true;
    this.windowService.checkWidth();
    this.windowService.screenWidthValue.pipe(takeUntil(this.notifier$))
    .subscribe(val => {
      this.viewHeight = window.innerHeight - 47;
      if (val) {
        this.windowSize = val;
        this.fetchingWindow = false;
        if (val < 560) {
          this.tabClose = (71*val/560).toString() + 'px';
          this.tabOpen = (400*val/560).toString() + 'px';
          this.detailsButtonSize = 20*val/560;
      } else {
          this.tabClose = '71px';
          this.tabOpen = '400px';
          this.detailsButtonSize = 20;
        }
      }
    });

    this.restartPost();
  }

  ngAfterViewChecked() {
    this.maxWidth = this.usernameCol.nativeElement.offsetWidth;
    this.videoToggle();
  }

  restartPost() {
    this.userSubs = this.authService.user.subscribe(response => {
      this.isAuthenticated = !!response;
      if (this.isAuthenticated) {
        this.myUid = response.id;
      }
    }, errorMessage => {
      console.log(errorMessage);
    });
    this.uid = this.postDetails.uid;
    this.profileRoute = "/profile/" + this.uid;
    this.setUpProfile();

    if (!this.createPost) {
      this.pid = this.postDetails.pid; //exists because of id field
      this.setUpPost();
      this.setUpActivity();
    } else {
      this.postType$.pipe(takeUntil(this.notifier$)).subscribe(response => {
        this.postType = response;
      }, error => console.log(error));
    }
  }

  setUpPost() {
    this.postService.getPostContentRef(this.pid).pipe(takeUntil(this.notifier$))
    .subscribe(response => {
      this.postType = response.fileFormat;
      this.postContent$ = this.postService.getPostContent(this.pid, response);
    });

    this.stickerContent$ = this.postService.getStickerContent(this.pid);
    this.postService.getStickerDetails(this.pid).pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.stickerDetails = response;
      this.setUpEngagement();
    });
  }

  setUpProfile() {
    this.usersService.getProfileDetails(this.uid).pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.usernameFetch = false;
      if  (response) {
        this.profileDetails = response;
        this.usernameCounter = 0;
        this.username = response.username;

        let lastUsername: string;
        let timer = setInterval(func => {
          this.stickerSize = this.usernameSpan.nativeElement.offsetHeight.toString() + 'px';
          const currentWidth = this.usernameSpan.nativeElement.offsetWidth;
          if (lastUsername != this.username && currentWidth > this.maxWidth) {
            lastUsername = this.profileDetails.username;
            ++this.usernameCounter;
            this.username = this.profileDetails.username.slice(0, this.profileDetails.username.length - this.usernameCounter)  + '...';
          } else {
            clearInterval(timer);
            this.usernameFetch = true;
          }
        })}
      });
    this.profileStickers$ = this.usersService.getProfileStickers(this.uid);
  }

  setUpActivity() {
    this.activityService.getActivity(this.pid).pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.activity = response[0];
      this.setUpEngagement();
    });;
  }

  getEmptySlots(stickers) {
    return [...Array(5-stickers.length).keys()];
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

  getDetailsButton() {
    let close = "https://i.ibb.co/ZmbVSG4/Post-Detail-Button-3x.png";
    let open = "https://i.ibb.co/p1fcnfh/Post-Detail-Button-open-3x.png";
    return this.showDetails === false ?  close : open;
  }

  getDetailsButtonSize() {
    let width: string;
    let height: string;
    if (!this.showDetails) {
      width = this.detailsButtonSize.toString() + 'px';
      height = 'auto'
    } else {
      height = this.detailsButtonSize.toString() + 'px';
      width = 'auto'
    }
    return {width: width, height: height};
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

  onAddClick(field: string) {
    this.addClick.emit(field);
  }

  postView() {
    if (!this.viewed && !this.createPost && this.isAuthenticated) {
      this.viewed = true;
      this.activityService.addViews(this.pid,this.myUid,this.uid);
    }
  }

  collectSticker() {
    if (this.isAuthenticated) {
      if (!this.collectingSticker && !this.createPost) {
        this.collectingSticker = true;
        this.activityService.getPostCollection(this.pid).pipe(take(1)).subscribe(response => {
          let valid: boolean = false;
          for (let key in response) {
            if (response[key].collectorID === this.myUid) {
              valid = false;
              this.miscellaneousService.setPopUp(new PopUp("You already collected this sticker!",'Go to Collection','Stay Here', ['routing', 'default'],'collection/'+this.myUid));
              break;
            } else {
              valid = true;
            }
          }
          if (valid) {
            if (this.engagementRatio < 1) {
                this.activityService.addCollection(new Collection(this.myUid, this.uid, this.pid, new Date().getTime()));
                this.miscellaneousService.setPopUp(new PopUp("Sticker collected! Go to My Collection and select Edit to use your new Sticker",'Go to Edit','Stay Here', ['routing', 'default'], 'profile/'+this.myUid+'/edit'));
            } else {
              this.miscellaneousService.setPopUp(new PopUp("There are no more stickers left!",'Okay', undefined, ['default', 'default']));
            }
          }
          this.collectingSticker = false;
        });
      }
    } else {
      this.router.navigate(['/auth']);
    }
  }

  getHolderList() {
    this.holderToggle = !this.holderToggle;
    if (this.holderToggle) this.collectionList = this.activityService.getHolderList(this.pid, this.uid);
  }

  videoToggle() {
    try {
      if (this.postType != 'video/mp4') return;
      if (this.playVideo) {
        this.videoPlayer.nativeElement.pause();
      } else {
        this.videoPlayer.nativeElement.pause();
      }
    } catch (error) {
      return;
    }
  }

  stopPropagation(event) {
    event.stopPropagation();
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
