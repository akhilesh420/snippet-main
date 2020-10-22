import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PostService } from './../shared/post.service';
import { ActivatedRoute, Params } from '@angular/router';
import { PostDetails } from './../shared/post.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit, OnDestroy {
  
  uid$ = new Subject<string>();
  pid: string;
  postsList = new Subject<PostDetails[]>(); //must include pid
  postDetailsList: PostDetails[];
  notifier$ = new Subject();

  constructor(private postService: PostService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

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

  setUp() {
    this.postService.getPostDetails(this.pid).pipe(takeUntil(this.notifier$),
      map(changes => { //get the post detail for pid
        return { pid: this.pid, ...changes};
    })).subscribe(res => { //Need to be a list for the feed to work
      this.uid$.next(res.uid);
      let postDetailsList: PostDetails[] = [];
      postDetailsList.push(res);
      this.postsList.next(postDetailsList);
    })
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
    this.uid$.complete();
  }
}
