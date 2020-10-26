import { Subject } from 'rxjs';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() postId: number;

  userComment: string = "";
  private commentDetails: Comment;

  commentList: Comment[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.dataService.queryData('comment', "postId", this.postId)
    // .subscribe(comments => {
    //   console.log(comments);
    //   this.commentList = comments;
    // });
  }

  postComment() {
  //   if (this.userComment.trim() != "" ) {
  //     this.commentDetails = new Comment(0,0,0,this.userComment,[],new Date)
  //     this.dataService.addData('comment', this.commentDetails)
  //     .subscribe(responseData => {
  //       console.log(this.commentDetails, responseData)
  //       this.commentList.push(this.commentDetails);
  //     });
  //     this.userComment = "";
  //   }
  }
}
