import { ProfileDetails, ProfileSticker } from '../../../shared/profile.model';
import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.css']
})
export class HolderComponent implements OnInit {

  @Input() uid: string;
  @Input() stickerSize: string;
  profileDetails$?: Observable<ProfileDetails>;
  profileStickers$?: Observable<ProfileSticker[]>;

  constructor(private usersService: UsersService) {
   }

  ngOnInit(): void {
    this.profileDetails$ = this.usersService.getProfileDetails(this.uid);
    this.profileStickers$ = this.usersService.getProfileStickers(this.uid);
  }

  getEmptySlots(stickers) {
    return [...Array(5-stickers.length).keys()]; 
  }
}
