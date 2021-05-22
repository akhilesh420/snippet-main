import { UsersService } from 'src/app/shared/users.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-display-picture-edit',
  templateUrl: './display-picture-edit.component.html',
  styleUrls: ['./display-picture-edit.component.css']
})
export class DisplayPictureEditComponent implements OnInit, OnChanges, OnDestroy {
  
  @Input() uid: string;
  @Input() displayPictureURL: string;
  @Input() save$: Subject<void>;
  @Output('unsavedChanges') unsavedChanges = new EventEmitter<boolean>();
  @Output('error') error$ = new EventEmitter<boolean>();

  newDisplayPictureURL:string;
  dpFile: File;

  error: boolean = false;
  removed: boolean = false;

  notifier$ = new Subject();

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.newDisplayPictureURL = this.displayPictureURL;

    this.save$
      .pipe(takeUntil(this.notifier$))
      .subscribe(() => this.onSave());
  }

  ngOnChanges() {
    this.newDisplayPictureURL = this.displayPictureURL;
  }

  onDpChange(event: any) {
    if (event.target.files)  {
      var reader = new FileReader();

      let file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = (event:any) => {
        if (file.size < 15*1024*1024) {
          this.error = undefined;
          this.dpFile = file;
          this.newDisplayPictureURL = event.target.result;
          this.error = false;
          this.removed = false;
          this.unsavedChanges.emit(true);
        } else {
          this.error = true;
        }
        this.error$.emit(this.error);
      }
    }
  }

  onDpRemove() {
    this.newDisplayPictureURL = this.usersService.placeholderDP;
    this.removed = true;
    this.unsavedChanges.emit(true);
  }

  onSave() {
    console.log(this.removed)
    if (this.removed) {
      this.usersService.removeDisplayPicture(this.uid);
    }
  }

  stopPropagation(event) {
    event.stopPropagation();
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }

}
