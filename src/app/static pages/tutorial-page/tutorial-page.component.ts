import { AuthService } from './../../auth/auth.service';
import { PostDetails } from './../../shared/post.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MiscellaneousService } from 'src/app/shared/miscellaneous.service';
import { FeedService } from 'src/app/feed/feed.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-page',
  templateUrl: './tutorial-page.component.html',
  styleUrls: ['./tutorial-page.component.css']
})
export class TutorialPageComponent implements OnInit, OnDestroy {

  notifier$ = new Subject();

  onBoardingStep: number;
  onBoardingStep$ = new Subject<number>();

  postDetails: PostDetails;
  uid: string;
  isAuthenticated: boolean;
  loadingPost: boolean;

  messageTop: string;
  messageBottom: string;

  constructor(private miscellaneousService: MiscellaneousService,
              private authService: AuthService,
              private feedService: FeedService,
              private router: Router) { }

  ngOnInit(): void {

    this.loadingPost = true;

    this.authService.user.pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.isAuthenticated = !!response;
      if (this.isAuthenticated) {
        this.uid = response.id;
      }
    });

    this.miscellaneousService.onBoardingStep$.pipe(takeUntil(this.notifier$)).subscribe(step => {
      this.onBoardingStep = step;
      if (step === 1) {
        this.router.navigate(['/auth/' + this.miscellaneousService.exclusiveId]);
        return;
      }
      if (step === 2) {
        this.feedService.getPostPage('OVci0pYOjC2UZ1fPAaTc').pipe(takeUntil(this.notifier$)).subscribe(details => {
          this.postDetails = details[0];
          this.loadingPost = false;
        });
        this.messageTop = 'Each post has a unique sticker that go along with it. The bar shows how many stickers are left';
        this.messageBottom = null;
      }
      if (step === 3) {
        this.router.navigate(['/profile/' + this.uid + '/edit']);
      }
    });
  }


  clickNext() {
    this.miscellaneousService.onBoardingStep$.next(++this.onBoardingStep);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
