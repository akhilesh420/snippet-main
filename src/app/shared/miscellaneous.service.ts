import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiscellaneousService {

  private loadingBar = new Subject<string>();
  private loadingStart = new Subject<boolean>();

  private k = 1; //proportionality constant
  private loading: number = 0;

  constructor() { }

  ngOnInit() {
    this.loadingStart.next(false);
  }

  setLoading(value: number) { //percentage value

    const rate = 0.5 + this.k*(this.loading - value);

    const timer = setInterval(func => {
      this.loading += rate;
      this.loadingBar.next(this.loading + '%');
    }, 1000)

    this.loading = this.loading > 100 ? 100 : value; //cap value at 100%

    if (this.loading > 90 && value != 100) {
      this.loadingBar.next('90%')
    }

    this.loadingBar.next(value.toString() + '%');

    if (value === 100) {
      setTimeout(func => this.loadingBar.next('0%'), 700);
      clearInterval(timer);
    }
  }

  getLoading() {
    return this.loadingStart;
  }

  startLoading() {
    this.loadingStart.next(true);
  }

  endLoading() {
    this.loadingStart.next(false);
  }


}
