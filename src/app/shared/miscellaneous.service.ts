import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiscellaneousService {

  private loadingBar = new Subject<string>();

  constructor() { }
  setLoading(value: number) { //percentage value

    value = value > 100 ? 100 : value; //cap value at 100%

    this.loadingBar.next(value.toString() + '%');

    if (value === 100) {
      setTimeout(func => this.loadingBar.next('0%'), 500)
    }
  }

  getLoading() {
    return this.loadingBar;
  }
}
