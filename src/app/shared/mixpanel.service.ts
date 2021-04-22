import { environment } from './../../environments/environment';
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
      // mixpanel.init("420d3abdd33a6b9c38a9432c7ac170aa");
      mixpanel.init(environment.mixpanelProjectID, {batch_requests: true});
      mixpanel.identify(userToken);
      mixpanel.opt_in_tracking();
      console.log('Has opted out of tracking? :', mixpanel.has_opted_out_tracking());
    }

    /**
     * Push new action to mixpanel.
     *
     * @param {string} id Name of the action to track.
     * @param {*} [action={}] Actions object with custom properties.
     * @memberof MixpanelService
     */
    track(id: string, action: any = {}): void {
      console.log('Sending event');
      mixpanel.track(id, action);
    }


}
