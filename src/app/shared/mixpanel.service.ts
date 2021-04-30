import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavigationEnd, Router, Event as NavigationEvent } from '@angular/router';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import * as mixpanel from 'mixpanel-browser';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MixpanelService {

  private routingVia: string = 'direct';
  private currentRoute: string;

  constructor(private router: Router,
              private afs: AngularFirestore,
              private auth: AngularFireAuth) {
    router.events.subscribe((event: NavigationEvent) => {
      if (!(event instanceof NavigationEnd)) return;

      this.currentRoute = event.urlAfterRedirects;

      if (this.currentRoute.split('/')[1] === 'profile' ) this.visitProfileTrack({profileVisited: this.currentRoute.split('/')[2]});
      if (this.currentRoute.split('/')[1] === 'collection' ) this.visitCollectionTrack();

    });
   }

  /**
 * Initialize mixpanel.
 *
 * @param {string} userToken
 * @memberof MixpanelService
 */
  init(): void {
    mixpanel.init(environment.mixpanelProjectID, {batch_requests: true});
    console.log('Has opted out of tracking? :', mixpanel.has_opted_out_tracking());
  }

  /**
 * Identify mixpanel user profile
 *
 * @param {string} userToken
 * @memberof MixpanelService
 */
  identify(userToken: string): void {
    mixpanel.identify(userToken);
  }

  /**
 * Create user profile alias to combine UID to mixpanel UUID
 *
 * @param {string} uid
 * @memberof MixpanelService
 */
  alias(uid: string): void {
    mixpanel.alias(uid);
  }

  /**
   * Push new action to mixpanel.
   *
   * @param {string} id Name of the action to track.
   * @param {*} [action={}] Actions object with custom properties.
   * @memberof MixpanelService
   */
  track(id: string, action: any = {}): void {
    console.log('Mixpanel track:', id, action);
    mixpanel.track(id, action);
  }

  /**
   * Time event between this call and track
   *
   * @param {string} id Name of the action to track.
   * @memberof MixpanelService
   */
   timeEvent(id: string): void {
    mixpanel.time_event(id);
  }

  /**
   * Clears super properties and generates a new random distinct_id
   *
   * @memberof MixpanelService
   */
   reset(): void {
    mixpanel.reset();
  }

  setRoutingVia(via: string) {
    this.routingVia = via;
  }

  async stickerCollectionTrack(action: any = {}) {
    const currentUser = (await this.auth.currentUser);
    const firstCollectionFromCollectee = !(await this.afs.collection('feed/'+currentUser.uid+'/collection', ref => ref.where('creatorID', '==', action.collecteeID).limit(1))
                                                        .valueChanges({idField: 'pid'}).pipe(take(1)).toPromise());
    mixpanel.track('sticker collect', {firstCollectionFromCollectee: firstCollectionFromCollectee, ...action});
    this.timeEvent('sticker collect');
  };

  visitProfileTrack(action: any = {}) {
    mixpanel.track('visit profile', {via: this.routingVia, ...action});
  }

  visitCollectionTrack(action: any = {}) {
    mixpanel.track('visit collection', {via: this.routingVia, ...action});
  }

  visitPostTrack(action: any = {}) {
    mixpanel.track('visit post', {via: this.routingVia, ...action});
  }

  leaveFeedbackTrack(action: any = {}){
    mixpanel.track('leave feedback',  action);
  }

  openHolderListTrack(action: any = {}) {
    mixpanel.track('open holder list', action);
    this.timeEvent('open holder list');
  };

  openCollection(action: any = {}) {
    mixpanel.track('visit collection', action);
  };

  sessionStartTrack(action: any = {}) {
    mixpanel.track('session start', action);
  }

  sessionEndTrack(action: any = {}) {
    mixpanel.track('session end', action);
  }
}
