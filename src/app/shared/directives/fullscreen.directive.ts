import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFullscreen]'
})
export class FullscreenDirective {

  constructor(public el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.scroll(0,100); 
    window.scrollTo(0,100);
    console.log('fullscreen');
  }

}
