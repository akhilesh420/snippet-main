import { TitleCasePipe } from '@angular/common';
import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appTitleCase]'
})
export class TitleCaseDirective {

  constructor(
    public ngControl: NgControl,
    public titleCase: TitleCasePipe
  ) { }

  @HostListener('ngModelChange', ['$event'])
  onInputChange(value) {

    if (value && value !== '' && value.length > 0) {
      const arrStr = value.toLowerCase().split(' ');

      const titleCaseStr = this.titleCase.transform(value);
      this.ngControl.valueAccessor.writeValue(titleCaseStr);
    }
  }

}
