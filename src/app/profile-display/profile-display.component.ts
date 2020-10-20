import { UsersService } from './../shared/users.service';
import { DisplayPicture, ProfileSticker, ProfileDetails } from './../shared/profile.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { PostService } from './../shared/post.service';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css']
})
export class ProfileDisplayComponent implements OnInit, OnDestroy {

  // @Input() uid: string;

  // profileDetails: BehaviorSubject<ProfileDetails>;
  // profileStickers: BehaviorSubject<ProfileSticker[]>;
  // displayPicture: BehaviorSubject<any>;

  // collected: number = 0;
  // views: number = 0;

  // viewsDisplay: string = '0';
  // collectedDisplay: string = '0';
  // myUid: string;
  // placeholderImg = "assets/default image/blank_image@2x.png";

  // fetchingDP: boolean = true;
  // fetchingPS: boolean = true;
  // isAuthenticated: boolean;

  // userSubs: Subscription;


  // imageProp = {'height':'100%', 'width':'auto'};
  // emptyProfileSticker: number[] = [0,0,0,0,0];

  // constructor( private postService: PostService,
  //              private postDataService: PostDataService,
  //              private authService: AuthService,
  //              private usersService: UsersService,
  //              private router: Router,
  //              private route: ActivatedRoute) { }

  ngOnInit(): void {

  //   this.userSubs = this.authService.user.subscribe(response => {
  //     this.isAuthenticated = !!response;
  //     if (this.isAuthenticated) {
  //       this.myUid = response.id;
  //     }
  //   }, errorMessage => {
  //     console.log(errorMessage);
  //   });

  //   this.setUpViews();
  //   this.setUpCollected();
  //   this.setUpProfileDetails();
  //   this.setUpProfileStickers();
  //   this.setUpDisplayPicture();
  }

  // ngOnChanges() {
  //   this.setUpViews();
  //   this.setUpCollected();
  //   this.setUpProfileStickers();
  //   this.setUpDisplayPicture();
  // }

  // setUpProfileDetails() {
  //   this.profileDetails = this.usersService.getProfileDetails(this.uid);
  // }

  // setUpProfileStickers() {
  //   this.profileStickers = this.usersService.getProfileStickers(this.uid);
  // }

  // setUpDisplayPicture() {
  //   this.displayPicture = this.usersService.getDisplayPicture(this.uid);
  // }

  // setUpViews() {
  //   this.postDataService.fetchViews('cuid', this.uid).subscribe(response => {
  //     this.views = Object.keys(response).length;
  //     this.viewsDisplay = this.convertToShort(this.views);
  //  }, errorMessage => {
  //    console.log(errorMessage);
  //  });
  // }

  // setUpCollected() {

  // }

  // convertToShort(num: number): string {
  //   let short = 0;
  //   if (num/1000000 <= 1) {
  //     if (num/1000 <= 1) {
  //         return num.toString();
  //     } else {
  //       short = Math.round((num/1000) * 10) / 10;
  //       return short.toString() + 'K';
  //     }
  //   } else {
  //     short = Math.round((num/1000000) * 100) / 100;
  //     return short.toString() + 'M';
  //     }
  // }

  // editProfile() {
  //   if (this.uid === this.myUid) {
  //     this.router.navigate(['profile/'+this.myUid+'/edit']);
  //   }
  // }

  // onLoad(event: any) {
  //   let width = event.target.width;
  //   let height= event.target.height;
  //   if (width/height < 1) {
  //     this.imageProp.width = '100%';
  //     this.imageProp.height = 'auto';
  //   } else {
  //     this.imageProp.width = 'auto';
  //     this.imageProp.height = '100%';
  //   }
  // }

  ngOnDestroy() {
    // if (this.userSubs) {this.userSubs.unsubscribe();}
  }
}
