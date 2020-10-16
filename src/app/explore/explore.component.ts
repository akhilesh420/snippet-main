import { PostService } from './../shared/post.service';
import { PostDetails, Posts } from './../shared/post.model';
import { PostDataService } from './../shared/postdata.service';
import { DataService } from './../shared/data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit, OnDestroy {

  postsList: Observable<PostDetails[]>;
  isFetching = true;


  constructor(private dataService: DataService,
              private postDataService: PostDataService,
              private postService: PostService) { }

  ngOnInit(): void {
    // get posts from postsService as observable
  }

  ngOnDestroy() {

  }

}
