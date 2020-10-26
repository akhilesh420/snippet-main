import { PostDetails} from './../shared/post.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FeedService } from '../feed/feed.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  postsList: Observable<PostDetails[]>;
  uid: string;
  uid$ = new BehaviorSubject<string>(null);

  constructor(private route: ActivatedRoute,
              private feedService: FeedService) {}

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.uid = params['id'];
        this.uid$.next(this.uid);
        this.postsList = this.feedService.getProfilePage(this.uid);
      }
    );
  }
  ngOnDestroy() {
    this.uid$.complete();
  }
}
