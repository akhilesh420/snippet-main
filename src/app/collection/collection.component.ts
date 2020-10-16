import { Collection } from './../shared/activity.service';
import { UsersService } from './../shared/users.service';
import { Post } from 'src/app/shared/post.model';
import { Biography, Profile, ProfileSticker } from 'src/app/shared/profile.model';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { PostDataService } from './../shared/postdata.service';
import { PostDetails, Posts } from './../shared/post.model';
import { map, takeUntil } from 'rxjs/operators';
import { PostService } from './../shared/post.service';
import { AuthService } from './../auth/auth.service';
import { ProfileDetails } from './../shared/profile.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivityService } from '../shared/activity.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit, OnDestroy {

  notifier = new Subject();

  profileDetails: BehaviorSubject<ProfileDetails>;
  collection: Observable<PostDetails[]>;
  uid: string;
  myUid: string;
  isAuthenticated: boolean;

  userSubs: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private usersService: UsersService,
              private activityService: ActivityService) {}

  ngOnInit(): void {

    this.userSubs = this.authService.user.pipe(takeUntil(this.notifier)).subscribe(response => {
      this.isAuthenticated = !!response;
      if (this.isAuthenticated) {
        this.myUid = response.id;
        this.route.params
        .subscribe(
          (params: Params) => {
            this.uid = params['id'];
            if (this.uid === this.myUid) {
              this.setUp();
            } else {
              this.router.navigate(['/explore']);
            }
          }
        );
      }
    });
  }


  setUp() { //Can be moved to a service
    this.profileDetails = this.usersService.getProfileDetails(this.uid);
    this.activityService.getCollection(this.uid).pipe(takeUntil(this.notifier)).subscribe(response => {
      let tempCollection: {pid: string, date: Date}[];
      let tempPosts: PostDetails[];
      response.forEach(collection => {
        tempCollection.push({pid: collection.pid, date: collection.timeStamp});
      });
      tempCollection.sort((b,a) => new Date(b.date).getTime() - new Date(a.date).getTime());
      tempCollection.forEach(post => {
        //get post from post service and push to tempPosts
      })
      // emit collection with tempPosts
    });
  }

  ngOnDestroy() {
    this.notifier.next();
    this.notifier.complete();
  }

}
