import { BehaviorSubject, Observable, Subject } from 'rxjs';
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
  @Input() overrideNavigate: boolean = false;

  stickerSize = {};

  stickerContent: Observable<any>;
  notifier$ = new Subject();

  constructor(private postService: PostService,
              private miscellaneousService: MiscellaneousService,
              private router: Router) { }

  ngOnInit(): void {
    this.stickerContent = this.postService.getStickerContent(this.pid);
   }

  onClick() {
    if (this.overrideNavigate) return;
    this.router.navigate(['/post/', this.pid]);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
