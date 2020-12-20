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
  stickerContent$: BehaviorSubject<any>;

  postType: string = 'image/jpeg';
  notifier$ = new Subject();
  collectionList: Observable<Collection[]>;

  viewed: boolean = false;
  collectingSticker: boolean = false;
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

  onBoarding: boolean = false;
  onBoardingStep: number;

  postCollection: Collection[] = [];
  collectionLoaded = false;

  viewTimer: any;
  viewTime: number = 1500; //how long for a viewed post in milliseconds

  playFailSafe: boolean = false;
  allowToggle: boolean = true;

  constructor(private postService: PostService,
              private authService: AuthService,
              private activityService: ActivityService,
              private router: Router,
              private miscellaneousService: MiscellaneousService) { }

  ngOnInit(): void {
    this.restartPost();

    this.miscellaneousService.onBoarding$.pipe(takeUntil(this.notifier$)).subscribe(val => {
      this.onBoarding = val;
      if (val) {
        this.miscellaneousService.onBoardingStep$.pipe(takeUntil(this.notifier$)).subscribe(step => {
          this.onBoardingStep = step;
        });
      }
    });

    // post collection list
    this.activityService.getPostCollection(this.pid).subscribe(response => {
      this.postCollection = response;
      this.collectionLoaded = true;
    });

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

    this.stickerContent$ = this.postService.getStickerContent(this.pid);
  }

  postView() {
    if (this.viewed || this.uid === this.myUid) return;
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

  collectSticker() {
    if (this.isAuthenticated) {
      if (!this.collectingSticker && this.collectionLoaded) {
        if (this.onBoarding && this.onBoardingStep != 2) {
          return;
        }
        this.collectingSticker = true;
        let popUpObj: PopUp;
        let valid: boolean = false;

        for (let key in this.postCollection) {
          if (this.postCollection[key].collectorID === this.myUid) {
            valid = false;
            popUpObj = new PopUp("You already collected this sticker!",'Go to Collection','Stay Here', ['routing', 'default'],'collection/'+this.myUid);
            break;
          } else {
            valid = true;
          }
        }
        if (valid) {
          if (this.engagementRatio < 1) {
              this.activityService.addCollection(new Collection(this.myUid, this.uid, this.pid, new Date().getTime()));

              if (this.onBoarding && this.onBoardingStep === 2) {
                //For onBoarding
                this.miscellaneousService.onBoarding$.pipe(takeUntil(this.notifier$)).subscribe(val => {
                  if (val) {
                    this.miscellaneousService.onBoardingStickerCollection$.next(true);
                  }
                });
              }
              popUpObj = new PopUp("Sticker collected! Go to My Collection and select Edit to use your new Sticker",'Go to Edit','Stay Here', ['routing', 'default'], 'profile/'+this.myUid+'/edit');
          } else {
            popUpObj = new PopUp("There are no more stickers left!",'Okay', undefined, ['default', 'default']);
          }
        }

        if (!(this.onBoarding)) {
          this.miscellaneousService.setPopUp(popUpObj);
        } else {
          //For onBoarding
          this.miscellaneousService.onBoarding$.pipe(takeUntil(this.notifier$)).subscribe(val => {
            if (val) {
              this.miscellaneousService.onBoardingStickerCollection$.next(true);
            }
          });
        }

        this.collectingSticker = false;
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

  stopPropagation(event) {
    event.stopPropagation();
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
