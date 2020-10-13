import { PostDataService } from './postdata.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { Holder, Post, PostContent, PostDetails, StickerDetails, Posts, StickerContent } from './post.model';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private allPosts: Posts[] = [];
  private stickers: {pid: string, obs: BehaviorSubject<StickerContent>}[] = [];
  private postDetailsList: {pid: string, obs: BehaviorSubject<PostDetails>}[] = [];

  constructor(private postDataService: PostDataService) { }

  getPosts() {
    return this.allPosts.slice();
  }

  updatePostDetails(pid: string, postDetails: PostDetails) {
    let index = this.postDetailsList.findIndex(data => data.pid === pid);
    if (index === -1) {
      this.postDetailsList.push({pid: pid, obs: new BehaviorSubject<PostDetails>(postDetails)});
    } else {
      this.postDetailsList[index].obs.next(postDetails);
    }
  }

  updatePostContent(pid: string, postContent: PostContent) {
    let index = this.allPosts.findIndex(data => data.pid === pid);
    if (index != -1) {
      this.allPosts[index].post.postContent = postContent;
    }
  }

  updateStickerContent(pid: string, stickerContent: StickerContent) {
    let index = this.allPosts.findIndex(data => data.pid === pid);
    if (index != -1) {
      this.allPosts[index].post.stickerContent = stickerContent;
    }
  }

  updateStickerDetails(pid: string, stickerDetails: StickerDetails) {
    let index = this.allPosts.findIndex(data => data.pid === pid);
    if (index != -1) {
      this.allPosts[index].post.stickerDetails = stickerDetails;
    }
  }

  getStickerContent(pid: string) {
    let index = this.stickers.findIndex(sticker => {
      return sticker.pid === pid;
    })
    if (index === -1) {
      this.stickers.push({pid: pid, obs: new BehaviorSubject<StickerContent>(null)});
      let secIndex = this.stickers.length - 1;
      this.postDataService.fetchStickerContent(pid).subscribe(data=> {
        for (let key in data) {
          this.stickers[secIndex].obs.next(new StickerContent(data[key].data, key));
        }
      })
      return this.stickers[secIndex].obs;
    } else {
      return this.stickers[index].obs;
    }
  }

  getPostDetails(pid: string) {
    let index = this.postDetailsList.findIndex(postDetail => {
      return postDetail.pid === pid;
    })
    if (index === -1) {
      this.postDetailsList.push({pid: pid, obs: new BehaviorSubject<PostDetails>(null)});
      let secIndex = this.postDetailsList.length - 1;
      this.postDataService.fetchPostDetails(pid).subscribe(data=> {
        for (let key in data) {
          this.postDetailsList[secIndex].obs.next(new PostDetails(data.uid,
                                                                  data.title,
                                                                  data.description,
                                                                  data.dateCreated,
                                                                  data.price));
        }
      })
      return this.postDetailsList[secIndex].obs;
    } else {
      return this.postDetailsList[index].obs;
    }
  }
}
