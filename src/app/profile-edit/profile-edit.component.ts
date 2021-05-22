import { AngularFireAuth } from '@angular/fire/auth';
import { UsersService } from 'src/app/shared/users.service';
import { startWith, takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ProfileSticker } from '../shared/profile.model';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit, OnDestroy {

  notifier$ = new Subject();
  currentPage: string;
  title: string = 'Edit Profile';

  // User data
  displayPicture$: Observable<string>;
  profileStickers$: Observable<{stickers: ProfileSticker[] | string[]}> = new Observable<{stickers: ProfileSticker[] | string[]}>()
    .pipe(startWith({stickers: ['loading','loading','loading','loading','loading']}));
  bio = '';
  link = ''

  constructor(private route: ActivatedRoute,
              private usersService: UsersService,
              private auth: AngularFireAuth) { }

  async ngOnInit(): Promise<void> {
    this.route.params
      .pipe(takeUntil(this.notifier$))
      .subscribe((params) => {
        this.currentPage = params['page'];
        console.log(this.currentPage);
        if (this.currentPage === 'home') this.title = 'Edit Profile';
        else if (this.currentPage === 'bio') this.title = 'Edit Bio';
        else if (this.currentPage === 'link') this.title = 'Edit link';
        else if (this.currentPage === 'dp') this.title = 'Edit DP';
        else if (this.currentPage === 'ds') this.title = 'Edit Display Stickers';
      });

    this.setUpProfile((await this.auth.currentUser).uid);
  }

  setUpProfile(uid: string) {
    this.displayPicture$ = this.usersService.getDisplayPicture(uid);

    this.profileStickers$ = this.usersService.getProfileStickers(uid)
      .pipe(startWith({stickers: ['loading','loading','loading','loading','loading']}));

    this.usersService.getProfileDetails(uid)
    .pipe(takeUntil(this.notifier$))
    .subscribe((details) => {
      if (!details) return;
      this.bio = details.description;
      this.link = details.link;
    });
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }

}
