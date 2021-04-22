import { Injectable } from '@angular/core';
import * as mixpanel from 'mixpanel-browser';

@Injectable({
  providedIn: 'root'
})
export class MixpanelService {

  constructor() { }

    /**
   * Initialize mixpanel.
   *
   * @param {string} userToken
   * @memberof MixpanelService
   */
     init(userToken: string): void {
      mixpanel.init("420d3abdd33a6b9c38a9432c7ac170aa", {batch_requests: true});
      mixpanel.identify(userToken);
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


}
