import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private windowScroll = new Subject<number>();

  constructor() { }

  getScroll() {
    return this.windowScroll;
  }

  setScroll() {
   this.windowScroll.next(window.scrollY);
  }

}
