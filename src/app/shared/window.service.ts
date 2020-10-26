import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WindowStateService {
    
  public screenWidthValue = new BehaviorSubject<number>(null);

  constructor() {
      this.checkWidth();
  }

  public checkWidth() {
      var width = window.innerWidth;
      this.screenWidthValue.next(width);
  }

}
