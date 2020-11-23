import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export class PopUp {
   constructor(
    public message: string,
    public primary: string,
    public secondary?: string,
    public active?: string[],
    public route?: string,
    public secondaryRoute?: boolean
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class MiscellaneousService {

  private loadingStart = new Subject<boolean>();

  private userPopUp = new Subject<boolean>();
  private popUpSetup = new Subject<PopUp>();

  public navbarHeight: number = 47;

  public onBoardingStep$ = new BehaviorSubject<number>(0);
  public onBoarding$ = new BehaviorSubject<boolean>(false);
  public exclusiveId: string;
  public onBoardingStickerCollection$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit() {
    this.loadingStart.next(false);
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

  getPopUpInteraction() {
    return this.userPopUp;
  }

  setPopUpInteraction(value: boolean) {
    return this.userPopUp.next(value);
  }

  getPopUpSetUp() {
    return this.popUpSetup;
  }

  setPopUp(value: PopUp) {
    setTimeout(func=>{
      this.popUpSetup.next(value);
    },50);
  }

  closePopUp() {
    this.popUpSetup.next(undefined);
  }
}
