import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfiniteScrollService {

  getScroll$ = new Subject();
  
  constructor() { }
}
