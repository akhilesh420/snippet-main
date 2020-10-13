import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WindowStateService {
  private isMobile = new Subject();
  public screenWidth: string;
  public screenWidthValue: number;

  constructor() {
      this.checkWidth();
  }

  onMobileChange(status: boolean) {
      this.isMobile.next(status);
  }

  getMobileStatus(): Observable<any> {
      return this.isMobile.asObservable();
  }

  public checkWidth() {
      var width = window.innerWidth;
      this.screenWidthValue = width;
      if (width <= 768) {
          this.screenWidth = 'sm';
          this.onMobileChange(true);
      } else if (width > 768 && width <= 992) {
          this.screenWidth = 'md';
          this.onMobileChange(false);
      } else {
          this.screenWidth = 'lg';
          this.onMobileChange(false);
      }
  }

}
