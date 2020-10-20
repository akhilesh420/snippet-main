import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { map, take } from 'rxjs/operators';
import { Activity, Collection, View } from './activity.model';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private viewsRef: any;
  private collectionRef: any;
  private activityRef: any;

  constructor(private db: AngularFireDatabase) {
    this.viewsRef = db.list<View>('views');
    this.collectionRef =  db.list<Collection>('collection');
    this.activityRef =  db.list<Collection>('activity');
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
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        ),take(1))
      .subscribe((response) => { 
          if (type === 'view') {
            this.activityRef.update(response[0].key, {views: response[0].views + 1});
          } else if(type === 'collection') {
            this.activityRef.update(response[0].key, {collected: response[0].collected + 1});
          }
    })

    queryPost.snapshotChanges().pipe( //update old activity for post
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        ),take(1))
      .subscribe((response) => { 
        if (type === 'view') {
          this.activityRef.update(response[0].key, {views: response[0].views + 1});
        } else if(type === 'collection') {
          this.activityRef.update(response[0].key, {collected: response[0].collected + 1});
        }
    })

  }

  // --------------------------------------- Views ---------------------------------------
  // add view to cloud firestore
  // viewerID: UID of the person who viewed the post
  // vieweeID: UID of the person whose post was viewed
  addViews(pid: string, viewerID: string, vieweeID: string) {
    const obj = {viewerID: viewerID, vieweeID: vieweeID, pid: pid, timeStamp: new Date().getTime()};
    this.viewsRef.push(obj);
    this.updateActivity('view',vieweeID,pid);
  }

  // --------------------------------------- Collection ---------------------------------------
  // add collector to cloud firestore
  // collectorID: UID of the person who collected the sticker
  // collecteeID: UID of the person whose sticker was collected
  addCollection(pid: string, collectorID: string, collecteeID: string) {
    const obj = {collectorID: collectorID, collecteeID: collecteeID, pid: pid, timeStamp: new Date().getTime()};
    this.collectionRef.push(obj);
    this.updateActivity('collection',collecteeID,pid);
  }

  // get collection by uid
  getUserCollection(uid: string) {
    return this.db.list<Collection>('collection', ref => ref.orderByChild('collectorID').equalTo(uid)).valueChanges();
  }

  // get collection by pid
  getPostCollection(pid: string) {
    return this.db.list<Collection>('collection', ref => ref.orderByChild('pid').equalTo(pid)).valueChanges();
  }
}
