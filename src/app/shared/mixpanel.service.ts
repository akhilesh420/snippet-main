import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import * as mixpanel from 'mixpanel-browser';

@Injectable({
  providedIn: 'root'
})
export class MixpanelService {

  private visitProfileVia: string;

  constructor() { }

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

  stickerCollectionTrack(action: any = {}) {
    mixpanel.track('sticker collect', action);
  };

  setVisitProfileVia(via: string) {
    this.visitProfileVia = via;
  }

  visitProfileTrack(action: any = {}) {
    mixpanel.track('visit profile', {via: this.visitProfileVia, ...action});
  }
}
