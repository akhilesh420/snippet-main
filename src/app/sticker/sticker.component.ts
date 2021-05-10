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
  @Input() location: string;

  stickerSize = {};

  stickerContent: Observable<any>;
  notifier$ = new Subject();

  constructor(private postService: PostService,
              private mixpanelService: MixpanelService,
              private router: Router) { }

  ngOnInit(): void {
    this.stickerContent = this.postService.getStickerContent(this.pid);
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
