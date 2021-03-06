import { environment } from './../../environments/environment';
import { map, take } from 'rxjs/operators';
import { PostDetails } from 'src/app/shared/post.model';
import { Injectable } from '@angular/core';
import { ActivityService } from '../shared/activity.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Subject } from 'rxjs';
import { PostService } from '../shared/post.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  excludePID: string[] = [environment.onBoardingPid];

  currentPost = new BehaviorSubject<string>(undefined);

  constructor(private afs: AngularFirestore) {

   }

  // get explore page
  getExplorePage() {
    return this.afs.collection<{dateCreated: Date, creatorID: string}>('feed/explore/global', ref => ref.orderBy('dateCreated', 'desc'))
            .valueChanges({idField: 'pid'}).pipe(take(1), map(postsList => {
              return postsList.filter(post => !this.excludePID.includes(post.pid));
            }));
  }

  // get profile page
  getProfilePage(uid: string) {
    return this.afs.collection<{dateCreated: Date, creatorID: string}>('feed/'+uid+'/posts', ref => ref.where('uid','==',uid)
                                                      .orderBy('dateCreated', 'desc')).valueChanges({idField: 'pid'});
  }

  // generate collection page by uid
  getCollectionPage(uid: string) {
    return this.afs.collection<{dateCreated: Date, creatorID: string}>('feed/'+uid+'/collection', ref => ref.where('uid','==',uid)
                                                      .orderBy('dateCreated', 'desc'))
                      .valueChanges({idField: 'pid'})
                      .pipe(map(postsList => {
                        if (!postsList) return postsList;
                        postsList = postsList.filter(post => { //Filter out users own posts
                          return uid != post.creatorID;
                        })
                        return postsList;
                      }));
  }

  getPostPage(pid: string) {
    return this.afs.doc<{dateCreated: Date, creatorID: string}>('posts/'+pid).valueChanges({idField: 'pid'})
                .pipe(map(post => {return [post];}));
  }
}
