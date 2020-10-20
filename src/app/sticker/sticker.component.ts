import { Subscription, Subject } from 'rxjs';
import { PostService } from './../shared/post.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StickerContent } from '../shared/post.model';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements OnInit {

  // @Input() pid: string;
  // @Input() size: String = "24px";

  // stickerSrc: any;
  // stickerSize = {};
  // placeholderImg: string = "/assets/default image/080708 background.png";
  // imageProp = {'height':'auto', 'width':'auto'};

  // subStickerContent: Subscription;

  // stickerContent = new Subject<StickerContent>();

  // constructor(private postDataService: PostDataService,
  //             private postService: PostService,
  //             private router: Router) { }

  ngOnInit(): void {
    // this.stickerSrc = this.placeholderImg;
    // this.getStickerContent();
   }

  // getStickerContent() {
  //   this.subStickerContent = this.postService.getStickerContent(this.pid).subscribe(response => {
  //     if (response) {
  //       this.stickerSrc = response.sticker;
  //     }
  //   },
  //   errorMessage => {
  //     console.log(errorMessage);
  //   });
  // }

  // onLoad(event: any) {
  //   let width = event.target.width;
  //   let height= event.target.height;
  //   if (width/height < 1) {
  //     this.imageProp.width = '100%';
  //     this.imageProp.height = 'auto';
  //   } else {
  //     this.imageProp.width = 'auto';
  //     this.imageProp.height = '100%';
  //   }
  // }

  // onClick() {
  //   this.router.navigate(['/post/', this.pid]);
  // }

  // ngOnDestroy() {
  //   if(this.subStickerContent) {this.subStickerContent.unsubscribe();}
  // }
}
