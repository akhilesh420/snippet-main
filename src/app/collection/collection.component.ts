import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { PostDetails, Posts } from './../shared/post.model';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from './../auth/auth.service';
import { ProfileDetails } from './../shared/profile.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FeedService } from '../feed/feed.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit, OnDestroy {

  notifier$ = new Subject();

  profileDetails: BehaviorSubject<ProfileDetails>;
  postsList: Observable<PostDetails[]>;
  uid: string;
  uid$ = new BehaviorSubject<string>(null);
  myUid: string;
  isAuthenticated: boolean;

  userSubs: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private feedService: FeedService) {}

  ngOnInit(): void {

    this.userSubs = this.authService.user.pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.isAuthenticated = !!response;
      if (this.isAuthenticated) {
        this.myUid = response.id;
      }
    });

    this.uid = this.route.snapshot.params['uid'];
    this.uid$.next(this.uid);
    
    this.route.params
    .subscribe(
      (params: Params) => {
        this.uid = params['id'];
        if (this.uid === this.myUid) {
          this.uid$.next(this.uid);
          this.setUp();
        } else {
          this.router.navigate(['/explore']);
        }
      }
    );
  }


  setUp() {
    this.postsList = this.feedService.getCollectionPage(this.uid,this.notifier$);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
    this.uid$.complete();
  }

}
