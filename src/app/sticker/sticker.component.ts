import { BehaviorSubject, Subject } from 'rxjs';
import { PostService } from './../shared/post.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MiscellaneousService } from '../shared/miscellaneous.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements OnInit, OnDestroy {

  @Input() pid: string;
  @Input() size: String = "24px";

  stickerSize = {};
  imageProp = {'height':'auto', 'width':'auto'};

  stickerContent: BehaviorSubject<any>;
  notifier$ = new Subject();

  onBoarding: boolean = false;
  onBoardingStep: number;

  constructor(private postService: PostService,
              private miscellaneousService: MiscellaneousService,
              private router: Router) { }

  ngOnInit(): void {
    this.stickerContent = this.postService.getStickerContent(this.pid);

    this.miscellaneousService.onBoarding$.pipe(takeUntil(this.notifier$)).subscribe(val => {
      this.onBoarding = val;
      if (val) {
        this.miscellaneousService.onBoardingStep$.pipe(takeUntil(this.notifier$)).subscribe(step => {
          this.onBoardingStep = step;
        });
      }
    });
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
    if (this.onBoarding) return;
    this.router.navigate(['/post/', this.pid]);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
