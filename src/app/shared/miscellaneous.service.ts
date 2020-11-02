import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiscellaneousService {

  appClick = new Subject();

  constructor() { }

  onAppClick() {
    setTimeout(func => this.appClick.next(), 2000) ;
  }

}
