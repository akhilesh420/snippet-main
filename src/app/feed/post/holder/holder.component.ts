import { ProfileDetails, ProfileSticker } from '../../../shared/profile.model';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.css']
})
export class HolderComponent implements OnInit, OnDestroy {

  @Input() uid: string;
  @Input() stickerSize: string;

  notifier$ = new Subject();

  profileDetails: ProfileDetails;
  profileStickers$: Observable<ProfileSticker[]>;

  @ViewChild('usernameRef') usernameSpan : ElementRef;
  maxWidth: number = 176;
  usernameCounter: number;
  username: string;
  usernameFetch: boolean;

  constructor(private usersService: UsersService,
              private router: Router) {
   }

  ngOnInit(): void {
    this.usernameFetch = false;

    this.usersService.getProfileDetails(this.uid).pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.usernameFetch = false;
      if  (response) {
        this.profileDetails = response;
        this.usernameCounter = 0;
        this.username = response.username;

        let lastUsername: string;
        let timer = setInterval(func => {
          const currentWidth = this.usernameSpan.nativeElement.offsetWidth;
          if (lastUsername != this.username && currentWidth > this.maxWidth) {
            lastUsername = this.profileDetails.username;
            ++this.usernameCounter;
            this.username = this.profileDetails.username.slice(0, this.profileDetails.username.length - this.usernameCounter)  + '...';
          } else {
            clearInterval(timer);
            this.usernameFetch = true;
          }
        })}
      });
    this.profileStickers$ = this.usersService.getProfileStickers(this.uid);
  }

  getEmptySlots(stickers) {
    return [...Array(5-stickers.length).keys()]; 
  }

  navigate() {
    this.router.navigate(['/profile/' + this.uid]);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
