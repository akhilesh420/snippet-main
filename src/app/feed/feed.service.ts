import { map, takeUntil } from 'rxjs/operators';
import { PostDetails } from 'src/app/shared/post.model';
import { Injectable } from '@angular/core';
import { ActivityService } from '../shared/activity.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { forkJoin, Observable, Subject, BehaviorSubject } from 'rxjs';
import { Collection } from '../shared/activity.model';
import { PostService } from '../shared/post.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  excludePID: string[] = ['mV3PPI52zGtRH7T6j545'];

  constructor(private activityService: ActivityService,
              private postService: PostService,
              private afs: AngularFirestore) {

   }

  // get explore page
  getExplorePage() {
    return this.afs.collection<PostDetails>('post details', ref => ref.orderBy('dateCreated', 'desc'))
            .valueChanges({idField: 'pid'}).pipe(map(postsList => {
              return postsList.filter(post => !this.excludePID.includes(post.pid));
            }));;

  }

  // get profile page
  getProfilePage(uid: string) {
    return this.afs.collection<PostDetails>('post details', ref => ref.where('uid','==',uid).orderBy('dateCreated', 'desc')).valueChanges({idField: 'pid'});
  }

  // generate collection page by uid
  getCollectionPage(uid: string) {
    const collectionList$ = new Subject<PostDetails[]>();

    this.activityService.getUserCollection(uid) //get details of user collection
    .subscribe((response:Collection[]) => {
      let postDetailsLists: PostDetails[] = [];
      response.forEach(collection => {
        this.postService.getPostDetails(collection.pid).pipe(map(changes => { //get the post detail for each pid in collection
          return { pid: collection.pid, ...changes};
        })).subscribe(res => {
          postDetailsLists.push(res);
          collectionList$.next(postDetailsLists);
        })
      });
    });

    return collectionList$.pipe(map(postsList => {
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
