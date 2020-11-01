import { map, takeUntil } from 'rxjs/operators';
import { PostDetails } from 'src/app/shared/post.model';
import { Injectable } from '@angular/core';
import { ActivityService } from '../shared/activity.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { forkJoin, Observable, Subject } from 'rxjs';
import { Collection } from '../shared/activity.model';
import { PostService } from '../shared/post.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private activityService: ActivityService,
              private postService: PostService,
              private afs: AngularFirestore) {

   }

  // get explore page
  getExplorePage() {
    return this.afs.collection<PostDetails>('post details', ref => ref.orderBy('dateCreated', 'desc')).valueChanges({idField: 'pid'});
  }

  // get profile page
  getProfilePage(uid: string) {
    return this.afs.collection<PostDetails>('post details', ref => ref.where('uid','==',uid).orderBy('dateCreated', 'desc')).valueChanges({idField: 'pid'});
  }

  // generate collection page by uid
  getCollectionPage(uid: string, notifier$: Observable<any>) {
    let collectionList = new Subject<PostDetails[]>() ;
    let collectionDetails: Collection[] = [];

    this.activityService.getUserCollection(uid).pipe(takeUntil(notifier$)) //get details of user collection
    .subscribe((response:Collection[]) => {
      let postDetailsLists: PostDetails[] = [];
      collectionDetails = response;
      if (response.length === 0) {
        collectionList.next(postDetailsLists);
      }
      response.forEach(collection => {
        this.postService.getPostDetails(collection.pid).pipe(map(changes => { //get the post detail for each pid in collection
          return { pid: collection.pid, ...changes};
        })).subscribe(res => {
          postDetailsLists.push(res);
          collectionList.next(postDetailsLists);
          })
      });
    });
    
    return collectionList.pipe(map(postsList => { 
      console.log(postsList);//log
      postsList = postsList.filter(post => { //Filter out users own posts
        return uid != post.uid;
      })
      return postsList;
    }));
  }
}
