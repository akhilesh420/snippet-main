import { BehaviorSubject, Observable, forkJoin, Subject } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostContent, PostDetails, StickerDetails } from './../shared/post.model';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../shared/post.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivityService } from '../shared/activity.service';
import { Collection } from '../shared/activity.model';
import { MiscellaneousService, PopUp } from '../shared/miscellaneous.service';
import { take, takeUntil } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
// import { faststart } from 'moov-faststart';
// import * as fs from 'fs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {

  @ViewChild('f') createForm: NgForm;
  @ViewChild('contentInput') contentInput: ElementRef<HTMLElement>;
  @ViewChild('stickerInput') stickerInput: ElementRef<HTMLElement>;

  postDetails: PostDetails;
  stickerDetails: StickerDetails;
  stickerContent: any;

  postContent$ = new BehaviorSubject<any>(null);
  postType$ = new BehaviorSubject<any>(null);
  stickerDetails$: Observable<StickerDetails>;
  stickerContent$ = new BehaviorSubject<any>(null);

  uid: string;

  maxSticker = 30;
  minSticker = 1;
  amountValid: boolean = false;
  amount = 1;
  title = "";
  desc = "";
  isCreating = false;
  error: string = null;

  notifier$ = new Subject();

  currentStep: string;
  stepCounter: number = 0;
  nextActive: boolean = false;

  storageFile: File;

  onBoarding: boolean = false;
  onBoardingStep: number;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private postService: PostService,
              private activityService: ActivityService,
              private afs: AngularFirestore,
              private miscellaneousService: MiscellaneousService,
              public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.authService.user.pipe(takeUntil(this.notifier$)).subscribe(authRes => {
      this.uid = authRes.id;
    }, errorMessage => {
      this.handleError(errorMessage);
    });

    this.miscellaneousService.onBoarding$.pipe(takeUntil(this.notifier$)).subscribe(val => {
      this.onBoarding = val;
      if (val) {
        this.miscellaneousService.onBoardingStep$.pipe(takeUntil(this.notifier$)).subscribe(step => {
          this.onBoardingStep = step;
          if (step != 8) {
            this.router.navigate(['/tutorial']);
          }
        });
      }
    })

    this.route.params
    .subscribe(
      (params: Params) => {
        this.currentStep = params['step'];
        this.nextActive = false;
        this.error = undefined;

        if (!(this.currentStep === 'content' || this.currentStep === 'description' || this.currentStep === 'sticker')) {
          this.router.navigate(['/create/content']);
        }
        if (this.stepCounter === 0  && !(this.currentStep === 'content')) {
          this.router.navigate(['/create/content']);
        }
        if (this.stepCounter === 1 && this.currentStep === 'sticker') {
          this.router.navigate(['/create/content']);
        }

        if (this.currentStep === 'content') {
          if (this.onBoarding) {
            this.miscellaneousService.setPopUp(new PopUp("It's time to make your first post !",'Okay',undefined, ['default', 'reject']));
          }
          this.nextActive = !!this.postContent$.value;
          this.postContent$.pipe(takeUntil(this.notifier$)).subscribe(value => {
            this.nextActive = !!value;
          });
        }
        if (this.currentStep === 'description') {
          this.nextActive = true;
        }
        if (this.currentStep === 'sticker') {
          this.stickerContent$.pipe(takeUntil(this.notifier$)).subscribe(value => {
            if (value) {
              const valid = this.amount >= this.minSticker && this.amount <= this.maxSticker;
              this.nextActive = valid;
            } else {
              this.nextActive = false;
            }
          });
        }
      });

  }

  amountValidation(amount: number) {
    this.amountValid = amount < this.minSticker || amount > this.maxSticker ? false : true;
    return this.amountValid;
  }

  onAddClick(event: any) {
    event === 'content' ? this.contentInput.nativeElement.click() : this.stickerInput.nativeElement.click();
  }

  onContentChange(event) {
    if (event.target.files)  {
      var reader = new FileReader();

      let file: File = event.target.files[0];
      let newFile: File;
      const og_file = file;
      reader.readAsDataURL(file);
      reader.onload = (event:any) => {

        if (file.type === 'video/quicktime') {
        // create new file with type as mp4
          const dataurl = event.target.result;
          let arr = dataurl.split(','),
              bstr = atob(arr[1]),
              n = bstr.length,
              u8arr = new Uint8Array(n);

          while(n--){
              u8arr[n] = bstr.charCodeAt(n);
          }
          newFile  = new File([u8arr], "test.mp4", {type:'video/mp4', lastModified: new Date().getDate()});
          reader.readAsDataURL(newFile);
          reader.onload = (event:any) => {
            this.contentFileDetails(newFile, event, og_file);
          }
        } else {
          this.contentFileDetails(file, event, og_file);
        }
      }
    }
  }

  contentFileDetails(file, event, og_file) {
    if (file.size < 80*1024*1024) {
      this.error = undefined;
      this.storageFile = og_file;
      this.postType$.next(file.type);
      this.postContent$.next(event.target.result);
    } else {
      this.error ='Post file size too big! There is a 80 MB limit';
    }
  }

  onStickerChange(event) {
    if (event.target.files)  {
      var reader = new FileReader();

      let file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = (event:any) => {
        if (file.size < 15*1024*1024) {
          this.error = undefined;
          this.stickerContent = file;
          this.stickerContent$.next(event.target.result);
        } else {
          this.error ='Sticker file size too big! There is a 15 MB limit';
        }
      }
    }
  }

  stickerAmountChange() {
    if (this.amount >= this.minSticker && this.amount <= this.maxSticker) {
      this.nextActive = !!this.stickerContent$.value;
    } else {
      this.nextActive = false;
    }
  }

  handleError(error) {
    this.miscellaneousService.setPopUp(new PopUp("An unexpected error occurred! It is what it is...",'okay', undefined, ['default', 'reject']));
    this.miscellaneousService.getPopUpInteraction().pipe(take(1)).subscribe(response => {
      this.isCreating = false;

    });
  }

  nextClick() {
    if (this.isCreating) return;

    if (this.currentStep === 'content') {
      if (!this.storageFile) {
        this.error = "Trust me, click the BIG plus button";
        return;
      }
      this.error = undefined;
      ++this.stepCounter;
      this.router.navigate(['/create/description']);
    }

    if (this.currentStep === 'description') {
      if (!this.title || this.title === "") {
        this.error = "A title is required!";
        return;
      }
      if (this.title && this.title.length > 19) {
        this.error = "The title is too long!";
        return;
      }
      if (this.desc && this.desc.length > 240) {
        this.error = "The description is too long!";
        return;
      }
      if (!this.desc || this.desc === "") {
        this.miscellaneousService.setPopUp(new PopUp("You didn't add a description! Are you sure you want to post?",'Yes','No',['confirm', 'reject']));
        this.miscellaneousService.getPopUpInteraction().pipe(take(1)).subscribe(response => {
          if (!response) return;
          this.error = undefined;
          ++this.stepCounter;
          this.router.navigate(['/create/sticker']);
        });
      } else {
        this.error = undefined;
        ++this.stepCounter;
        this.router.navigate(['/create/sticker']);
      }
    }
    if (this.currentStep == 'sticker') {
      if (!this.stickerContent || !this.stickerContent) {
        this.error = "A sticker is required! Click the plus sign on the bottom right of the post";
        return;
      }
      if (!Number.isInteger(this.amount)) {
        this.error = "Number of stickers must be whole numbers!";
        return;
      }
      if ((!this.amount || this.amount === null) && this.amount != 0) {
        this.error = "Choose the number of stickers you want to release!";
        return;
      }
      if (this.amount < this.minSticker) {
        this.error = "Must release at least "+this.minSticker+" stickers!";
        return
      }
      if (this.amount > this.maxSticker) {
        this.error = "Can only release "+this.maxSticker+" stickers! For now...";
        return;
      }
      if (this.amount === 1) {
        this.miscellaneousService.setPopUp(new PopUp("Are you sure you want to release only 1 sticker? You will receive this 1 sticker, so no one else can collect it",'Yes','No', ['confirm', 'reject']));
        this.miscellaneousService.getPopUpInteraction().pipe(take(1)).subscribe(response => {
          if (!response) {
            return;
          } else {
            this.confirmPost();
          }
        });
      } else {
        this.confirmPost();
      }
    }
  }

  confirmPost() {
    this.error = undefined;
    ++this.stepCounter;
    this.createPost();
  }

  createPost() {
    this.isCreating = true;
    let pid = this.afs.createId();
    let pcid = this.afs.createId();
    let scid = this.afs.createId();
    let dateCreated = new Date();

    let postSubs =  this.postService.addContent(pcid,this.storageFile);
    let stickerSubs = this.postService.addContent(scid,this.stickerContent);

    this.miscellaneousService.endOnBoarding(this.uid); //end on boarding for local machine
    this.miscellaneousService.startLoading();
    forkJoin([postSubs, stickerSubs]).subscribe(results => {
      if (results[0] === 100 && results[1] === 100) {
        this.miscellaneousService.endLoading();
        this.miscellaneousService.updateOnBoarding(this.uid); //end on boarding on server

        this.postService.addPostDetails(pid,new PostDetails(this.uid,this.title, this.desc, dateCreated, pid));
        this.postService.addPostContentRef(pid, new PostContent(pcid, this.storageFile.type));
        this.postService.addStickerContentRef(pid, new PostContent(scid, this.stickerContent.type));
        this.postService.addStickerDetails(pid, new StickerDetails(this.amount, 0));

        this.activityService.addActivity(pid, 'post');
        this.activityService.addCollection(new Collection(this.uid,this.uid,pid,dateCreated.getTime())); //add your own collection
      }
    }, error => {
      this.miscellaneousService.endLoading();
    });

    this.miscellaneousService.setPopUp(new PopUp("You are all set! Feel free to explore but please don't close the tab while your post is being processed",'Explore', undefined, ['default', 'reject']));
    this.miscellaneousService.getPopUpInteraction().pipe(take(1)).subscribe(response => {
      this.router.navigate(['/explore']);
      this.isCreating = false;
    });
  }

  previousClick() {
    if (this.isCreating) return;

    if (this.currentStep === 'description') {
      this.router.navigate(['/create/content']);
      return;
    }
    if (this.currentStep === 'sticker') {
      this.router.navigate(['/create/description']);
      return;
    }
  }

  stopPropagation(event) {
    event.stopPropagation();
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
