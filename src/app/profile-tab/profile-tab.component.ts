import { UsersService } from 'src/app/shared/users.service';
import { Component, Input, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { ProfileSticker } from '../shared/profile.model';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.css']
})
export class ProfileTabComponent implements OnInit {

  @Input() uid: string;

  notifier$ = new Subject();
  username$: Observable<{username: string}>;
  displayPicture$: Observable<string>;
  profileStickers:{stickers: ProfileSticker[]} = {stickers: [null,null,null,null,null]};
  profileRoute: string;
  profileStickersLoaded: boolean = false;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.profileRoute = "/profile/" + this.uid;

    this.profileStickersLoaded = false;
    this.username$ = this.usersService.getUsername(this.uid);
    this.displayPicture$ = this.usersService.getDisplayPicture(this.uid);
    this.usersService.getProfileStickers(this.uid).pipe(takeUntil(this.notifier$))
      .subscribe(response => {
        this.profileStickers = response;
        this.profileStickersLoaded = true;
      });
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
