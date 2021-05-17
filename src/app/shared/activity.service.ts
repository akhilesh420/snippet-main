import { Injectable } from '@angular/core';


import { map } from 'rxjs/operators';
import { Collection } from './activity.model';

import firebase from 'firebase';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  //Firestore Collection

  constructor(private afs: AngularFirestore) {}


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
    const cid = this.afs.createId();

    const pid = collection.pid;
    const uid = collection.collectorID;

    const hlDocRef = this.afs.firestore.collection('posts/' + pid + '/holders').doc(uid);
    const sdDocRef = this.afs.firestore.collection('sticker details').doc(pid);
    const aDocRef = this.afs.firestore.collection('activity/'+pid+'/metrics').doc('collected');

    const transaction = this.afs.firestore.runTransaction(async (t) => {

      return Promise.all([t.get(hlDocRef), t.get(sdDocRef), t.get(aDocRef)]).then((response) => {

        if (response[0].exists) return Promise.reject("You already collected this sticker!");
        if (!response[1].exists || !response[2].exists) return Promise.reject("An error occurred while processing your request. Please try again later!");
        if (response[1].data().amountReleased <= response[2].data().counter) return Promise.reject("There are no more stickers left!");

        //Add collection
        t.set(this.afs.firestore.doc('collection/'+cid), {...collection});

        //Add holder and user collection
        const collectionObj = {cid: cid, timeStamp: collection.timeStamp, creatorID: collection.collecteeID};

        t.set(this.afs.firestore.doc('feed/'+ collection.collectorID + '/collection/' + collection.pid), collectionObj);
        t.set(this.afs.firestore.doc('posts/'+ collection.pid + '/holders/' + collection.collectorID), collectionObj);

        //Update Activity
        t.update(this.afs.firestore.doc('activity/'+ collection.collecteeID + '/metrics/collected'),
                      {counter: firebase.firestore.FieldValue.increment(1),
                        cid: cid}); //user
        t.update(this.afs.firestore.doc('activity/'+ collection.pid + '/metrics/collected'),
                      {counter: firebase.firestore.FieldValue.increment(1),
                        cid: cid}); //post
        return Promise.resolve();
      })
    })

    return transaction.catch((e) => {
      if (e.message === 'Connection failed.') throw("Please check your internet connection and try again."); //Failed internet connection
      if (e.name)  throw("An error occurred while processing your request. Please try again later!"); //Other error and exceptions
      throw(e); //Custom error
    })
  }

  // get collection by uid
  getUserCollection(uid: string) {
    return this.afs.collection<any>('feed/'+uid+'/collection', ref => ref
        .orderBy('timeStamp', 'desc')
        .where('deleted','==', false))
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
}
