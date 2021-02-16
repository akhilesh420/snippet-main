import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Activity, Collection, View } from './activity.model';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  //Variables
  public collectionStartTime = 0;
  public holderListStartTime = 0;


  //Firestore Collection

  constructor(private afs: AngularFirestore,
              private router: Router) {}


  // --------------------------------------- Activity ---------------------------------------
  // // gets activity for user or post
  // getActivity(id: string) {
  //   return this.db.list<Activity>('activity', ref => ref.orderByChild('id').equalTo(id)).valueChanges();
  // }

  //create new activity entry for user or post
  // addActivity(id: string, type: string) {
  //   this.activityRef.push({id: id, type: type, views: 0, collected: 0})
  // }

  //update activity for view or collection
  async updateActivity(type: string, uid: string, pid: string) {
    const batch = this.afs.firestore.batch();

    batch.update(this.afs.firestore.doc('activity/'+ uid + '/metrics/' + type),
                  type === 'collected' ?
                    {counter: firebase.default.firestore.FieldValue.increment(1), lastPid: pid}
                    : {counter: firebase.default.firestore.FieldValue.increment(1)}
                    );
    batch.update(this.afs.firestore.doc('activity/'+ pid + '/metrics/' + type),{counter: firebase.default.firestore.FieldValue.increment(1)});

    await batch.commit().catch(async (e) => {
      console.log("error in activity update", e);
    });
  }

  // --------------------------------------- Views ---------------------------------------
  // add view to realtime db
  // viewerID: UID of the person who viewed the post
  // vieweeID: UID of the person whose post was viewed
  // addViews(pid: string, vieweeID: string, viewerID: string = 'anonymous') {
  //   const obj = {viewerID: viewerID, vieweeID: vieweeID, pid: pid, timeStamp: new Date().getTime()};
  //   this.viewsRef.push(obj);
  //   this.updateActivity('view', vieweeID, pid);
  // }

  // --------------------------------------- Collection ---------------------------------------
  // add collector to cloud firestore
  // collectorID: UID of the person who collected the sticker
  // collecteeID: UID of the person whose sticker was collected
  async addCollection(collection: Collection) {
    const batch = this.afs.firestore.batch();
    const cid = this.afs.createId();

    //Add collection
    batch.set(this.afs.firestore.doc('collection/'+cid), {...collection});

    //Add holder and user collection
    const collectionObj = {cid: cid, timeStamp: collection.timeStamp };

    batch.set(this.afs.firestore.doc('feed/'+ collection.collectorID + '/collection/' + collection.pid), collectionObj);
    batch.set(this.afs.firestore.doc('holder list/'+ collection.pid + '/holders/' + collection.collectorID), collectionObj);

    //Update Activity
    batch.update(this.afs.firestore.doc('activity/'+ collection.collecteeID + '/metrics/collected'),
                  {counter: firebase.default.firestore.FieldValue.increment(1)}); //user
    batch.update(this.afs.firestore.doc('activity/'+ collection.pid + '/metrics/collected'),
                  {counter: firebase.default.firestore.FieldValue.increment(1)}); //post

    // Collection analytics
    if (collection.collectorID != collection.collecteeID) {
      const aid = this.afs.createId();
      const timeSpent = new Date().getTime() - this.collectionStartTime;
      this.collectionStartTime = new Date().getTime();
      const analytics = {type: 'collection', route: this.router.url.split('/')[1], timeSpent: timeSpent};
      batch.set(this.afs.firestore.doc('user data/'+collection.collectorID+'/collection analytics/'+aid), analytics);
    }

    await batch.commit().catch(async (e) => {
      console.log("error in collection", e);
    });
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
