import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface Feedback {
  dateCreated: Date,
  feedback: string,
  uid?: string,
  username?: string,
  fullname?: string,
  email?: string
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private feedbackCollection: AngularFirestoreCollection<Feedback>;

  constructor(private afs: AngularFirestore) {
    this.feedbackCollection = afs.collection<Feedback>('feedback');
   }
  
  addFeedback(feedback: Feedback) {
    const id = this.afs.createId();
    const obj = {...feedback};
    this.feedbackCollection.doc(id).set(obj);
  }

}
