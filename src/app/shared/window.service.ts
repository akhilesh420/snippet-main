import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WindowStateService {
    
  public screenWidthValue = new Subject<number>();

  constructor() {
      this.checkWidth();
  }

  public checkWidth() {
      var width = window.innerWidth;
      this.screenWidthValue.next(width);
  }

}
