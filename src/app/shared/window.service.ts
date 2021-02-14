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


    document.documentElement.style.setProperty('--norm-width', (width/(this.mobileCheck ? this.designMobileWidth : this.designDeskWidth)).toString());

    if (!this.tabletCheck) this.setHeight();
  }

  public setHeight() {
    document.documentElement.style.setProperty('--norm-height', (this.height/(this.mobileCheck ? this.designMobileHeight : this.designDeskHeight)).toString());
  }

}
