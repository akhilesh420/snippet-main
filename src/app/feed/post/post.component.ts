import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Subject, Subscription } from 'rxjs';
import { PostDataService } from './../../shared/postdata.service';
import { ProfileDataService } from './../../shared/profiledata.service';
import { Biography, ProfileDetails, ProfileStickers, Profile  } from './../../shared/profile.model';
import { PostService } from './../../shared/post.service';
import { ProfileService } from '../../shared/profile.service';
import { Post, PostContent, StickerDetails, Posts, StickerContent } from './../../shared/post.model';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ElementRef } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
  export class PostComponent implements OnInit, OnDestroy {

  @Input() post: Post;
  @Input() createPost?: boolean = false;
  @Input() pid?: string;

  @Output() addClick = new EventEmitter();
  @Output() init = new EventEmitter<boolean>();

  profile: Profile = new Profile( new ProfileDetails('',new Biography('','','')),
                                  new ProfileStickers([]));

  addIcon = "assets/icons/add_icon@2x.png"
  placeholderImg = 'assets/default image/blank_image@2x.png';

  imageProp = {'height':'auto', 'width':'auto'};
  stickerProp = {'height':'auto', 'width':'auto'};
  engagementProp = {'width': '0','background': '#D8B869'};

  viewed: boolean = false;
  loadPostContent: boolean = true;
  loadStickerContent: boolean = true;
  loadStickerDetails: boolean = true;
  collectingSticker: boolean = false;
  showDetails = false;
  showComments = false;
  holderToggle = false;
  collected: number = 0;
  views: number = 0;
  uid: string;
  myUid: string;
  isAuthenticated: boolean;
  profileRoute: string;
  emptyProfileSticker: number[] = [0,0,0,0,0];

  subProfileDetails: Subscription;
  subProfileStickers: Subscription;
  subPostContent: Subscription;
  subStickerContent: Subscription;
  subStickerDetails: Subscription;
  userSubs: Subscription;

  profileDetails =  new Subject<ProfileDetails>();
  profileStickers=  new Subject<ProfileStickers>();
  postContent = new Subject<PostContent>();
  stickerContent = new Subject<StickerContent>();
  stickerDetails = new Subject<StickerDetails>();

  constructor(private profileService: ProfileService,
              private profileDataService: ProfileDataService,
              private postService: PostService,
              private postDataService: PostDataService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.restartPost();
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

    this.uid = this.post.postDetails.uid;
    this.setUpProfileDetails();
    this.setUpProfileStickers();

    if (this.createPost) {
      this.loadPostContent = false;
      this.loadStickerContent = false;
    }

    if (!this.createPost) {
      this.setUpStickerDetails();
      this.setUpPostContent();
      this.setUpStickerContent();
     }
  }

  setUpPostContent() {

    this.loadPostContent = true;

    this.subPostContent = this.postContent.subscribe(response => {
      this.post.postContent = response;
      if (response) {
        this.loadPostContent = false;
      }
    },
    errorMessage => {
      console.log(errorMessage);
    });

    let posts: Posts[] = this.postService.getPosts();
    let postInfo = posts.find(data => data.pid === this.pid);
    if (postInfo && postInfo.post.postContent) {
      this.postContent.next(postInfo.post.postContent);
    } else {
      let tempPostContent: PostContent;
      this.postDataService.fetchPostContent(this.pid)
      .pipe(
        map(data => {
          for (let key in data) {
            tempPostContent = new PostContent(data[key].content, data[key].fileFormat)
            this.postService.updatePostContent(this.pid, tempPostContent);
          }
          return data;
        })
      )
      .subscribe((data) => {
        this.postContent.next(tempPostContent);
      },
      errorMessage => {
        console.log(errorMessage);
      })
    }
  }

  setUpStickerDetails() {

    this.loadStickerDetails = true;

    this.subStickerDetails = this.stickerDetails.subscribe(response => {
      this.post.stickerDetails = response;
      this.loadStickerDetails = false;
      this.collected = this.post.stickerDetails.amountReleased;
      this.getEngagement();
      if (this.post.stickerDetails.engagementRatio === 1) {
        this.setUpViews();
      }
    },
    errorMessage => {
      console.log(errorMessage);
    });

    let tempStickerDetails: StickerDetails;
    this.postDataService.fetchStickerDetails(this.pid)
    .pipe(
      map(data => {
        for (let key in data) {
          let amountCollected: number = 0;
          let engagementRatio: number = 0;
          this.postDataService.fetchSCL('pid', this.pid).subscribe(response => {
            amountCollected = Object.keys(response).length;
            engagementRatio = amountCollected/data[key].amountReleased;

            tempStickerDetails = new StickerDetails(amountCollected,
                                                    data[key].amountReleased,
                                                    engagementRatio);

            this.postService.updateStickerDetails(this.pid, tempStickerDetails);
            this.stickerDetails.next(tempStickerDetails);
          }, errorMessage => {
            console.log(errorMessage);
          });
        }
        return data;
      })
    )
    .subscribe((data) => {
    },
    errorMessage => {
      console.log(errorMessage);
    })
  }

  setUpStickerContent() {

    this.loadStickerContent = true;

    this.subStickerContent = this.postService.getStickerContent(this.pid).subscribe(response => {
      if (response) {
        this.post.stickerContent = response;
        this.loadStickerContent = false;
      }
    },
    errorMessage => {
      console.log(errorMessage);
    });
  }

  setUpProfileDetails() {

    this.subProfileDetails = this.profileService.getProfileDetails(this.uid).subscribe(response => {
      if (response) {
        this.profile.profileDetails = response;
        this.profileRoute = '/profile/' + this.uid;
      }
    },
    errorMessage => {
      console.log(errorMessage);
    });

  }

  setUpProfileStickers() {

    this.subProfileStickers = this.profileService.getProfileStickers(this.uid).subscribe(response => {
      if (response) {
        response.stickers.sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime());
        this.profile.profileStickers = response;
        this.emptyProfileSticker = this.emptyProfileSticker.slice(0,5 - response.stickers.length);
      }
    },
    errorMessage => {
      console.log(errorMessage);
    });
  }

  setUpViews() {
    this.postDataService.fetchViews('pid',this.pid).subscribe(response => {
      this.views = Object.keys(response).length;
    }, errorMessage => {
      console.log(errorMessage);
    });
  }

  getEngagement(){
    let percentage: string;
    let engagement = 100*this.post.stickerDetails.engagementRatio;
    let colour: string;
    engagement === 100 ? colour = '#53BD9C': colour = '#D8B869';
    percentage = engagement.toString() + '%';
    this.engagementProp.width = percentage;
    this.engagementProp.background = colour;
  }

  getDetailsButton() {
    let close = "https://i.ibb.co/ZmbVSG4/Post-Detail-Button-3x.png";
    let open = "https://i.ibb.co/p1fcnfh/Post-Detail-Button-open-3x.png"
    return this.showDetails === false ?  close : open;
  }

  onLoad(event: any) {
    let width = event.target.width;
    let height= event.target.height;
    if (width/height > 1) {
      this.imageProp.width = 'auto';
      this.imageProp.height = '100%';
    }
    else if (width/height <= 1 && width/height < 475/580) {
      this.imageProp.width = '100%';
      this.imageProp.height = 'auto';
    } else {
      this.imageProp.width = 'auto';
      this.imageProp.height = '580px';
    }

  }

  onStickerLoad(event: any) {
    let width = event.target.width;
    let height= event.target.height;
    if (width/height < 1) {
      this.stickerProp.width = '100%';
      this.stickerProp.height = 'auto';
    } else {
      this.stickerProp.width = 'auto';
      this.stickerProp.height = '100%';
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

  onAddClick(field: string) {
    this.addClick.emit(field);
  }

  postView() {
    if (!this.viewed && !this.createPost) {
      this.viewed = true;
      this.postDataService.addView(this.uid,this.pid,this.post.postDetails.uid).subscribe(response => {});
    }
  }

  collectSticker() {
    if (this.isAuthenticated) {
      if (!this.loadPostContent && !this.loadStickerContent && !this.collectingSticker) {
        this.collectingSticker = true;
        this.postDataService.fetchSCL('pid', this.pid).subscribe(response => {
          let valid: boolean = false;
          this.collected = Object.keys(response).length;
          for (let key in response) {
            if (response[key].uid === this.myUid) {
              valid = false;
              this.collectingSticker = false;
              alert("You already collected this sticker!");
              break;
            } else {
              valid = true;
            }
          }
          if (valid) {
            this.setUpStickerDetails();
            if (this.post.stickerDetails.amountReleased > this.collected) {
              this.postDataService.addSCL(this.myUid, this.pid).subscribe( response => {
                this.setUpStickerDetails();
                this.collectingSticker = false;
                alert("Sticker collected! Go to My Collection and select Edit to use your new Sticker");
              })
            } else {
              this.collectingSticker = false;
              alert("No more Stickers left!");
            }
          }
        }, errorMessage => {
         console.log(errorMessage);
        });
      }
    } else {
      this.router.navigate(['/auth']);
    }
  }

  ngOnDestroy() {
    if (this.subProfileDetails) {this.subProfileDetails.unsubscribe();}
    if (this.subProfileStickers) {this.subProfileStickers.unsubscribe();}
    if (this.userSubs) {this.userSubs.unsubscribe();}

    if (!this.createPost) {
      if (this.subPostContent) {this.subPostContent.unsubscribe();}
      if (this.subStickerContent) {this.subStickerContent.unsubscribe();}
      if (this.subStickerDetails) {this.subStickerDetails.unsubscribe();}
    }
  }
}
