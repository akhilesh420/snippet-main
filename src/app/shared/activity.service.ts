import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { Activity, Collection, View } from './activity.model';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  //Variables
  public collectionStartTime = 0;
  public holderListStartTime = 0;

  //Realtime database
  private viewsRef: any;
  private activityRef: any;

  //Firestore Collection
  private collectionCollection: AngularFirestoreCollection<Collection>;

  constructor(private db: AngularFireDatabase,
              private afs: AngularFirestore,
              private router: Router) {
    this.viewsRef = db.list<View>('views');
    this.activityRef =  db.list<Activity>('activity');
    this.collectionCollection =  afs.collection<Collection>('collection');
   }


  // --------------------------------------- Activity ---------------------------------------
  // gets activity for user or post
  getActivity(id: string) {
    return this.db.list<Activity>('activity', ref => ref.orderByChild('id').equalTo(id)).valueChanges();
  }

  //create new activity entry for user or post
  addActivity(id: string, type: string) {
    this.activityRef.push({id: id, type: type, views: 0, collected: 0})
  }

  //update activity for view or collection
  updateActivity(type: string, uid: string, pid: string) {
    const queryUser = this.db.list<Activity>('activity', ref => ref.orderByChild('id').equalTo(uid));
    const queryPost = this.db.list<Activity>('activity', ref => ref.orderByChild('id').equalTo(pid));

    queryUser.snapshotChanges().pipe( //update old activity for user
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))),
          take(1)
        )
      .subscribe((response) => {
        if (!response[0]) {
          return;
        } else {
          if (type === 'view') {
            this.activityRef.update(response[0].key, {views: response[0].views + 1});
          } else if (type === 'collection') {
            this.activityRef.update(response[0].key, {collected: response[0].collected + 1});
          }
        }
    });

    queryPost.snapshotChanges().pipe( //update old activity for post
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        ),take(1))
      .subscribe((response) => {
        if (!response[0]) {
          console.log('post activity not found');
        } else {
          if (type === 'view') {
            this.activityRef.update(response[0].key, {views: response[0].views + 1});
          } else if(type === 'collection') {
            this.activityRef.update(response[0].key, {collected: response[0].collected + 1});
          }
        }
    });

  }

  // --------------------------------------- Views ---------------------------------------
  // add view to realtime db
  // viewerID: UID of the person who viewed the post
  // vieweeID: UID of the person whose post was viewed
  addViews(pid: string, vieweeID: string, viewerID: string = 'anonymous') {
    const obj = {viewerID: viewerID, vieweeID: vieweeID, pid: pid, timeStamp: new Date().getTime()};
    this.viewsRef.push(obj);
    this.updateActivity('view', vieweeID, pid);
  }

  // --------------------------------------- Collection ---------------------------------------
  // add collector to cloud firestore
  // collectorID: UID of the person who collected the sticker
  // collecteeID: UID of the person whose sticker was collected
  addCollection(collection: Collection) {
    const obj = {...collection};
    const id = this.afs.createId();
    this.collectionCollection.doc(id).set(obj);
    this.updateActivity('collection', collection.collecteeID, collection.pid);

    // collection analytics
    if (collection.collectorID === collection.collecteeID) return;
    const timeSpent = new Date().getTime() - this.collectionStartTime;
    this.collectionStartTime = new Date().getTime();
    const analytics = {type: 'collection', route: this.router.url.split('/')[1], timeSpent: timeSpent};
    this.addAnalytics(collection.collectorID, 'collection analytics', analytics);
  }

  // get collection by uid
  getUserCollection(uid: string) {
    return this.afs.collection<Collection>('collection', ref => ref.where('collectorID','==',uid).orderBy('timeStamp', 'desc')).valueChanges();
  }

  // get collection by pid
  getPostCollection(pid: string) {
    return this.afs.collection<Collection>('collection', ref => ref.where('pid','==',pid).orderBy('timeStamp', 'desc')).valueChanges();
  }

  // add analytics
  addAnalytics(uid, type, obj) {
    const analyticsCollection = this.afs.collection('user data/'+uid+'/'+type);
    const id = this.afs.createId();
    analyticsCollection.doc(id).set(obj);
  }
}
