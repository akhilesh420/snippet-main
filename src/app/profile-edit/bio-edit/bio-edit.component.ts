import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bio-edit',
  templateUrl: './bio-edit.component.html',
  styleUrls: ['./bio-edit.component.css']
})
export class BioEditComponent implements OnInit {

  @Input() bio: string = '';
  @Output('error') error = new EventEmitter<boolean>();
  @ViewChild("inputBox") inputBox: ElementRef;

  charLimit: number = 180;

  constructor() { }

  ngOnInit(): void {
  }

  onInput() {
    this.inputBox.nativeElement.style.height = 'auto';
    this.inputBox.nativeElement.style.height = this.inputBox.nativeElement.scrollHeight + 'px';
    this.error.emit(this.bio.length  > this.charLimit);
  }

}
