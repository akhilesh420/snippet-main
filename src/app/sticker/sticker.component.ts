import { BehaviorSubject } from 'rxjs';
import { PostService } from './../shared/post.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements OnInit {

  @Input() pid: string;
  @Input() size: String = "24px";

  stickerSize = {};
  imageProp = {'height':'auto', 'width':'auto'};

  stickerContent: BehaviorSubject<any>;

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit(): void {
    this.stickerContent = this.postService.getStickerContent(this.pid);
   }

  onLoad(event: any) {
    let width = event.target.width;
    let height= event.target.height;
    if (width/height < 1) {
      this.imageProp.width = '100%';
      this.imageProp.height = 'auto';
    } else {
      this.imageProp.width = 'auto';
      this.imageProp.height = '100%';
    }
  }

  onClick() {
    this.router.navigate(['/post/', this.pid]);
  }
}
