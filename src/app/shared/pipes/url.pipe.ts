import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'url'
})
export class UrlPipe implements PipeTransform {

  transform(url: string): unknown {
    if (!url) return url
    var linkify = require('linkifyjs');
    const val = linkify.find(url);
    if (!val[0]) return url
    return val[0].href;
  }

}
