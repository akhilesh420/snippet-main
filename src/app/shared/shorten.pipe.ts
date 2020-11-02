import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, max: number): string {
    if (value.length > max) {
      return value.substr(0,max) + '...'
    }
    return value;
  }

}
