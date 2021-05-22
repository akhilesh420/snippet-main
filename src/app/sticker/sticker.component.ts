import { takeUntil } from 'rxjs/operators';
import { MixpanelService } from './../shared/mixpanel.service';
import { Observable, Subject } from 'rxjs';
import { PostService } from './../shared/post.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements OnInit, OnDestroy {

  @Input() pid: string;
  @Input() overrideNavigate: boolean = false;
  @Input() location?: string;

  stickerSize = {};

  url: string;
  notifier$ = new Subject();

  deleted: boolean;

  constructor(private postService: PostService,
              private mixpanelService: MixpanelService,
              private router: Router) { }

  ngOnInit(): void {
    this.postService.getPostInfo(this.pid)
      .pipe(takeUntil(this.notifier$))
      .subscribe((res) => {
        this.deleted = res.deleted;
        if (!this.deleted) {
          this.postService.getStickerContent(this.pid)
            .pipe(takeUntil(this.notifier$))
            .subscribe((url) => {
              this.url = url;
            });
        }
      });
   }

  onClick() {
    if (this.overrideNavigate) return;
    this.router.navigate(['/post/', this.pid]);
    this.mixpanelService.setRoutingVia(this.location);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
