import { Directive, HostListener, EventEmitter, Output, ElementRef } from '@angular/core';

@Directive({
  selector: '[scrollable]'
})
export class ScrollableDirective {

  @Output() scrollPosition = new EventEmitter()
  
  constructor(public el: ElementRef) { }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    try {
      const top = event.target.scrollTop
      const height = this.el.nativeElement.scrollHeight
      const offset = this.el.nativeElement.offsetHeight

      // emit bottom event
      if (top > height - offset - 20) {
        this.scrollPosition.emit('bottom')
      }

      // emit top event
      if (top === 0) {
        this.scrollPosition.emit('top')
      }

    } catch (err) {
      console.log(err);
    }
  }

  //Used for continuos infinite scroll
  // @HostListener('scroll', ['$event'])
  // onScroll(event) {
  //   try {
  //     const yVal = event.target.scrollTop;
  //     this.scrollPosition.emit(yVal);

  //   } catch (err) {
  //     console.log(err);
  //     this.scrollPosition.emit('yVal');
  //   }
  // }

}