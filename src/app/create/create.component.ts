import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostDetails, StickerDetails, CustomMetadata } from './../shared/post.model';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../shared/post.service';
import { MiscellaneousService, PopUp } from '../shared/miscellaneous.service';
import { take, takeUntil } from 'rxjs/operators';

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
  stickerContent: File;

  contentMetadata: CustomMetadata;
  stickerMetadata: CustomMetadata;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private auth: AngularFireAuth,
              private postService: PostService,
              private miscellaneousService: MiscellaneousService) { }

  ngOnInit(): void {

    this.auth.onAuthStateChanged((user) => {
      if (user) return this.uid = user.uid;
      else return this.uid = undefined;
    })

    this.route.params
    .subscribe(
      (params: Params) => {
        this.currentStep = params['step'];
        console.log(this.currentStep, this.stepCounter);
        this.nextActive = false;
        this.error = undefined;

        if (!(this.currentStep === 'content' || this.currentStep === 'description' || this.currentStep === 'sticker')) {
          this.router.navigate(['/create/content']);
        }
        if (this.stepCounter === 0  && !(this.currentStep === 'content')) {
          this.router.navigate(['/create/content']);
        }
        if (this.stepCounter != 2 && this.currentStep === 'sticker') {
          this.router.navigate(['/create/content']);
        }

        if (this.currentStep === 'content') {
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

      if (!file) return;

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

  contentFileDetails(file: File, event, og_file) {
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

  async handleError(error) {
    this.miscellaneousService.setPopUp(new PopUp("An unexpected error occurred! It is what it is...",'okay', undefined, ['default', 'reject']));
    await this.miscellaneousService.getPopUpInteraction().pipe(take(1)).toPromise();
    this.isCreating = false;
  }

  async nextClick() {
    if (this.isCreating) return;
    this.isCreating = true;

    if (this.currentStep === 'content') {

      if (!this.storageFile) return this.onCreateError("Trust me, click the BIG plus button");

      const dimensions = await this.miscellaneousService.getDimension(this.storageFile, this.storageFile.type);
      this.contentMetadata = new CustomMetadata(this.uid, dimensions.width.toString(), dimensions.height.toString());

      this.error = undefined;
      ++this.stepCounter;
      this.isCreating = false;
      return this.router.navigate(['/create/description']);
    }

    if (this.currentStep === 'description') {
      if (!this.title || this.title === "") return this.onCreateError("A title is required!");

      if (this.title && this.title.length > 19) return this.onCreateError("The title is too long!");

      if (this.desc && this.desc.length > 240) return this.onCreateError("The description is too long!");

      if (!this.desc || this.desc === "") {
        this.miscellaneousService.setPopUp(new PopUp("You didn't add a description! Are you sure you want to post?",'Yes','No',['confirm', 'reject']));
        const res = await this.miscellaneousService.getPopUpInteraction().pipe(take(1)).toPromise();
        if (!res) return this.isCreating = false;
      }

      this.error = undefined;
      ++this.stepCounter;
      this.isCreating = false;
      return this.router.navigate(['/create/sticker']);
    }

    if (this.currentStep == 'sticker') {
      if (!this.stickerContent || !this.stickerContent) return this.onCreateError("A sticker is required! Click the plus sign on the bottom right of the post");


      const dimensions = await this.miscellaneousService.getDimension(this.stickerContent, this.stickerContent.type);
      this.stickerMetadata = new CustomMetadata(this.uid, dimensions.width.toString(), dimensions.height.toString());

      if (!Number.isInteger(this.amount)) return this.onCreateError("Number of stickers must be whole numbers!");

      if ((!this.amount || this.amount === null) && this.amount != 0) return this.onCreateError("Choose the number of stickers you want to release!");

      if (this.amount < this.minSticker) return this.onCreateError("Must release at least "+this.minSticker+" stickers!");

      if (this.amount > this.maxSticker) return this.onCreateError("Can only release "+this.maxSticker+" stickers! For now...");

      if (this.amount === 1) {
        this.miscellaneousService.setPopUp(new PopUp("Are you sure you want to release only 1 sticker? You will receive this 1 sticker, so no one else can collect it",'Yes','No', ['confirm', 'reject']));
        const res = await this.miscellaneousService.getPopUpInteraction().pipe(take(1)).toPromise();
        if (!res) return this.isCreating = false;
      }

      this.error = undefined;
      ++this.stepCounter;
      return this.createPost();
    }
  }

  createPost() {
    if (!this.uid) return this.router.navigate(['/auth']);
    this.postService.newPost( this.uid,
                              this.storageFile,
                              this.contentMetadata,
                              this.stickerContent,
                              this.stickerMetadata,
                              new PostDetails(this.title, this.desc),
                              new StickerDetails(this.amount, 0));

    this.miscellaneousService.setPopUp(new PopUp("You are all set! Feel free to explore but please don't close the tab while your post is being processed",'Explore', undefined, ['default', 'reject']));
    this.router.navigate(['/explore']);
    return this.isCreating = false;
  }

  previousClick() {
    if (this.isCreating) return;

    --this.stepCounter;
    if (this.currentStep === 'description') {
      this.router.navigate(['/create/content']);
      return;
    }
    if (this.currentStep === 'sticker') {
      this.router.navigate(['/create/description']);
      return;
    }
  }

  onCreateError(error) {
    this.error = error;
    return this.isCreating = false;
  }

  stopPropagation(event) {
    event.stopPropagation();
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
