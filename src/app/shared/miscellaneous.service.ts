import { environment } from './../../environments/environment';
import { OnBoarding,  ProfileSticker } from './profile.model';
import { UsersService } from 'src/app/shared/users.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
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

  preloadImages(images: string[]) {
    for (var i = 0; i < images.length; i++) {
      this.images[i] = new Image();
      this.images[i].src = environment.websitePath + images[i];
    }
  }

  getDimension(file: File, type: string): Promise<{width: number; height: number}> {
    return new Promise((resolve) => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event:any) => {
        let width: number;
        let height: number;
        if (type.includes('image')) {
          const img = new Image();
          img.onload = () => {
            width = img.naturalWidth;
            height = img.naturalHeight;
            resolve({width: width, height: height});
          }
          img.src = event.target.result;
        } else {
          let newFile: File;
          const dataurl = event.target.result;
          let arr = dataurl.split(','),
              bstr = atob(arr[1]),
              n = bstr.length,
              u8arr = new Uint8Array(n);

          while(n--){
              u8arr[n] = bstr.charCodeAt(n);
          }
          newFile  = new File([u8arr], "test.mp4", {type:'video/mp4', lastModified: new Date().getDate()});
          let reader2 = new FileReader();
          reader2.readAsDataURL(newFile);
          reader2.onload = (event:any) => {
            var video = document.createElement("video");
            video.setAttribute("src", event.target.result);
            video.onloadedmetadata = () => {
              width = video.videoWidth;
              height = video.videoHeight;
              resolve({width: width, height: height});
            }
          }
        }
      }
    })
  }

}
