import { Router } from '@angular/router';
import { ProfileDetails } from './../../shared/profile.model';
import { UsersService } from 'src/app/shared/users.service';
import { PostDetails } from './../../shared/post.model';
import { PostService } from './../../shared/post.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Collection } from 'src/app/shared/activity.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  @Input() collection: Collection;
  pid: string;
  postDetails$: Observable<PostDetails>;
  profileDetails$: BehaviorSubject<ProfileDetails>;
  stickerContent$: BehaviorSubject<any>;
  constructor(private postService: PostService,
              private userService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.pid = this.collection.pid;
    this.postDetails$ = this.postService.getPostDetails(this.pid);
    this.stickerContent$ = this.postService.getStickerContent(this.pid);
  }

  setUpUser(uid: string) {
    return this.profileDetails$ = this.userService.getProfileDetails(uid);
  }

  navigate() {
    if (!this.postDetails$) return;
    this.router.navigate(['/post/' + this.pid]);
  }
}
