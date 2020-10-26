import { PostService } from './../../../shared/post.service';
import { Profile } from '../../../shared/profile.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.css']
})
export class HolderComponent implements OnInit {

  @Input() userId: number;
  profileDetails: Profile;
  spacingSticker: String = "0px";

  constructor(private postService: PostService) {
   }

  ngOnInit(): void {
    // this.profileDetails = this.profileService.getProfile(this.userId);
    }

  getProfileSticker(postId: number) {
    // return this.postService.getPost(postId).sticker;
  }

}
