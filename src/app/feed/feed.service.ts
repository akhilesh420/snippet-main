import { environment } from './../../environments/environment';
import { map, take } from 'rxjs/operators';
import { PostDetails } from 'src/app/shared/post.model';
import { Injectable } from '@angular/core';
import { ActivityService } from '../shared/activity.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { PostService } from '../shared/post.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  excludePID: string[] = [environment.onBoardingPid];
  $explorePageList = new BehaviorSubject<(PostDetails)[]>(null);
  $collectionPageList = new BehaviorSubject<(PostDetails)[]>(null);
  $profilePageList = new BehaviorSubject<(PostDetails)[]>(null);

  constructor(private activityService: ActivityService,
              private postService: PostService,
              private afs: AngularFirestore) {

   }

  // get explore page
  getExplorePage() {
    if (!this.$explorePageList.value) {
      this.afs.collection<PostDetails>('post details', ref => ref.orderBy('dateCreated', 'desc'))
            .valueChanges({idField: 'pid'}).pipe(take(1), map(postsList => {
              return postsList.filter(post => !this.excludePID.includes(post.pid));
            })).subscribe(response => this.$explorePageList.next(response));
    }
    return this.$explorePageList;
  }

  // get profile page
  getProfilePage(uid: string) {
    if (!this.$profilePageList.value) {
      this.afs.collection<PostDetails>('post details', ref => ref.where('uid','==',uid)
      .orderBy('dateCreated', 'desc')).valueChanges({idField: 'pid'})
      .subscribe(response => this.$profilePageList.next(response));
    }
    return this.$profilePageList;
  }

  // generate collection page by uid
  getCollectionPage(uid: string) {
    if (!this.$collectionPageList.value) {
      this.activityService.getUserCollection(uid) //get details of user collection
      .subscribe(response => {
        let postDetailsLists: PostDetails[] = [];
        response.forEach(collection => {
          this.postService.getPostDetails(collection.pid).pipe(map(changes => { //get the post detail for each pid in collection
            return {pid: collection.pid, ...changes};
          })).subscribe(res => {
            postDetailsLists.push(res);
            this.$collectionPageList.next(postDetailsLists);
          })
        });
      });
    }

    return this.$collectionPageList.pipe(map(postsList => {
      if (!postsList) return postsList;
      postsList = postsList.filter(post => { //Filter out users own posts
        return uid != post.uid;
      })
      return postsList;
    }));
  }

  getPostPage(pid: string) {
    return this.postService.getPostDetails(pid).pipe(map(changes => { //get the post detail for pid
      return [{ pid: pid, ...changes}];
    }));
  }
}
