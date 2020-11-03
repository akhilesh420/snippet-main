import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, maxWidth: number, currentWidth: number, counter: number): string {
    if (currentWidth > maxWidth) {
      return value.slice(0, value.length - counter) + '...'
    }
    return value;
  }
}
