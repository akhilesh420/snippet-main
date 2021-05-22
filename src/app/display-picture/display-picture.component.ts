import { AngularFirestore } from '@angular/fire/firestore';
import { UsersService } from 'src/app/shared/users.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-display-picture',
  templateUrl: './display-picture.component.html',
  styleUrls: ['./display-picture.component.css']
})
export class DisplayPictureComponent implements OnInit, OnDestroy {

  @Input() uid: string;

  displayPicture$: Observable<string>;
  deleted: boolean;

  notifier$ = new Subject();
  placeholderImg: string;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.placeholderImg = this.usersService.placeholderDP;
    this.usersService.getDisplayPictureRef(this.uid)
      .pipe(takeUntil(this.notifier$))
      .subscribe((res) => {
        this.deleted = res.deleted;
        if (!this.deleted) this.displayPicture$ = this.usersService.getDisplayPicture(this.uid);
      });
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }

}
