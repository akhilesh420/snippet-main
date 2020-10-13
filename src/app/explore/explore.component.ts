import { PostService } from './../shared/post.service';
import { PostDetails, Posts } from './../shared/post.model';
import { PostDataService } from './../shared/postdata.service';
import { DataService } from './../shared/data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit, OnDestroy {

  private subsPost: Subscription;

  postsList: Posts[] = [];
  isFetching = true;


  constructor(private dataService: DataService,
              private postDataService: PostDataService,
              private postService: PostService) { }

  ngOnInit(): void {
    // this.isFetching = true;
    // this.postDataService.getPostDetails().subscribe(response => {
    //   for (let key in response) {
    //     let tempPostDetails: PostDetails = new PostDetails( response[key].uid,
    //                                                         response[key].title,
    //                                                         response[key].description,
    //                                                         response[key].dateCreated,
    //                                                         response[key].price);
    //     let posts: Posts[] = this.postService.getPosts();
    //     let postInfo = posts.find(data => data.pid === key);
    //     if (!postInfo) {
    //       this.postService.updatePostDetails(key, tempPostDetails);
    //     }
    //     this.postsList.push(new Posts(key, new Post(tempPostDetails)))
    //   }
    //   this.postsList = this.postsList.reverse();
    //   this.isFetching = false;
    // }, errorMessage => {
    //   console.log(errorMessage);
    // }
    // )
  }

  ngOnDestroy() {

  }

}
