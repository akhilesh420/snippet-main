import { Post } from 'src/app/shared/post.model';
import { Biography, Profile, ProfileSticker } from 'src/app/shared/profile.model';
import { Subject } from 'rxjs';
import { PostDataService } from './../shared/postdata.service';
import { ProfileDataService } from './../shared/profiledata.service';
import { ProfileService } from './../shared/profile.service';
import { PostDetails, Posts } from './../shared/post.model';
import { map } from 'rxjs/operators';
import { DataService } from './../shared/data.service';
import { PostService } from './../shared/post.service';
import { AuthService } from './../auth/auth.service';
import { ProfileDetails } from './../shared/profile.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit, OnDestroy {

  profile: Profile = new Profile(new ProfileDetails('', new Biography('','','')), []);
  postsList: Posts[] = [];
  isFetchingProfile = true;
  isFetchingPosts = true;
  uid: string;
  myUid: string;
  isAuthenticated: boolean;

  subProfileDetails: Subscription;
  userSubs: Subscription;
  subPostsList: Subscription;

  profileDetails =  new Subject<ProfileDetails>();
  postsListObs = new Subject<Posts[]>();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private profileService: ProfileService,
              private profileDataService: ProfileDataService,
              private postDataService: PostDataService,
              private postService: PostService) {}

  ngOnInit(): void {
    this.isFetchingProfile = true;
    this.isFetchingPosts = true;

    this.userSubs = this.authService.user.subscribe(response => {
      this.isAuthenticated = !!response;
      if (this.isAuthenticated) {
        this.myUid = response.id;
        this.route.params
        .subscribe(
          (params: Params) => {
            this.uid = params['id'];
            this.setUpProfileDetails();
            if (this.uid === this.myUid) {
              this.getPostsList();
            } else {
              this.router.navigate(['/explore']);
            }
          }
        );
      }
    });
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

  getPostsList() {

    this.isFetchingPosts = true;


    this.subPostsList = this.postsListObs.subscribe(response => {
      response.sort((a, b) => new Date(b.post.postDetails.dateCreated).getTime() - new Date(a.post.postDetails.dateCreated).getTime());
      this.postsList = response;
      this.isFetchingPosts = false;
    })

    let dataArray: Posts[] = [];
    this.postDataService.fetchSCL('uid',this.uid).pipe( map( stickerCollector => {
      for (let key in stickerCollector) {
        let pid = stickerCollector[key].pid
        this.postDataService.fetchPostDetails(pid)
          .pipe(map(data => {
              let tempPostDetails: PostDetails;
              tempPostDetails = new PostDetails(data.uid,
                                                data.title,
                                                data.description,
                                                data.dateCreated,
                                                data.price);
              let posts = this.postService.getPosts();
              let postInfo = posts.find(data => data.pid === pid);
              if (postInfo) {
                this.postService.updatePostDetails(key, pid);
              }
            return tempPostDetails;
          }))
          .subscribe( response => {
            if (response.uid != this.uid) {
              dataArray.push(new Posts(pid, new Post(response)));
              this.postsListObs.next(dataArray);
            }
          }, errorMessage => {
            console.log(errorMessage);
          })
      }
      return dataArray;
    })).subscribe(response => {});
  }

  ngOnDestroy() {
    if (this.subPostsList) {this.subPostsList.unsubscribe();}
    if (this.subPostsList) {this.subProfileDetails.unsubscribe();}
    if (this.subPostsList) {this.userSubs.unsubscribe();}
  }

}
