import { PostService } from './../shared/post.service';
import { PostDetails, Posts } from './../shared/post.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';
import { Subscription, Observable } from 'rxjs';
import { FeedService } from '../feed/feed.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit, OnDestroy {

  postsList: Observable<PostDetails[]>


  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.postsList = this.feedService.getExplorePage();
  }

  ngOnDestroy() {

  }

}
