import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { Activity, Collection, View } from './activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private viewsCollection: AngularFirestoreCollection<View>;
  private collectionCollection: AngularFirestoreCollection<Collection>;

  constructor(private db: AngularFireDatabase,
              private afs: AngularFirestore) {
    this.viewsCollection = afs.collection<View>('views');
    this.collectionCollection = afs.collection<Collection>('collection');
   }


  // --------------------------------------- Activity ---------------------------------------
  // gets activity for user or post
  getActivity(id: string) {
    return this.db.list<Activity>('/activity/' + id).valueChanges();
  }

  // --------------------------------------- Views ---------------------------------------
  // add view to cloud firestore
  // viewerID: UID of the person who viewed the post
  // vieweeID: UID of the person whose post was viewed
  addViews(pid: string, viewerID: string, vieweeID: string) {
    const obj = {viewerID: viewerID, vieweeID: vieweeID, pid: pid, timeStamp: new Date()};
    this.viewsCollection.add(obj);
  }

  // --------------------------------------- Collection ---------------------------------------
  // add collector to cloud firestore
  // collectorID: UID of the person who collected the sticker
  // collecteeID: UID of the person whose sticker was collected
  addCollection(pid: string, collectorID: string, collecteeID: string) {
    const obj = {collectorID: collectorID, collecteeID: collecteeID, pid: pid, timeStamp: new Date()};
    this.collectionCollection.add(obj);
  }

  // get collection by uid
  getUserCollection(uid: string) {
    return this.afs.collection<Collection>('collection', ref => ref.where('uid','==',uid)).valueChanges();
  }

  // get collection by pid
  getPostCollection(pid: string) {
    return this.afs.collection<Collection>('collection', ref => ref.where('pid','==',pid)).valueChanges();
  }


}
