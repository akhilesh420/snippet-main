import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MixpanelService } from '../shared/mixpanel.service';

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

  constructor(private afs: AngularFirestore,
              private mixpanelService: MixpanelService) {
    this.feedbackCollection = afs.collection<Feedback>('feedback');
   }

  addFeedback(feedback: Feedback) {
    const id = this.afs.createId();
    const obj = {...feedback};
    this.feedbackCollection.doc(id).set(obj)
      .then(() => this.mixpanelService.leaveFeedbackTrack({}))
      .catch((e) => this.mixpanelService.leaveFeedbackTrack({error: 'Something went wrong!'}));
  }

}
