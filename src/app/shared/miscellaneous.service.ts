import { ProfileDetails } from './profile.model';
import { UsersService } from 'src/app/shared/users.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
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

  public onBoardingStep$ = new BehaviorSubject<number>(0);
  public onBoarding$ = new BehaviorSubject<boolean>(false); //must be false to begin with for log in
  public exclusiveId: string;
  public onBoardingStickerCollection$ = new BehaviorSubject<boolean>(false);

  constructor(private userService: UsersService,
              private router: Router) { }

  ngOnInit() {
    this.loadingStart.next(false);
    this.onBoardingStep$.subscribe(step => {
      console.log(step); //temp log
    })
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

  endOnBoarding(uid: string) {
    if (!this.onBoarding$.value) return;
    this.onBoarding$.next(false);
  }

  startOnBoarding(uid: string) {
    let profileDetails: ProfileDetails;
    let notifier$ = new Subject();
    this.userService.getProfileDetails(uid).pipe(takeUntil(notifier$)).subscribe(details => {
      if (!details) return;
      if (details.onBoarding) {
        this.onBoarding$.next(true);
        this.onBoardingStep$.next(details.onBoardingStep);
      } else {
        this.onBoarding$.next(false);
        this.router.navigate(['/explore'])
      }
      notifier$.next();
      notifier$.complete();
    })
  }

  setOnBoardingStep(uid: string) {
    this.updateOnBoarding(uid);
  }

  updateOnBoarding(uid: string) {
    this.userService.updateOnBoarding(uid, this.onBoarding$.value, this.onBoardingStep$.value);
  }
}
