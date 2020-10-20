import { Biography, Profile } from 'src/app/shared/profile.model';
import { ProfileDetails, ProfileSticker } from './../shared/profile.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import { PostService } from './../shared/post.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Post, PostContent, PostDetails, Posts, StickerContent, StickerDetails } from './../shared/post.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit, OnDestroy {

  postSrc = "assets/default image/blank_image@2x.png";
  stickerSrc = "assets/default image/blank_image@2x.png";

  post: Post;
  posts: Posts;
  pid: string;
  profile: Profile = new Profile(new ProfileDetails('', new Biography('','','')),);
  uid: string;

  postsDetails =  new Subject<Posts>();
  isFetching: boolean = true;
  isFetchingProfile: boolean = true;
  postInit =  new Subject<boolean>();

  subProfileDetails: Subscription;
  subPostDetails: Subscription;

  profileDetails =  new Subject<ProfileDetails>();

  postsList: Posts[] = [];

  constructor(private postService: PostService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    // this.resetPost();
    // this.setUpPostDetails();
    // this.pid = this.route.snapshot.params['pid'];
    // this.postsList = [];

    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.resetPost();
    //     this.postsList = [];
    //     this.pid = params['pid']
    //     this.setUpPostDetails();
    //   }, errorMessage => {
    //     console.log(errorMessage);
    //   }
    // )
  }

  // setUpPostDetails() {

  //   this.isFetching = true;

  //   this.subPostDetails = this.postService.getPostDetails(this.pid).subscribe(response => {
  //     if (response) {
  //       this.uid = response.uid;
  //       this.postsList = [new Posts(this.pid, new Post(response))];
  //       this.setUpProfileDetails();
  //       this.isFetching = false;
  //     }
  //   },
  //   errorMessage => {
  //     console.log(errorMessage);
  //   });
  // }

  // setUpProfileDetails() {

  //   this.isFetchingProfile = true;

  //   this.subProfileDetails = this.profileService.getProfileDetails(this.uid).subscribe(response => {
  //     if (response) {
  //       this.profile.profileDetails = response;
  //       this.isFetchingProfile = false;
  //     }
  //   },
  //   errorMessage => {
  //     console.log(errorMessage);
  //   });

  // }

  // resetPost() {
  //   this.post = new Post(
  //     new PostDetails('',"","",new Date,0),
  //     new PostContent(this.postSrc),
  //     new StickerContent(this.stickerSrc, '0'),
  //     new StickerDetails(0,0,0),
  //     [],
  //     []);
  // }

  ngOnDestroy() {
    // this.subPostDetails.unsubscribe();
    // this.subPostDetails.unsubscribe();
    // this.postsList = [];
  }

}
