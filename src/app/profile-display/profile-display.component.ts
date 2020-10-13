import { DisplayPicture, ProfileSticker } from './../shared/profile.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { PostDataService } from './../shared/postdata.service';
import { PostService } from './../shared/post.service';
import { map } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { ProfileDataService } from './../shared/profiledata.service';
import { ProfileService } from './../shared/profile.service';
import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { Profile } from '../shared/profile.model';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css']
})
export class ProfileDisplayComponent implements OnInit, OnDestroy {

  @Input() profile: Profile;
  @Input() uid: string;

  collected: number = 0;
  views: number = 0;

  viewsDisplay: string = '0';
  collectedDisplay: string = '0';
  myUid: string;
  placeholderImg = "assets/default image/blank_image@2x.png";

  fetchingDP: boolean = true;
  fetchingPS: boolean = true;
  isAuthenticated: boolean;

  subProfileStickers: Subscription;
  subDisplayPicture: Subscription;
  subTotalCollected: Subscription;
  userSubs: Subscription;

  profileStickers = new Subject<ProfileSticker[]>();
  displayPicture = new Subject<any>();
  totalViews = new Subject<number>();
  totalCollected = new Subject<number>();

  imageProp = {'height':'100%', 'width':'auto'};
  emptyProfileSticker: number[] = [0,0,0,0,0];

  constructor( private profileService: ProfileService,
               private profileDataService: ProfileDataService,
               private postService: PostService,
               private postDataService: PostDataService,
               private authService: AuthService,
               private router: Router,
               private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.userSubs = this.authService.user.subscribe(response => {
      this.isAuthenticated = !!response;
      if (this.isAuthenticated) {
        this.myUid = response.id;
      }
    }, errorMessage => {
      console.log(errorMessage);
    });

    this.setUpViews();
    this.setUpCollected();
    this.setUpProfileStickers();
    this.setUpDisplayPicture();
  }

  ngOnChanges() {
    this.setUpViews();
    this.setUpCollected();
    this.setUpProfileStickers();
    this.setUpDisplayPicture();
  }

  setUpProfileStickers() {
    this.fetchingPS = true;

    this.subProfileStickers = this.profileService.getProfileStickers(this.uid).subscribe(response => {
      if (response) {
        if (response.stickers === []) {
          this.subProfileStickers.unsubscribe();
          this.setUpProfileStickers();
        } else {
          response.stickers.sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime());
          this.profile.profileStickers = response;
          this.emptyProfileSticker = this.emptyProfileSticker.slice(0,5 - response.stickers.length);
          this.fetchingPS = false;
        }
      }
    },
    errorMessage => {
      console.log(errorMessage);
    });
  }

  setUpDisplayPicture() {

    this.fetchingDP = true;

    this.subDisplayPicture = this.profileService.getDisplayPicture(this.uid).subscribe(response => {
      if (response) {
        this.profile.displayPicture = response;
        this.fetchingDP = true;
      } else {
        this.profile.displayPicture = new DisplayPicture('69', new Date(), 'jpeg');
      }
    },
    errorMessage => {
      console.log(errorMessage);
    });
  }

  setUpViews() {
    this.postDataService.fetchViews('cuid', this.uid).subscribe(response => {
      this.views = Object.keys(response).length;
      this.viewsDisplay = this.convertToShort(this.views);
   }, errorMessage => {
     console.log(errorMessage);
   });
  }

  setUpCollected() {

    this.subTotalCollected = this.totalCollected.subscribe(response => {
      this.collected = response;
      this.collectedDisplay= this.convertToShort(this.collected);
    }, errorMessage => {
      console.log(errorMessage);
    })

    let dataArray: string[] = [];
    this.postDataService.fetchUserPostDetails(this.uid).pipe( map( data => {
      for (let key in data) {
        let posts = this.postService.getPosts();
        let postInfo = posts.find(data => data.pid === key);
        if (postInfo) {
          this.postService.updatePostDetails(key, data[key]);
        }
        dataArray.push(key);
      }
      dataArray.forEach(pid => {
        this.postDataService.fetchSCL('pid',pid).subscribe(response => {
           this.totalCollected.next(Object.keys(response).length);
        }, errorMessage => {
          console.log(errorMessage);
        });
      });
      return this.collected;
    }))
    .subscribe( response => {}, errorMessage => {
      console.log(errorMessage);
    })
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

  editProfile() {
    if (this.uid === this.myUid) {
      this.router.navigate(['profile/'+this.myUid+'/edit']);
    }
  }

  onLoad(event: any) {
    let width = event.target.width;
    let height= event.target.height;
    if (width/height < 1) {
      this.imageProp.width = '100%';
      this.imageProp.height = 'auto';
    } else {
      this.imageProp.width = 'auto';
      this.imageProp.height = '100%';
    }
  }

  ngOnDestroy() {
    if (this.subTotalCollected) {this.subTotalCollected.unsubscribe();}
    if (this.subDisplayPicture) {this.subDisplayPicture.unsubscribe();}
    if (this.subProfileStickers) {this.subProfileStickers.unsubscribe();}
    if (this.userSubs) {this.userSubs.unsubscribe();}
  }
}
