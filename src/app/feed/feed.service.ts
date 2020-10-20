import { takeUntil } from 'rxjs/operators';
import { PostDetails } from 'src/app/shared/post.model';
import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivityService } from '../shared/activity.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private activityService: ActivityService,
              private afs: AngularFirestore) {

   }

   // get explore page
  getExplorePage() {
    return this.afs.collection<PostDetails>('post details').valueChanges();
    // get posts from postsService as observable
  }

  // generate collection page by uid
  getCollectionPage(uid: string, notifier: any) {
  //   this.activityService.getCollection(uid).pipe(takeUntil(notifier)).subscribe(response => {
  //     let tempCollection: {pid: string, date: Date}[];
  //     let tempPosts: PostDetails[];
  //     response.forEach(collection => {
  //       tempCollection.push({pid: collection.pid, date: collection.timeStamp});
  //     });
  //     tempCollection.sort((b,a) => new Date(b.date).getTime() - new Date(a.date).getTime());
  //     tempCollection.forEach(post => {
  //       //get post from post service and push to tempPosts
  //     })
  //     // emit collection with tempPosts
  //   });
  }
}
