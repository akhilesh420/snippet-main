import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'url'
})
export class UrlPipe implements PipeTransform {

  transform(url: string): unknown {
    if (!url) return url
    var linkify = require('linkifyjs');
    return linkify.find(url)[0].href;
  }

}
