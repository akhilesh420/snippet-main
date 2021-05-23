import { DisplayPicture } from 'src/app/shared/profile.model';
import { MiscellaneousService } from 'src/app/shared/miscellaneous.service';
import { CustomMetadata } from './../../shared/post.model';
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
  @Output('url') url$ = new EventEmitter<string>();

  newDisplayPictureURL:string;
  dpFile: File;

  error: boolean = false;
  removed: boolean = false;

  notifier$ = new Subject();

  constructor(private usersService: UsersService,
              private miscellaneousService: MiscellaneousService) { }

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

  async onSave() {
    this.url$.emit(this.newDisplayPictureURL);
    if (this.removed) {
      this.usersService.removeDisplayPicture(this.uid);
    } else {
      const dimensions = await this.miscellaneousService.getDimension(this.dpFile, this.dpFile.type);
      const customMetadata = new CustomMetadata(this.uid, dimensions.width.toString(), dimensions.height.toString());
      const displayPicture =  new DisplayPicture(this.uid, +dimensions.width, +dimensions.height, this.dpFile.type, new Date(), false)
      this.usersService.uploadDisplayPicture(this.uid, this.dpFile, customMetadata, displayPicture);
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
