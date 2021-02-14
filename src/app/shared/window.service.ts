import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WindowStateService {

  public screenWidthValue = new BehaviorSubject<number>(null);
  private designDeskWidth = 1440;
  private designDeskHeight =  900;
  private designMobileWidth = 375;
  private designMobileHeight = 640;
  private tabletCheck: boolean;
  private mobileCheck: boolean;
  private height: number;

  constructor() {
    this.checkWidth();
  }

  public checkWidth() {
    var width = window.innerWidth;
    this.height = window.innerHeight;
    this.screenWidthValue.next(width);

    width < 800 ? this.tabletCheck = true : this.tabletCheck = false;
    width < 550 ? this.mobileCheck = true : this.mobileCheck = false;

    document.documentElement.style.setProperty('--desk-x', (width/this.designDeskWidth).toString());
    document.documentElement.style.setProperty('--mobile-x', (width/this.designMobileWidth).toString());

    if (!this.tabletCheck) this.setHeights();
  }

  public setHeights() {
    document.documentElement.style.setProperty('--desk-y', (this.height/this.designDeskHeight).toString());
    document.documentElement.style.setProperty('--mobile-y', (this.height/this.designMobileHeight).toString());
  }

}
