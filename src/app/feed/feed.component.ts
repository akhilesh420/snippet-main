import { Observable } from 'rxjs';
import { Component, OnInit, Input, HostListener, OnChanges } from '@angular/core';
import { Post, PostDetails, Posts } from './../shared/post.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {

  @Input() postsList: Observable<PostDetails[]>; //must include pid
  batch: number = 0;
  maxBatch: number = 0;
  render: number = 2;
  renderPostsList: Posts[] = [];

  constructor() {
   }

  ngOnInit(): void {
  }


  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    // this.batch = Math.floor(window.pageYOffset / 600);
    // if (this.maxBatch < this.batch) {
    //   let index = this.batch + this.render;
    //   if (index < this.postsList.length) {
    //     this.renderPostsList.push(this.postsList[index]);
    //   } else {}
    //   console.log("Scroll Event:", this.batch);
    //   this.maxBatch = this.batch
    //   console.log('renderList',this.renderPostsList); //log
    // }
  }

}
