import { PostDataService } from './postdata.service';
import { PostService } from './post.service';
import { ProfileDataService } from './profiledata.service';
import { ProfileService } from './profile.service';
import { Injectable } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Post, PostDetails } from './post.model';
import { Profile, Profiles, ProfileDetails, ProfileStickers } from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private profileService: ProfileService,
              private profileDataService: ProfileDataService,
              private postService: PostService,
              private postDataService: PostDataService) {}

  collectionFetch(uid: string) {
  }

  profilePostsFetch(uid: string) {
  }

  getTotalCollect(uid: string) {

  }

  postCreate(post: Post, uid: string) {
    let creating = new Subject<boolean>();
    let pid: string;
    let scid: string;
    this.postDataService.addPostDetails(post.postDetails).subscribe( response => {
      pid = response['name'];
      this.postDataService.addPostContent(post.postContent,pid).subscribe( response => {
        this.postDataService.addStickerContent(post.stickerContent.sticker,pid).subscribe(response => {
          scid = response['name'];
          this.postDataService.addStickerDetails(post.stickerDetails, pid, uid, scid).subscribe( response => {
              this.postDataService.addSCL(uid, pid).subscribe( response => {
                this.postDataService.addEfficiency(scid, pid).subscribe(response => {
                  creating.next(true);
                },
                errorMessage => {
                  creating.next(false);
                  console.log(errorMessage);
                })
            },
            errorMessage => {
              creating.next(false);
              console.log(errorMessage);
            })
          },
          errorMessage => {
            creating.next(false);
            console.log(errorMessage);
          })
        },
        errorMessage => {
          creating.next(false);
          console.log(errorMessage);
        });
      },
      errorMessage => {
        creating.next(false);
        console.log(errorMessage);
      });
    },
    errorMessage => {
      creating.next(false);
      console.log(errorMessage);
    });
    return creating;
  }
}
