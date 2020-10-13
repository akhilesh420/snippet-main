import { map } from 'rxjs/operators';
import { PostDataService } from './../shared/postdata.service';
import { PostDetails, Posts } from './../shared/post.model';
import { Subject, Subscription } from 'rxjs';
import { ProfileService } from './../shared/profile.service';
import { ProfileDataService } from './../shared/profiledata.service';
import { Biography, Profile, ProfileStickers } from 'src/app/shared/profile.model';
import { ProfileDetails } from './../shared/profile.model';
import { PostService } from './../shared/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile = new Profile(new ProfileDetails('', new Biography('','','')), new ProfileStickers([]));
  postsList: Posts[] = [];
  tempList: Posts[] = [];
  isFetchingProfile = true;
  isFetchingPosts = true;
  uid: string;

  subProfileDetails: Subscription;
  subPIDlist: Subscription;
  subPostsList: Subscription;
  subProfilePosts: Subscription;

  profilePosts =  new Subject<Posts[]>();


  constructor(private route: ActivatedRoute,
              private profileService: ProfileService,
              private profileDataService: ProfileDataService,
              private postDataService: PostDataService,
              private postService: PostService) {}

  ngOnInit(): void {
    this.isFetchingProfile = true;
    this.isFetchingPosts = true;

    this.subProfilePosts = this.profilePosts.pipe(map(data => {
      data.sort((a, b) => new Date(b.post.postDetails.dateCreated).getTime() - new Date(a.post.postDetails.dateCreated).getTime());
      return data;
    })).subscribe(data => {
      this.postsList = data;
    }, errorMessage => {console.log(errorMessage)});

    this.route.params
    .subscribe(
      (params: Params) => {
        this.tempList = [];
        this.uid = params['id'];
        this.setUpProfileDetails();
        this.getPostsPid();
      }
    );
  }

  setUpProfileDetails() {
    this.isFetchingProfile = true;

    this.subProfileDetails = this.profileService.getProfileDetails(this.uid).subscribe(response => {
      if (response) {
        this.profile.profileDetails = response;
        this.isFetchingProfile = false;
      }
    },
    errorMessage => {
      console.log(errorMessage);
    });

  }

  getPostsPid() {

    this.isFetchingPosts = true;

    this.subPIDlist = this.profileService.getUserProfilePosts(this.uid)
    .subscribe( response => {
      this.tempList = [];
      if (response) {
        response.forEach(pid => {
          this.makePostsList(pid);
        })
      this.isFetchingPosts = false;
      }
    }, errorMessage => {
      console.log(errorMessage);
    })
  }

  makePostsList(pid: string) {

    this.subPostsList = this.postService.getPostDetails(pid).subscribe(response => {
      this.tempList.push(new Posts(pid, new Post(response)))
      this.profilePosts.next(this.tempList);
    })
  }

  ngOnDestroy() {
    this.subProfileDetails.unsubscribe();
    this.subProfilePosts.unsubscribe();
    this.subPIDlist.unsubscribe();
    this.subPostsList.unsubscribe();
  }

}
