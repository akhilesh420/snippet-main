import { MixpanelService } from './../../shared/mixpanel.service';
import { UsersService } from './../../shared/users.service';
import { Router } from '@angular/router';
import { ProfileSticker } from './../../shared/profile.model';
import { Feed, PostDetails } from './../../shared/post.model';
import { PostService } from './../../shared/post.service';
import { Component, Input, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MiscellaneousService } from 'src/app/shared/miscellaneous.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit, OnDestroy {

  @Input() feed: Feed;
  pid: string;
  uid: string;
  postDetails$: Observable<PostDetails>;
  username$: Observable<{username: string}>;
  stickerContent$: Observable<string>;

  profileStickerEdit: boolean = false;
  selectedPID: string;
  notifier$ = new Subject();
  userStickerSelected: ProfileSticker;


  constructor(private postService: PostService,
              private miscellaneousService: MiscellaneousService,
              private userService: UsersService,
              private router: Router,
              private mixpanelService: MixpanelService) { }

  ngOnInit(): void {
    if (!this.feed || !this.feed.pid) return;
    this.pid = this.feed.pid;
    this.uid = this.feed.creatorID;
    this.postDetails$ = this.postService.getPostDetails(this.pid);
    this.stickerContent$ = this.postService.getStickerContent(this.pid);
    this.username$ = this.userService.getUsername(this.uid);
    this.miscellaneousService.userStickerSelection.pipe(takeUntil(this.notifier$)).subscribe(value => this.userStickerSelected = value)
    this.miscellaneousService.profileStickerEdit.pipe(takeUntil(this.notifier$)).subscribe(value => this.profileStickerEdit = value)
  }

  navigate() {
    if (!this.postDetails$) return;
    if (this.profileStickerEdit) return this.miscellaneousService.stickerEmitted.next(this.pid);

     this.router.navigate(['/post/' + this.pid]);
     this. mixpanelService.setRoutingVia('collection tab');
  }

  usernameClick() {
    if (this.profileStickerEdit) return;
    this.router.navigate(["/profile/posts/" + this.uid]);

    this.mixpanelService.setRoutingVia('collection tab');
  }

  stickerSelected() {
    if (this.userStickerSelected === null) return false;
    if (this.userStickerSelected.pid === this.pid) return true;
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
