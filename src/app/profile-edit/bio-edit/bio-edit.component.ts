import { UsersService } from 'src/app/shared/users.service';
import { takeUntil } from 'rxjs/operators';
import { Subject, forkJoin } from 'rxjs';
import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-bio-edit',
  templateUrl: './bio-edit.component.html',
  styleUrls: ['./bio-edit.component.css']
})
export class BioEditComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() uid: string;
  @Input() bio: string = '';
  @Input() save$: Subject<void>;
  @Output('unsavedChanges') unsavedChanges = new EventEmitter<boolean>();
  @Output('error') error = new EventEmitter<boolean>();
  @ViewChild("inputBox") inputBox: ElementRef;

  tempBio: string;
  charLimit: number = 180;

  notifier$ = new Subject();

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.tempBio = this.bio;
    this.autoGrowInput();

    this.save$
      .pipe(takeUntil(this.notifier$))
      .subscribe(() => this.saveBio())
  }

  ngOnChanges() {
    this.tempBio = this.bio;
  }

  ngAfterViewInit() {
    this.inputBox.nativeElement.focus();
  }

  ngAfterViewChecked() {
    this.autoGrowInput();
  }

  onInput() {
    this.autoGrowInput();
    this.error.emit(this.tempBio.length  > this.charLimit);
    this.unsavedChanges.emit(this.bio != this.tempBio);
  }

  autoGrowInput() {
    this.inputBox.nativeElement.style.height = 'auto';
    this.inputBox.nativeElement.style.height = this.inputBox.nativeElement.scrollHeight + 'px';
  }

  saveBio() {
    if (!this.uid || !this.tempBio) return;
    console.log(this.tempBio);
    this.usersService.updateProfileDetails(this.uid, {description: this.tempBio})
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }

}
