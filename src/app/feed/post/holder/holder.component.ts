import { MixpanelService } from './../../../shared/mixpanel.service';
import { ProfileDetails, ProfileSticker } from '../../../shared/profile.model';
import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Collection } from 'src/app/shared/activity.model';

@Component({
  selector: 'app-holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.css']
})
export class HolderComponent implements OnInit, OnDestroy{

  @Input() uid: string;
  notifier$ = new Subject();

  username$: Observable<{username: string}>;
  profileStickers:{stickers: ProfileSticker[]} = {stickers: [null,null,null,null,null]};
  profileStickersLoaded: boolean = false;
  displayPicture$: Observable<any>;
  profileRoute: string;

  constructor(private usersService: UsersService,
              private mixpanelService: MixpanelService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.profileRoute = "/profile/" + this.uid;
    this.username$ = this.usersService.getUsername(this.uid);
    this.usersService.getProfileStickers(this.uid).pipe(takeUntil(this.notifier$))
      .subscribe(response => {
        this.profileStickers = response;
        this.profileStickersLoaded = true;
      });
    this.displayPicture$ = this.usersService.getDisplayPicture(this.uid);
  }

  usernameClick() {
    this.mixpanelService.setVisitProfileVia('holder list');
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
