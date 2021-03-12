import { PostService } from './../../../../shared/post.service';
import { Profile } from '../../../../shared/profile.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() commentDetails: Comment;

  profileDetails: Profile;
  // postDetails: Post;
  spacingSticker = "3px";

  constructor( private postService: PostService) {
   }

  ngOnInit(): void {
    // let userId = this.commentDetails.userId;
    // this.profileDetails = this.profileService.getProfile(userId);
  }

  getProfileSticker(postId: number) {
    //this.postDetails = this.postService.getPost(postId);
    // return this.postDetails.sticker;
  }

}
