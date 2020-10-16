import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
import { DataService } from './../shared/data.service';
import { Post, PostContent, PostDetails, StickerContent, StickerDetails } from './../shared/post.model';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {

  @ViewChild('f') createForm: NgForm;
  @ViewChild('contentInput') contentInput: ElementRef<HTMLElement>;
  @ViewChild('stickerInput') stickerInput: ElementRef<HTMLElement>;

  post: Post;

  uid: string = "proxy";

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

  constructor(private dataService: DataService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub =  this.authService.user.subscribe(authRes => {
      this.uid = authRes.id;
    }, errorMessage => {
      this.handleError(errorMessage);
    });
    this.resetPost();
  }

  resetPost() {
    this.post = new Post(
      new PostDetails(this.uid,"","",new Date,0),
      new PostContent(this.postSrc),
      new StickerContent(this.stickerSrc, '0'),
      new StickerDetails(0,0,0),
      [],
      []);
  }

  amountValidation(amount: number) {
    this.amountValid = amount < this.minSticker || amount > this.maxSticker ? false : true;
    return this.amountValid;
  }

  onSubmit() {
    if (!this.isCreating) {

      this.post.postDetails.title.trim();
      this.post.postDetails.description.trim();

      if (!this.post.postContent || !this.post.postContent.content || this.post.postContent.content === this.postSrc) {
        this.error = "Trust me, click the BIG plus button";
        return;
      }
      if (!this.post.stickerContent || !this.post.stickerContent.sticker || this.post.stickerContent.sticker === this.stickerSrc) {
        this.error = "A sticker is required! Click the plus sign on the bottom right of the post";
        return;
      }
      if (!this.post.postDetails.title || this.post.postDetails.title === "") {
        this.error = "A title is required!";
        return;
      }
      if (this.post.postDetails.title && this.post.postDetails.title.length > 19) {
        this.error = "The title is too long!";
        return;
      }
      if (this.post.postDetails.description && this.post.postDetails.description.length > 240) {
        this.error = "The description is too long!";
        return;
      }
      if (!this.post.postDetails.description || this.post.postDetails.description === "") {
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
      this.post.stickerDetails = new StickerDetails(1, this.amount, 1/this.amount);
      this.dataService.postCreate(this.post, this.uid).subscribe(responseData => {
        if (responseData) {
          this.isCreating = false;
          alert("Post created successfully");
          this.router.navigate(['/explore']);
        } else {
          this.handleError('Error hogaya kya karen');
        }
      }, errorMessage => {
        this.handleError(errorMessage);
      });
    }
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
        if (file.size < 4*1024*1024) { //Firebase upload max size 10 MB
          this.error = undefined;
          this.post.postContent.content = event.target.result;
        } else {
          this.error ='Post file size too big! There is a 4 MB limit';
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
        if (file.size < 4*1024*1024) { //Firebase upload max size 10 MB
          this.error = undefined;
          this.post.stickerContent.sticker = event.target.result;
        } else {
          this.error ='Sticker file size too big! There is a 4 MB limit';
        }
      }
    }
  }

  onTitleChange() {
    this.title.trim();
    this.post.postDetails.title = this.title;
  }

  onDescriptionChange() {
    this.desc.trim();
    this.post.postDetails.description = this.desc;
  }

  handleError(error) {
    console.log(error);
    alert("Damn! An error occurred!");
    this.isCreating = false;
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
