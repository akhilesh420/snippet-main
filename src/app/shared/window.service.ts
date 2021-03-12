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

  public normWidth: number;
  public normHeight: number;

  constructor() {
    this.checkWidth();
  }

  public checkWidth() {
    var width = window.innerWidth;
    this.height = window.innerHeight;
    this.screenWidthValue.next(width);

    width < 800 ? this.tabletCheck = true : this.tabletCheck = false;
    width < 550 ? this.mobileCheck = true : this.mobileCheck = false;

    this.normWidth = width/(this.mobileCheck ? this.designMobileWidth : this.designDeskWidth);
    document.documentElement.style.setProperty('--norm-width', this.normWidth.toString());

    if (!this.tabletCheck) this.setHeight();
  }

  public setHeight() {
    this.normHeight = this.height/(this.mobileCheck ? this.designMobileHeight : this.designDeskHeight);
    document.documentElement.style.setProperty('--norm-height', (this.normHeight).toString());
  }

}
