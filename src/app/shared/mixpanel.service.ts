import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavigationEnd, Router, Event as NavigationEvent, NavigationStart } from '@angular/router';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import * as mixpanel from 'mixpanel-browser';
import { filter, pairwise, startWith, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MixpanelService {

  private routingVia: string = 'direct';

  constructor(private router: Router,
              private afs: AngularFirestore,
              private auth: AngularFireAuth) {
    router.events.pipe(filter((event: NavigationEvent) => event instanceof NavigationEnd), pairwise())
      .subscribe((event: [NavigationEnd, NavigationEnd]) => {

        const lastRoute = event[0].urlAfterRedirects;
        const currentRoute = event[1].urlAfterRedirects;

        const fromParentRoute = lastRoute.split('/')[1];
        const toParentRoute = currentRoute.split('/')[1];
        if (fromParentRoute === 'create') {this.routeChangeTrack({from: fromParentRoute, to: toParentRoute, step: lastRoute.split('/')[2]});}
        else {this.routeChangeTrack({from: fromParentRoute, to: toParentRoute});}
        this.timeEvent('route change');

        this.triggerRouteTracks(currentRoute);

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

  triggerRouteTracks(route: string) {
    if (route.split('/')[1] === 'profile' ) this.visitProfileTrack({profileVisited: route.split('/')[2]});
    if (route.split('/')[1] === 'collection' ) this.visitCollectionTrack();
    if (route.split('/')[1] === 'post' ) this.visitPostTrack({postVisited: route.split('/')[2]});
  }

  signIn(uid: string) {
    this.identify(uid);
    mixpanel.track('sign in');
  }

  signUp(uid: string, action: any = {}) {
    this.alias(uid); //Sync current user data with uid
    mixpanel.track('sign up', action);
  }

  logout() {
    this.reset();
    mixpanel.track('log out');
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

  openCollectionTrack(action: any = {}) {
    mixpanel.track('visit collection', action);
  };

  createPostTrack(action: any = {}) {
    mixpanel.track('create post', action);
  };

  profileDescriptionTrack(action: any = {}) {
    mixpanel.track('update profile description', action);
  };

  profileLinkTrack(action: any = {}) {
    mixpanel.track('update profile link', action);
  };

  profileStickersTrack(action: any = {}) {
    mixpanel.track('update profile stickers', action);
  };

  dpUpdateTrack(action: any = {}) {
    mixpanel.track('update dp', action);
  };

  sessionStartTrack(action: any = {}) {
    mixpanel.track('session start', action);
  }

  sessionEndTrack(action: any = {}) {
    mixpanel.track('session end', action);
  }

  routeChangeTrack(action: any = {}) {
    mixpanel.track('route change', action);
  }

  avatarImage(url: string) {
    mixpanel.people.set({$avatar: url});
  }
}
