import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  currentMessage = new BehaviorSubject(null);

  constructor(private afs: AngularFirestore,
              private auth: AngularFireAuth,
              private afMessaging: AngularFireMessaging) { }

  requestPermission() {
    this.afMessaging.requestToken
      .subscribe(
        async (token) => {
          console.log('Permission granted! Save to the server!', token);
          this.afs
            .collection('fcmTokens')
            .doc((await this.auth.currentUser).uid)
            .set({token: token})},
        (error) => { console.error(error); },
      );
  }
d
  receiveMessage() {
    this.afMessaging.messages
      .subscribe((message) => { console.log(message); });
  }
}
