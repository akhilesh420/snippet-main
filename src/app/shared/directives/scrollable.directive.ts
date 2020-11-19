import { Directive, HostListener, EventEmitter, Output, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[scrollable]'
})
export class ScrollableDirective {

  @Output() scrollPosition = new EventEmitter();
  @Input() postHeight: number;

  constructor(public el: ElementRef) { }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    try {
      const top = event.target.scrollTop;
      const height = this.el.nativeElement.scrollHeight;
      const offset = this.el.nativeElement.offsetHeight;

      this.scrollPosition.emit(top);

      // emit bottom event
      if (top > height - offset - this.postHeight) {
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

}
