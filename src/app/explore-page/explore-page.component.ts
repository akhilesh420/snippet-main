import { FeedService } from './../feed/feed.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NavigationEnd, Router, Event as NavigationEvent } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Feed } from '../shared/post.model';
@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css']
})
export class ExplorePageComponent implements OnInit, OnDestroy {

  posts$: Observable<Feed[]> = new Observable();
  notifier$ = new Subject();

  constructor(private feedService: FeedService,
              private router: Router) { }

  ngOnInit(): void {
    this.getPosts(this.router.url);
    this.router.events
      .pipe(filter((event: NavigationEvent) => event instanceof NavigationEnd), takeUntil(this.notifier$))
      .subscribe((event: NavigationEnd) => this.getPosts(event.urlAfterRedirects));
  }

  getPosts(currentRoute: string) {
    // Explore page
    const parentRoute = currentRoute.split('/')[1];

    if (parentRoute === 'explore') return this.posts$ = this.feedService.getExplorePage();

    // Post page
    const pid = currentRoute.split('/')[2];
    if (parentRoute === 'post') return this.posts$ = this.feedService.getPostPage(pid);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }

}
