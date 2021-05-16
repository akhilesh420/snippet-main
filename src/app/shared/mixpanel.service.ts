import { DisplayPicture, ProfileSticker } from 'src/app/shared/profile.model';
import { Holder, StickerDetails, Feed } from './post.model';
import { Collection } from 'src/app/shared/activity.model';
import { PersonalDetails, ProfileDetails } from './profile.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavigationEnd, Router, Event as NavigationEvent } from '@angular/router';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import * as mixpanel from 'mixpanel-browser';
import { filter, pairwise, take } from 'rxjs/operators';

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
    console.log('user identified');
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

  /**
 * Increments property for user
 *
 * @memberof MixpanelService
 */
  increment(property: string, counter = 1): void {
    mixpanel.people.increment(property, counter);
  }

  // Events

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
    mixpanel.track('sticker collect', action);
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

  //Users

  getProperty(uid:string, name: string) {
    return this.afs.doc('mixpanel/'+uid+'/'+name+'/information').valueChanges().pipe(take(1)).toPromise()
      .catch((e) => {
        console.log(e);
        return false;
      });
  }

  setProperty(uid: string, name: string, property: any) {
    mixpanel.people.set(name, property);
    this.afs.doc('mixpanel/'+uid+'/'+name+'/information').set({set: true, dateUpdated: new Date()}).catch((e) => console.log(e));
  }

  async setUserProperties(uid: string) {
    if (!(await this.getProperty(uid, '$email'))) this.setProperty(uid, '$email', (await this.auth.currentUser).email);
    if (!(await this.getProperty(uid, '$name'))) this.setProperty(uid, '$name', (await this.afs.doc<{username: string}>('username/'+uid).valueChanges().pipe(take(1)).toPromise()).username);
    if (!(await this.getProperty(uid, 'full name'))) this.setProperty(uid, 'full name', (await this.afs.doc<PersonalDetails>('personal details/'+uid).valueChanges().pipe(take(1)).toPromise()).name);
    if (!(await this.getProperty(uid, 'stickers collected'))) this.setProperty(uid, 'stickers collected', ((await this.afs.doc<{counter: number}>('activity/'+uid+'/metrics/collected').valueChanges().pipe(take(1)).toPromise()).counter).toString());
    if (!(await this.getProperty(uid, 'posts'))) this.setProperty(uid, 'posts', ((await this.afs.collection('feed/'+uid+'/posts').valueChanges().pipe(take(1)).toPromise()).length).toString());
    if (!(await this.getProperty(uid, 'unique collection'))) this.setProperty(uid, 'unique collection', (await this.getUniqueCollection(uid)).length);
    if (!(await this.getProperty(uid, 'stickers released'))) this.setProperty(uid, 'stickers released', await this.getStickerReleased(uid));
    if (!(await this.getProperty(uid, 'profile stickers'))) this.setProperty(uid, 'profile stickers', await this.getProfileStickers(uid));
    if (!(await this.getProperty(uid, 'dp'))) this.setProperty(uid, 'dp',(await this.afs.doc<DisplayPicture>('display picture/'+uid).valueChanges().pipe(take(1)).toPromise()).fileFormat != 'null');
    if (!(await this.getProperty(uid, 'description'))) this.setProperty(uid, 'description',(await this.afs.doc<ProfileDetails>('profile details/'+uid).valueChanges().pipe(take(1)).toPromise()).description.length != 0);
    if (!(await this.getProperty(uid, 'link'))) this.setProperty(uid, 'link',(await this.afs.doc<ProfileDetails>('profile details/'+uid).valueChanges().pipe(take(1)).toPromise()).link.length != 0);
  }

  async getUniqueCollection(uid: string) {
    const userPosts = await this.afs.collection<Feed>('feed/'+uid+'/collection').valueChanges().pipe(take(1)).toPromise();
    const uniqueCollections = [... new Set((userPosts).map(x => x.creatorID))];
    console.log(userPosts, uniqueCollections);
    return uniqueCollections;
  }

  async getStickerReleased(uid: string) {
    const userPosts = this.afs.collection<Collection>('feed/'+uid+'/posts').valueChanges({idField: 'pid'}).pipe(take(1)).toPromise();
    let stickerDetailsObs: Promise<StickerDetails>[] = [];
    (await userPosts).forEach(async post => {
      stickerDetailsObs.push(this.afs.doc<StickerDetails>('sticker details/'+post.pid).valueChanges().pipe(take(1)).toPromise());
    })
    let stickersReleased: number = 0;
    (await Promise.all(stickerDetailsObs)).forEach(val => stickersReleased += val.amountReleased); //Reduce not working
    return stickersReleased;
  }

  async getProfileStickers(uid: string) {
    const userProfileStickers = this.afs.doc<{stickers: (ProfileSticker | string)[]}>('profile stickers/'+uid).valueChanges().pipe(take(1)).toPromise();
    let profileStickers: number = 5;
    (await userProfileStickers).stickers.forEach(sticker => profileStickers = sticker === 'empty' ? --profileStickers : profileStickers)
    return profileStickers
  }
}
