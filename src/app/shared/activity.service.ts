import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

export class View {

  constructor(
    public viewerID: string,
    public vieweeID: string,
    public pid: string,
    public timeStamp: Date
  ) {}
}

export class Collection {

  constructor(
    public collectorID: string,
    public collecteeID: string,
    public pid: string,
    public timeStamp: Date
  ) {}

}

export class Activity {
   constructor(

   )
}

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
    return this.db.list('/activity/' + id).valueChanges();
  }

  // --------------------------------------- Views ---------------------------------------
  // add view to cloud firestore
  // viewerID: UID of the person who viewed the post
  // vieweeID: UID of the person whose post was viewed
  addViews(pid: string, viewerID: string, vieweeID: string) {
    this.viewsCollection.add(new View(viewerID, vieweeID, pid, new Date()));
  }


  // --------------------------------------- Collection ---------------------------------------
  // add collector to cloud firestore
  // collectorID: UID of the person who collected the sticker
  // collecteeID: UID of the person whose sticker was collected
  addCollection(pid: string, collectorID: string, collecteeID: string) {
    this.collectionCollection.add(new Collection(collectorID, collecteeID, pid, new Date()));
  }

  // get collection by uid
  getCollection(uid: string) {
    return this.afs.collection<Collection>('collection', ref => ref.where('uid','==',uid)).valueChanges();
  }

}
