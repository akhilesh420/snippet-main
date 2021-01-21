import { OnBoarding, ProfileDetails, ProfileSticker } from './profile.model';
import { UsersService } from 'src/app/shared/users.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

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

  private loadingStart = new BehaviorSubject<boolean>(false);

  private userPopUp = new Subject<boolean>();
  private popUpSetup = new Subject<PopUp>();

  public navbarHeight: number = 47;

  public onBoardingDetails: OnBoarding;
  private onBoardingStartStep: number;
  public onBoardingStep$ = new BehaviorSubject<number>(0);
  public onBoarding$ = new BehaviorSubject<boolean>(false); //must be false to begin with for log in
  public exclusiveId: string;
  public onBoardingStickerCollection$ = new BehaviorSubject<boolean>(false);

  private startTime: number;
  private endTime: number;

  profileStickerEdit = new Subject<boolean>();
  stickerEmitted = new Subject<string>();
  stickerSelectConfirm = new Subject<string>();
  userStickerSelection = new BehaviorSubject<ProfileSticker>(undefined);
  lastRoute  = '/explore';

  showDashboard = new Subject<boolean>();
  overrideEdit = new Subject<boolean>(); //true => both profile and sticker edit, false => just profile edit

  images = [];

  constructor(private userService: UsersService,
              private router: Router) { }

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

  setTimeTaken(step: number, unload: boolean = false) {
    if (unload || step === this.onBoardingStartStep) {
      this.endTime = new Date().getTime();
      const timetaken = this.endTime - this.startTime;

      this.onBoardingDetails.timeTaken[step] += timetaken;
      this.startTime = new Date().getTime();
    } else {
      this.endTime = new Date().getTime();
      const timetaken = this.endTime - this.startTime;

      this.onBoardingDetails.timeTaken[step-1] += timetaken;
      this.startTime = new Date().getTime();
    }
  }

  endOnBoarding(uid: string) {
    if (!this.onBoarding$.value) return;
    this.onBoardingStep$.next(9);
    this.onBoarding$.next(false);
  }

  startOnBoarding(uid: string) {
    let notifier$ = new Subject();
    this.userService.getOnBoarding(uid).pipe(takeUntil(notifier$)).subscribe(details => {
      if (!details) return;
      this.onBoardingDetails = details;
      if (details.onBoarding) {
        this.onBoardingStartStep = details.onBoardingStep;
        this.startTime = new Date().getTime();
        this.onBoarding$.next(true);
        this.onBoardingStep$.next(details.onBoardingStep);
      } else {
        this.onBoarding$.next(false);
      }
      notifier$.next();
      notifier$.complete();
    })
  }

  setOnBoardingStep(uid: string) {
    this.updateOnBoarding(uid);
  }

  updateOnBoarding(uid: string) {
    if (!this.onBoardingDetails) return;
    this.userService.updateOnBoarding(uid, this.onBoarding$.value, this.onBoardingStep$.value, this.onBoardingDetails.timeTaken);
  }

  preloadImages(images: string[]) {
    for (var i = 0; i < arguments.length; i++) {
      this.images[i] = new Image();
      this.images[i].src = images[i];
    }
  }
}
