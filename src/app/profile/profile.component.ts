import { PostDetails} from './../shared/post.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FeedService } from '../feed/feed.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  postsList: Observable<PostDetails[]>;
  uid: string;

  constructor(private route: ActivatedRoute,
              private feedService: FeedService) {}

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.uid = params['id'];
        this.postsList = this.feedService.getProfilePage(this.uid);
      }
    );
  }
}
