import { MiscellaneousService, PopUp } from 'src/app/shared/miscellaneous.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsersService } from 'src/app/shared/users.service';
import { startWith, takeUntil, first } from 'rxjs/operators';
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

  uid: string;

  notifier$ = new Subject();
  currentPage: string;
  title: string = 'Edit Profile';

  // User data
  displayPictureURL: string;
  profileStickers$: Observable<{stickers: ProfileSticker[] | string[]}> = new Observable<{stickers: ProfileSticker[] | string[]}>()
    .pipe(startWith({stickers: ['loading','loading','loading','loading','loading']}));
  bio = '';
  link = ''
  
  error: boolean = false;
  unsavedChanges: boolean = false;
  save$ = new Subject();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private usersService: UsersService,
              private auth: AngularFireAuth,
              private miscellaneousService: MiscellaneousService) { }

  async ngOnInit(): Promise<void> {
    this.route.params
      .pipe(takeUntil(this.notifier$))
      .subscribe((params) => {
        this.currentPage = params['page'];
        if (this.currentPage === 'home') this.title = 'Edit Profile';
        else if (this.currentPage === 'bio') this.title = 'Edit Bio';
        else if (this.currentPage === 'link') this.title = 'Edit link';
        else if (this.currentPage === 'dp') this.title = 'Edit DP';
        else if (this.currentPage === 'ds') this.title = 'Edit Display Stickers';
      });

    this.uid = (await this.auth.currentUser).uid; 
    this.setUpProfile(this.uid);
  }

  setUpProfile(uid: string) {
    this.profileStickers$ = this.usersService.getProfileStickers(uid)
      .pipe(startWith({stickers: ['loading','loading','loading','loading','loading']}));

    this.usersService.getProfileDetails(uid)
    .pipe(takeUntil(this.notifier$))
    .subscribe((details) => {
      if (!details) return;
      this.bio = details.description;
      this.link = details.link;
    });

    this.usersService.getDisplayPicture(uid)
      .pipe(takeUntil(this.notifier$))
      .subscribe((url) => {
        this.displayPictureURL = url;
      });
  }


  async onCancel() {
    if (!this.unsavedChanges) return this.returnHome();
    const popUpObj: PopUp = new PopUp("You have unsaved changes! Are you sure you want to cancel?","Yes","no", ['confirm', 'reject'])
    this.miscellaneousService.setPopUp(popUpObj);
    const response = await this.miscellaneousService.getPopUpInteraction()
      .pipe(first())
      .toPromise();
    if (response) {
      this.returnHome();
      this.unsavedChanges = false
    };
    this.miscellaneousService.closePopUp();  
  }

  onDone() {
    if (this.unsavedChanges) this.save$.next();
    this.unsavedChanges = false;
    this.returnHome();
  }

  returnHome() {
    this.router.navigate(['/', {outlets: {modal: this.currentPage === "home" ? null : "edit/home/0"}}]);
  }

  trackByFn(index, item: ProfileSticker) {
    return !!item ? item.pid : index;
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }

}
