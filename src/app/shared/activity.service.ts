import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { map, take } from 'rxjs/operators';
import { Collection } from './activity.model';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  //Variables
  public collectionStartTime = 0;
  public holderListStartTime = 0;


  //Firestore Collection

  constructor(private afs: AngularFirestore,
              private auth: AngularFireAuth,
              private router: Router) {}


  // --------------------------------------- Activity ---------------------------------------

  //update activity for view or collection
  async updateActivity(type: string, id: string) {
    this.afs.firestore.doc('activity/'+ id + '/metrics/' + type)
          .update({counter: firebase.firestore.FieldValue.increment(1)});
  }

  getActivityCollection(id: string) {
    return this.afs.doc<{counter: number}>('activity/' + id +'/metrics/collected').valueChanges();
  }

  getActivityViews(id: string) {
    return this.afs.doc<{counter: number}>('activity/' + id +'/metrics/views').valueChanges();
  }

  // --------------------------------------- Views ---------------------------------------
  // add view to realtime db
  // viewerID: UID of the person who viewed the post
  // vieweeID: UID of the person whose post was viewed
  async addViews(pid: string, vieweeID: string, viewerID: string = 'anonymous') {
    const viewsObj = {viewerID: viewerID, vieweeID: vieweeID, pid: pid, timeStamp: new Date().getTime()};
    const activityObj = {counter: firebase.firestore.FieldValue.increment(1)};

    const vid = this.afs.createId();
    const batch = this.afs.firestore.batch();

    const viewsRef = this.afs.firestore.doc('views/'+vid);
    const userActivityRef = this.afs.firestore.doc('activity/' + vieweeID +'/metrics/views');
    const postActivityRef = this.afs.firestore.doc('activity/' + pid +'/metrics/views');

    batch.set(viewsRef, viewsObj);
    batch.update(userActivityRef, activityObj);
    batch.update(postActivityRef, activityObj);

    await batch.commit().catch(async (e) => {
      console.log("error in collection", e);
      throw new Error('Error in sticker collection');
    });
  }

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
    const collectionObj = {cid: cid, timeStamp: collection.timeStamp, creatorID: collection.collecteeID};

    batch.set(this.afs.firestore.doc('feed/'+ collection.collectorID + '/collection/' + collection.pid), collectionObj);
    batch.set(this.afs.firestore.doc('posts/'+ collection.pid + '/holders/' + collection.collectorID), collectionObj);

    //Update Activity
    batch.update(this.afs.firestore.doc('activity/'+ collection.collecteeID + '/metrics/collected'),
                  {counter: firebase.firestore.FieldValue.increment(1),
                    cid: cid}); //user
    batch.update(this.afs.firestore.doc('activity/'+ collection.pid + '/metrics/collected'),
                  {counter: firebase.firestore.FieldValue.increment(1),
                    cid: cid}); //post

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
      throw new Error('Error in sticker collection');
    });
    return true
  }

  // get collection by uid
  getUserCollection(uid: string) {
    return this.afs.collection<any>('feed/'+uid+'/collection', ref => ref.orderBy('timeStamp', 'desc'))
                      .valueChanges({idField: 'pid'})
                      .pipe(map(postsList => {
                        if (!postsList) return postsList;
                        postsList = postsList.map(post => {
                          return {dateCreated: new Date(post.timeStamp), creatorID: post.creatorID, pid: post.pid}
                        })
                        return postsList;
                      }));
  }

  // get collection by pid
  getHolderList(pid: string) {
    return this.afs.collection<{cid: Date, timeStamp: string}>('posts/' + pid + '/holders', ref => ref.orderBy('timeStamp')).valueChanges({idField: 'collectorID'});
  }

  // add analytics
  async addAnalytics(uid, type, obj) {
    if (uid != (await this.auth.user.pipe(take(1)).toPromise()).uid) return;
    const analyticsCollection = this.afs.collection('user data/'+uid+'/'+type);
    const id = this.afs.createId();
    analyticsCollection.doc(id).set(obj);
  }
}
