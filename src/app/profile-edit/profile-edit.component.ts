import { PostService } from './../shared/post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProfileDetails, ProfileSticker, DisplayPicture } from './../shared/profile.model';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { PostDetails } from 'src/app/shared/post.model';
import { UsersService } from 'src/app/shared/users.service';
import { ActivityService } from 'src/app/shared/activity.service';
import { Collection } from 'src/app/shared/activity.model';
import { take, takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { MiscellaneousService, PopUp } from '../shared/miscellaneous.service';

class CollectionDisplay{

  constructor(
    public pid: string,
    public postDetails: PostDetails,
    public sticker: BehaviorSubject<any>,
    public colour: string,
    public sortTime: number //milliseconds to compare firestore time and Date()
  ) {}
}

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit, OnDestroy {

  // @ViewChild('dpInput') dpInput: ElementRef<HTMLElement>;

  // displayPicture$: BehaviorSubject<any>;
  // notifier$ = new Subject();
  // profileStickerLoad$ = new Subject();
  // counter: number;

  // collectionList: CollectionDisplay[];
  // profileStickers: ProfileSticker[];
  // displayPicture: any;
  // profileDetails: ProfileDetails = new ProfileDetails('proxy', new Biography('','',''));

  // dpUpload: any;
  // touched = false;

  // dpSrc: string = "/assets/default image/080708 background.png";
  // addIcon = "assets/icons/add_icon@2x.png";

  // oldPsid: string[] = [];
  // isSaving = false;

  // uid: string;
  // title: string;
  // location: string;
  // content: string;
  // username: string;

  // error: string = null;
  // oldTitle: string;
  // oldLocation: string;
  // oldContent: string;
  // stickerClickTimer: boolean = true;

  // changedDP: boolean = false;
  // changedProfileStickers: boolean = false;
  // changedProfileDetails: boolean = false;

  // stickerDelete = new Subject<number>();

  // onBoardingStep: number;
  // onBoarding: boolean = true;

  // activeNext: boolean = false;

  // constructor(private postService: PostService,
  //             private usersService: UsersService,
  //             private activityService: ActivityService,
  //             private authService: AuthService,
  //             private route: ActivatedRoute,
  //             private router: Router,
  //             private miscellaneousService: MiscellaneousService) { }

  ngOnInit(): void {
  //   this.route.params
  //   .subscribe(
  //     (params: Params) => {
  //       this.uid = params['id'];
  //       this.setUp();
  //     }, errorMessage => {
  //       console.log(errorMessage);
  //       this.handleError();
  //     });

  //   this.miscellaneousService.onBoarding$.pipe(takeUntil(this.notifier$)).subscribe(val => {
  //     this.onBoarding = val;
  //     if (val) {
  //       this.miscellaneousService.onBoardingStep$.pipe(takeUntil(this.notifier$)).subscribe(step => {
  //         this.onBoardingStep = step;
  //         this.activeNext = false;
  //         if (step != 3 && step != 5 && step != 6) {
  //           this.router.navigate(['/tutorial']);
  //         }
  //         if (step === 3) {
  //           this.miscellaneousService.onBoardingStickerCollection$.pipe(takeUntil(this.notifier$)).subscribe(collected => {
  //             setTimeout(() => {
  //               this.miscellaneousService.setPopUp(new PopUp("Lets add a profile picture real quick",
  //                                                           'Continue',
  //                                                           undefined,
  //                                                           ['routing', 'default']));
  //             }, 200);
  //           });
  //         }
  //         if (step === 5) {
  //           this.miscellaneousService.onBoardingStickerCollection$.pipe(takeUntil(this.notifier$)).subscribe(collected => {
  //             setTimeout(() => {
  //               this.miscellaneousService.setPopUp(new PopUp("Remember that sticker you collected? Try displaying it",
  //                                                           'Continue',
  //                                                           undefined,
  //                                                           ['routing', 'default']));
  //             }, 200);
  //           });
  //         }
  //         if (step === 6) {
  //           this.miscellaneousService.onBoardingStickerCollection$.pipe(takeUntil(this.notifier$)).subscribe(collected => {
  //             setTimeout(() => {
  //               this.miscellaneousService.setPopUp(new PopUp("What kind of creative are you? Tell us a little about yourself",
  //                                                           'Continue',
  //                                                           undefined,
  //                                                           ['routing', 'default']));
  //             }, 200);
  //           });
  //         }
  //       });

  //     }
  //   });

  }

  // setUp() {
  //   // Set up profile
  //   this.usersService.getProfileDetails(this.uid).pipe(takeUntil(this.notifier$))
  //   .subscribe((response: ProfileDetails) => {
  //     if (response) {
  //       this.title = response.bio.title;
  //       this.oldTitle = response.bio.title;
  //       this.location = response.bio.location;
  //       this.oldLocation = response.bio.location;
  //       this.content = response.bio.content;
  //       this.oldContent = response.bio.content;
  //       this.username = response.username;
  //     }
  //   });

  //   this.usersService.getProfileStickers(this.uid).pipe(takeUntil(this.notifier$))
  //   .subscribe((response: ProfileSticker[]) => {
  //     if (response) {
  //       this.counter = 0;
  //       this.profileStickers = response;
  //       this.getCollectionList();
  //       if (response.length > 0 && this.onBoardingStep === 5) {
  //           this.activeNext = true;
  //       }
  //     }
  //   });

  //   this.profileStickerLoad$.pipe(takeUntil(this.notifier$)) // Reorder selected stickers from collection by last order
  //   .subscribe(response => {
  //     this.counter++;
  //     if (this.counter === this.profileStickers.length) {
  //       this.profileStickers.slice().reverse().forEach(sticker => {
  //         const index = this.collectionList.findIndex(collection => {
  //           return collection.pid === sticker.pid
  //         })
  //         const tempDate = new Date();
  //         this.collectionList[index].sortTime = tempDate.getTime();
  //       })
  //     }
  //   })

  //   this.displayPicture$ = this.usersService.getDisplayPicture(this.uid);

  //   this.usersService.displayPictureLoaded().pipe(takeUntil(this.notifier$)) // Reorder selected stickers from collection by last order
  //   .subscribe(value  => {
  //     if (value && this.onBoardingStep === 3) {
  //       this.activeNext = true;
  //     };
  //   });
  // }

  // getCollectionList() {
  //   // Set up collection
  //   this.activityService.getUserCollection(this.uid).pipe(takeUntil(this.notifier$)) //get details of user collection
  //   .subscribe((response:Collection[]) => {
  //     if (response) {
  //       if (response.length === 0) {
  //         if (this.onBoardingStep === 5) {
  //           this.activeNext = true;
  //         }
  //       }
  //       this.collectionList = []; //reset collection list
  //       response.forEach(collection => {
  //         let tempPostDetails: PostDetails;
  //         let tempStickerContent: BehaviorSubject<any>;
  //         let tempColour: string;
  //         let tempMilli: number;
  //         this.postService.getPostDetails(collection.pid).pipe(takeUntil(this.notifier$))
  //         .subscribe(data => {
  //           tempPostDetails = data;
  //           tempStickerContent = this.postService.getStickerContent(collection.pid);
  //           const index = this.profileStickers.findIndex(sticker => {
  //             return sticker.pid === collection.pid
  //           })
  //           if (index === -1) {
  //             tempMilli = tempPostDetails.dateCreated.toMillis();
  //             tempColour = 'transparent'
  //           } else {
  //             const tempDate = new Date();
  //             tempMilli = tempDate.getTime(); //sort selected stickers to the top
  //             tempColour = '#53BD9C';
  //           }
  //           this.collectionList.push(new CollectionDisplay(collection.pid,
  //                                                          tempPostDetails,
  //                                                          tempStickerContent,
  //                                                          tempColour,
  //                                                          tempMilli));
  //         });
  //       });
  //     }
  //   });
  // }

  // onStickerClick(collection: CollectionDisplay) {
  //   this.changedProfileStickers = true;
  //   if (this.onBoardingStep === 5) {
  //     this.activeNext = true;
  //   }
  //   let pid = collection.pid;
  //   let index = this.profileStickers.findIndex(sticker => {
  //     return sticker.pid === pid;
  //   });
  //   if (index != -1) {
  //     this.profileStickers.splice(index,1);
  //     collection.colour = 'transparent';
  //   } else if (index === -1 && this.profileStickers.length < 5) {
  //     const selectDate = new Date();
  //     this.profileStickers.push(new ProfileSticker(pid, selectDate));
  //     collection.colour = '#53BD9C';
  //   };
  // }

  // fileUpload(event) {
  //   if (event.target.files)  {
  //     var reader = new FileReader();

  //     let file = event.target.files[0];
  //     reader.readAsDataURL(file);

  //     reader.onload = (event:any) => {
  //       if (file.size < 15*1024*1024) {
  //         this.error = null;
  //         this.displayPicture = file;
  //         this.displayPicture$.next(event.target.result);
  //         this.activeNext = true;
  //       } else {
  //         this.error ='Post file size too big! There is a 15 MB limit';
  //       }
  //     }
  //   }
  // }

  // checkUpload() {
  //   if (this.dpUpload) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  // onAddClick(event) {
  //   this.changedDP = true;
  //   this.dpInput.nativeElement.click();
  // }

  // onSubmit() {
  //   if (!this.isSaving) {
  //     if (this.title && this.title.length > 25) {
  //       return;
  //     }
  //     if (this.location && this.location.length > 25) {
  //       return;
  //     }
  //     if (this.content && this.content.length > 95) {
  //       return;
  //     }

  //     if (this.profileStickers.length > 5) { //in case of an error
  //       for (let i=0; i <= this.profileStickers.length; i++) {
  //         this.profileStickers.pop();
  //        }
  //     }

  //     this.isSaving = true;

  //     this.profileDetails.bio.title = this.title;
  //     this.profileDetails.bio.content = this.content;
  //     this.profileDetails.bio.location = this.location;
  //     this.profileDetails.username = this.username;

  //     if (this.oldTitle != this.title || this.oldLocation != this.location || this.oldContent != this.content) {
  //       this.changedProfileDetails = true;
  //     }

  //     //Update required field
  //     if (this.changedProfileStickers) {
  //       this.usersService.updateProfileSticker(this.uid,this.profileStickers);
  //     }

  //     if (this.changedProfileDetails) {
  //       this.usersService.updateProfileDetails(this.uid, this.profileDetails);
  //     }

  //     if (this.changedDP) {
  //       this.usersService.updateDisplayPicture(this.uid, this.displayPicture).pipe(takeUntil(this.notifier$))
  //       .subscribe(response => {
  //         if (response === 100 && this.isSaving) {
  //           this.usersService.updateDisplayPictureRef(this.uid, new DisplayPicture(new Date(), this.displayPicture.type));
  //           this.finishUp();
  //         }
  //       })
  //     } else {
  //       this.finishUp();
  //     }
  //   }
  // }

  // finishUp() {
  //   this.miscellaneousService.setPopUp(new PopUp('Profile updated!','okay', undefined, ['default', 'reject']));
  //   this.miscellaneousService.getPopUpInteraction().pipe(take(1)).subscribe(response => {
  //     this.isSaving = false;
  //     if (!this.onBoarding) {
  //       this.router.navigate(['/profile/'+this.uid]);
  //     } else {
  //       if (this.onBoardingStep === 3) {
  //         this.miscellaneousService.onBoardingStep$.next(4);
  //       } else if (this.onBoardingStep === 5) {
  //         this.miscellaneousService.onBoardingStep$.next(6);
  //       } else if (this.onBoardingStep === 6) {
  //         this.miscellaneousService.onBoardingStep$.next(7);
  //       }
  //     }
  //   });
  // }

  // handleError() {
  //   this.miscellaneousService.setPopUp(new PopUp("An unexpected error occurred! It is what it is...",'okay', undefined, ['default', 'reject']));
  //   this.miscellaneousService.getPopUpInteraction().pipe(take(1)).subscribe(response => {
  //     this.isSaving = false;
  //   });
  // }

  // clickNext() {
  //   if (!this.activeNext) return;
  //   this.onSubmit();
  // }

  // onDescriptionChange() {
  //   if (this.onBoardingStep === 6 && this.title.length != 0 && this.location.length != 0 && this.content.length != 0) {
  //     this.activeNext = true;
  //   }
  // }

  ngOnDestroy() {
  //   this.notifier$.next();
  //   this.notifier$.complete();
  }
}
