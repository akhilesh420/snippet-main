import { map, takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
import { PostService } from './../shared/post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostDetails } from './../shared/post.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirePerformance, trace } from '@angular/fire/performance';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit, OnDestroy {

  uid$ = new BehaviorSubject<string>(null);
  pid: string;
  postsList = new Subject<PostDetails[]>(); //must include pid
  postDetailsList: PostDetails[];
  notifier$ = new Subject();

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private router: Router,
              private performance: AngularFirePerformance) { }

  async ngOnInit(): Promise<void> {

    this.pid = this.route.snapshot.params['pid'];
    this.setUp();

    this.route.params.subscribe(
      (params: Params) => {
        this.pid = params['pid']
        this.setUp();
      }, errorMessage => {
        console.log(errorMessage);
      }
    )

  }

  async setUp() {
    const trace = await this.performance.trace('PostDetails-trace');
    trace.start();
    this.postService.getPostDetails(this.pid).pipe(takeUntil(this.notifier$),
      map(changes => { //get the post detail for pid
        return { pid: this.pid, ...changes};
    })).subscribe(res => { //Need to be a list for the feed to work
      if (res.uid) {
        this.uid$.next(res.uid);
        let postDetailsList: PostDetails[] = [];
        postDetailsList.push(res);
        this.postsList.next(postDetailsList);
      } else {
        this.router.navigate(['/explore']);
      }
      trace.stop();
    })
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
    this.uid$.complete();
  }
}
