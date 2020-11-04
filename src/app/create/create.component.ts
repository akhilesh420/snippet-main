import { BehaviorSubject, Observable, Subscription,forkJoin } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
import { PostContent, PostDetails, StickerContent, StickerDetails } from './../shared/post.model';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../shared/post.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivityService } from '../shared/activity.service';
import { Collection } from '../shared/activity.model';

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
  postContent: any;
  stickerDetails: StickerDetails;
  stickerContent: any;

  postContent$ = new BehaviorSubject<any>(null);
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

  postSrc = "assets/default image/blank_image@2x.png";
  stickerSrc = "assets/default image/blank_image@2x.png";
  addIcon = "assets/icons/add_icon@2x.png";

  postSize = {'height':'116px','width':'116px'};
  stickerSize = {'height':'57px','width':'57px'};

  userSub: Subscription;

  constructor(private router: Router,
              private authService: AuthService,
              private postService: PostService,
              private activityService: ActivityService,
              private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.userSub =  this.authService.user.pipe().subscribe(authRes => {
      this.uid = authRes.id;
    }, errorMessage => {
      this.handleError(errorMessage);
    });
    this.resetPost();
  }

  resetPost() {
    this.postDetails = new PostDetails(this.uid,"","",new Date);
    this.postContent$.next(this.postSrc);
    this.stickerContent$.next(this.stickerSrc);
    this.stickerDetails$ = new Observable(observer => {
      observer.next(new StickerDetails(0,0));
      return {unsubscribe(){}}
    });
  }

  amountValidation(amount: number) {
    this.amountValid = amount < this.minSticker || amount > this.maxSticker ? false : true;
    return this.amountValid;
  }

  onSubmit() {
    if (!this.isCreating) {

      this.postDetails.title.trim();
      this.postDetails.description.trim();

      if (!this.postContent || !this.postContent || this.postContent === this.postSrc) {
        this.error = "Trust me, click the BIG plus button";
        return;
      }
      if (!this.stickerContent || !this.stickerContent || this.stickerContent === this.stickerSrc) {
        this.error = "A sticker is required! Click the plus sign on the bottom right of the post";
        return;
      }
      if (!this.postDetails.title || this.postDetails.title === "") {
        this.error = "A title is required!";
        return;
      }
      if (this.postDetails.title && this.postDetails.title.length > 19) {
        this.error = "The title is too long!";
        return;
      }
      if (this.postDetails.description && this.postDetails.description.length > 240) {
        this.error = "The description is too long!";
        return;
      }
      if (!this.postDetails.description || this.postDetails.description === "") {
        let valid = confirm("You didn't add a description! Are you sure you want to post?");
        if (!valid) {
          return;
        }
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
        let valid = confirm("Are you sure you want to release only 1 sticker? You will receive this sticker, so no collection will be possible!");
        if (!valid) {
          return;
        }
      }

      this.isCreating = true;
      this.stickerDetails = new StickerDetails(this.amount, 0);
      this.createPost();
    }
  }

  createPost() {
    let pid = this.afs.createId();
    let pcid = this.afs.createId();
    let scid = this.afs.createId();

    let postSubs =  this.postService.addContent(pcid,this.postContent);
    let stickerSubs = this.postService.addContent(scid,this.stickerContent);

    forkJoin([postSubs, stickerSubs]).subscribe(results => {
      if (results[0] === 100 && results[1] === 100) {
        this.postService.addPostDetails(pid,this.postDetails);
        this.postService.addPostContentRef(pid, new PostContent(pcid, this.postContent.type));
        this.postService.addStickerContentRef(pid, new StickerContent(scid, this.stickerContent.type));
        this.postService.addStickerDetails(pid, this.stickerDetails);
       
        this.activityService.addActivity(pid, 'post');
        this.activityService.addCollection(new Collection(this.uid,this.uid,pid,new Date().getTime()));
      } 
    });
    
    this.router.navigate(['/explore']);
    this.isCreating = false;
  }

  onAddClick(event: any) {
    event === 'content' ? this.contentInput.nativeElement.click() : this.stickerInput.nativeElement.click();
  }

  onContentChange(event) {
    if (event.target.files)  {
      var reader = new FileReader();

      let file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = (event:any) => {
        if (file.size < 10*1024*1024) { 
          this.error = undefined; 
          this.postContent = file;
          this.postContent$.next(event.target.result);
        } else {
          this.error ='Post file size too big! There is a 10 MB limit';
        }
      }
    }
  }

  onStickerChange(event) {
    if (event.target.files)  {
      var reader = new FileReader();

      let file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = (event:any) => {
        if (file.size < 10*1024*1024) { 
          this.error = undefined;
          this.stickerContent = file;
          this.stickerContent$.next(event.target.result);
        } else {
          this.error ='Sticker file size too big! There is a 10 MB limit';
        }
      }
    }
  }

  onTitleChange() {
    this.title.trim();
    this.postDetails.title = this.title;
  }

  onDescriptionChange() {
    this.desc.trim();
    this.postDetails.description = this.desc;
  }

  handleError(error) {
    alert("Damn! An error occurred!");
    this.isCreating = false;
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
