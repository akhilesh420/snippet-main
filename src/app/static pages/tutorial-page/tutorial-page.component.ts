import { AuthService } from './../../auth/auth.service';
import { PostDetails } from './../../shared/post.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MiscellaneousService, PopUp } from 'src/app/shared/miscellaneous.service';
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

  messageTop1: string;
  messageTop2: string;
  messageBottom1: string;
  messageBottom2: string;

  activeNext: boolean = false;
  pid: string = 'CMesTkvauogVljEX54IE';

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

    this.miscellaneousService.onBoarding$.pipe(takeUntil(this.notifier$)).subscribe(val => {
      if (!val) {
        this.router.navigate(['/explore']);
      }
    });

    this.miscellaneousService.onBoardingStep$.pipe(takeUntil(this.notifier$)).subscribe(step => {
      this.onBoardingStep = step;
      this.activeNext = false;
      if (step === 0) {
        setTimeout(() => this.activeNext = true, 5000);
      }
      if (step === 1) {
        this.router.navigate(['/auth/' + this.miscellaneousService.exclusiveId]);
        return;
      }
      if (step === 2) {
        this.feedService.getPostPage(this.pid).pipe(takeUntil(this.notifier$)).subscribe(details => {
          this.postDetails = details[0];
          this.loadingPost = false;
        });
        this.messageTop1 = 'Each post has a unique sticker that go along with it.'
        this.messageTop2 ='The bar shows how many stickers are left';
        this.messageBottom1 = null;
        this.messageBottom2 = null;
        this.miscellaneousService.onBoardingStickerCollection$.pipe(takeUntil(this.notifier$)).subscribe(collected => {
          if (!collected) return;
          this.miscellaneousService.setPopUp(new PopUp("Congratulations! You just collected your first sticker!",
                                                      'Continue',
                                                      undefined,
                                                      ['routing', 'default'],
                                                      undefined,
                                                      true));
        });
        this.miscellaneousService.getPopUpInteraction().pipe(takeUntil(this.notifier$)).subscribe(interaction => {
          this.miscellaneousService.onBoardingStep$.next(3);
        });
      }
      if (step === 3 || step == 5 || step == 6) {
        this.router.navigate(['/profile/' + this.uid + '/edit']);
      }
      if (step === 4) {
        this.feedService.getPostPage(this.pid).pipe(takeUntil(this.notifier$)).subscribe(details => {
          this.postDetails = details[0];
          this.loadingPost = false;
        });
        this.messageTop1 = 'If you were lucky, and got a sticker, you can display it!';
        this.messageTop2 = null;
        this.messageBottom1 = 'Displayed stickers always appear next to your username.';
        this.messageBottom2 = 'When clicked by anyone, they lead to the post that sticker represents.';
        setTimeout(() => this.activeNext = true, 5000);
      }
      if (step === 7) {
        this.messageTop1 = "Each post has it's own holder list";
        this.messageTop2 = null;
        this.messageBottom1 = 'If you have a posts sticker,';
        this.messageBottom2 = 'you become one of the few people on its holder list';
        setTimeout(() => this.activeNext = true, 5000);
      }
      if (step === 8) {
        this.router.navigate(['/create']);
      }
    });
  }


  clickNext() {
    if (!this.activeNext) return;
    this.miscellaneousService.onBoardingStep$.next(++this.onBoardingStep);
    console.log(this.onBoardingStep);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
