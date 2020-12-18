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
  // @Input() size: String = "24px";

  stickerSize = {};

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

  onClick() {
    if (this.onBoarding) return;
    this.router.navigate(['/post/', this.pid]);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
