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

  @Input() collection: Collection;
  uid: string;
  notifier$ = new Subject();

  $profileDetails: Observable<ProfileDetails>;
  profileStickers: ProfileSticker[] = [null,null,null,null,null];
  $displayPicture: Observable<any>;

  constructor(private usersService: UsersService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.uid = this.collection.collectorID;
    this.$profileDetails = this.usersService.getProfileDetails(this.uid);
    this.usersService.getProfileStickers(this.uid).pipe(takeUntil(this.notifier$))
    .subscribe(response => {
      if (!response) return;
      this.profileStickers = response.stickers;
    });
    this.$displayPicture = this.usersService.getDisplayPicture(this.uid);
  }


  navigate() {
    this.router.navigate(['/profile/' + this.uid]);
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
