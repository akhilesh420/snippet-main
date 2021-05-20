import { map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { Feed } from '../shared/post.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  currentPost = new BehaviorSubject<string>(undefined);
  mutePosts = new BehaviorSubject<boolean>(false);

  constructor(private afs: AngularFirestore) {}

  // get explore page
  getExplorePage() {
    return this.afs
      .collection<Feed>('feed/explore/global', ref => ref
        .where('deleted','==', false)
        .orderBy('dateCreated', 'desc'))
      .valueChanges({idField: 'pid'});
      // .pipe(take(2));
  }

  // get profile page
  getProfilePage(uid: string) {
    return this.afs.collection<Feed>('feed/'+uid+'/posts', ref => ref
        .where('deleted','==', false)
        .orderBy('dateCreated', 'desc'))
      .valueChanges({idField: 'pid'});
  }

  // generate collection page by uid
  getCollectionPage(uid: string) {
    return this.afs.collection<any>('feed/'+uid+'/collection', ref => ref
        .where('deleted','==', false)
        .orderBy('timeStamp', 'desc'))
      .valueChanges({idField: 'pid'})
      .pipe(map(postsList => {
        if (!postsList) return postsList;
        postsList = postsList.map(post => {
          return {dateCreated: new Date(post.timeStamp), creatorID: post.creatorID, pid: post.pid}
        })
        postsList = postsList.filter(post => { //Filter out users own posts
          return uid != post.creatorID;
        })
        return postsList;
      }));
  }

  getPostPage(pid: string) {
    return this.afs.doc<Feed>('posts/'+pid)
      .valueChanges({idField: 'pid'})
      .pipe(map(post => {return [post];}));
  }
}
