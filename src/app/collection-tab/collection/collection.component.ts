import { UsersService } from './../../shared/users.service';
import { Router } from '@angular/router';
import { ProfileDetails, ProfileSticker } from './../../shared/profile.model';
import { PostDetails } from './../../shared/post.model';
import { PostService } from './../../shared/post.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Collection } from 'src/app/shared/activity.model';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { MiscellaneousService } from 'src/app/shared/miscellaneous.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit, OnDestroy {

  @Input() collection: Collection;

  pid: string;
  postDetails$: Observable<PostDetails>;
  profileDetails$: BehaviorSubject<ProfileDetails>;
  stickerContent$: BehaviorSubject<any>;

  profileStickerEdit: boolean = false;
  selectedPID: string;
  notifier$ = new Subject();
  userStickerSelected: ProfileSticker;


  constructor(private postService: PostService,
              private miscellaneousService: MiscellaneousService,
              private userService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    if (!this.collection) return;
    this.pid = this.collection.pid;
    this.postDetails$ = this.postService.getPostDetails(this.pid);
    this.stickerContent$ = this.postService.getStickerContent(this.pid);
    this.miscellaneousService.userStickerSelection.pipe(takeUntil(this.notifier$)).subscribe(value => this.userStickerSelected = value)
    this.miscellaneousService.profileStickerEdit.pipe(takeUntil(this.notifier$)).subscribe(value => this.profileStickerEdit = value)
  }

  ngOnChanges() {
    this.ngOnInit();
  }

  setUpUser(uid: string) {
    return this.profileDetails$ = this.userService.getProfileDetails(uid);
  }

  navigate() {
    if (!this.postDetails$) return;
    if (!this.profileStickerEdit) this.router.navigate(['/post/' + this.pid]);
    if (this.profileStickerEdit) this.miscellaneousService.stickerEmitted.next(this.pid);
  }

  usernameClick() {
    if (this.profileStickerEdit) return;
    this.router.navigate(["/profile/" + this.collection.collecteeID]);
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
