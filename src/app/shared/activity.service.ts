<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


=======
import { MixpanelService } from './mixpanel.service';
import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';
>>>>>>> f-010
import { map, take } from 'rxjs/operators';
import { Collection } from './activity.model';

import firebase from 'firebase';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  //Firestore Collection

  constructor(private afs: AngularFirestore,
              private mixpanelService: MixpanelService) {}


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
<<<<<<< HEAD
=======
    let success: boolean;
    const batch = this.afs.firestore.batch();
>>>>>>> f-010
    const cid = this.afs.createId();

    const transaction = this.afs.firestore.runTransaction((transaction) => {
      //Add collection
      transaction.set(this.afs.firestore.doc('collection/'+cid), {...collection});

      //Add holder and user collection
      const collectionObj = {cid: cid, timeStamp: collection.timeStamp, creatorID: collection.collecteeID};

      transaction.set(this.afs.firestore.doc('feed/'+ collection.collectorID + '/collection/' + collection.pid), collectionObj);
      transaction.set(this.afs.firestore.doc('posts/'+ collection.pid + '/holders/' + collection.collectorID), collectionObj);

<<<<<<< HEAD
      //Update Activity
      transaction.update(this.afs.firestore.doc('activity/'+ collection.collecteeID + '/metrics/collected'),
                    {counter: firebase.firestore.FieldValue.increment(1),
                      cid: cid}); //user
      transaction.update(this.afs.firestore.doc('activity/'+ collection.pid + '/metrics/collected'),
                    {counter: firebase.firestore.FieldValue.increment(1),
                      cid: cid}); //post
      return Promise.resolve();
    })

    await transaction.catch(async (e) => {
      console.log("error in collection", e);
      throw new Error('Error in sticker collection');
    });
    return true
=======
    await batch.commit()
      .then(async () => {
        success = true;

        //MIXPANEL
        this.mixpanelService.increment('stickers collected');
        const userCollection = await this.afs.collection('feed/'+ collection.collectorID + '/collection', ref => ref.where('creatorID', '==', collection.collecteeID).limit(2)).valueChanges().pipe(take(1)).toPromise();
        if (userCollection.length === 1)  this.mixpanelService.increment('unique collection');
      })
      .catch(async (e) => {
        success = false;
        console.log("error in collection", e);
        throw new Error('Error in sticker collection');
      });
    return success
>>>>>>> f-010
  }
  // sync addCollection(collection: Collection) {
  //   const batch = this.afs.firestore.batch();
  //   const cid = this.afs.createId();

  //   //Add collection
  //   batch.set(this.afs.firestore.doc('collection/'+cid), {...collection});

  //   //Add holder and user collection
  //   const collectionObj = {cid: cid, timeStamp: collection.timeStamp, creatorID: collection.collecteeID};

  //   batch.set(this.afs.firestore.doc('feed/'+ collection.collectorID + '/collection/' + collection.pid), collectionObj);
  //   batch.set(this.afs.firestore.doc('posts/'+ collection.pid + '/holders/' + collection.collectorID), collectionObj);

  //   //Update Activity
  //   batch.update(this.afs.firestore.doc('activity/'+ collection.collecteeID + '/metrics/collected'),
  //                 {counter: firebase.firestore.FieldValue.increment(1),
  //                   cid: cid}); //user
  //   batch.update(this.afs.firestore.doc('activity/'+ collection.pid + '/metrics/collected'),
  //                 {counter: firebase.firestore.FieldValue.increment(1),
  //                   cid: cid}); //post

  //   // Collection analytics
  //   if (collection.collectorID != collection.collecteeID) {
  //     const aid = this.afs.createId();
  //     const timeSpent = new Date().getTime() - this.collectionStartTime;
  //     this.collectionStartTime = new Date().getTime();
  //     const analytics = {type: 'collection', route: this.router.url.split('/')[1], timeSpent: timeSpent};
  //     batch.set(this.afs.firestore.doc('user data/'+collection.collectorID+'/collection analytics/'+aid), analytics);
  //   }

  //   await batch.commit().catch(async (e) => {
  //     console.log("error in collection", e);
  //     throw new Error('Error in sticker collection');
  //   });
  //   return true
  // }

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
}
