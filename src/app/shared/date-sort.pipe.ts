import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSort'
})
export class DateSortPipe implements PipeTransform {

  transform(value: any[], type: string = 'afs'): unknown {
    if (value.length === 0) {
      return value;
    }
    if (type === 'afs') {
      return value.sort((a, b) => b.dateCreated.toMillis() - a.dateCreated.toMillis());
    }
    else if (type === 'db') {
      return value.sort((a, b) => b.dateCreated - a.dateCreated);
    } 
    else if (type === 'collectionDisplay') {
      console.log(value); //log
      return value.sort((a, b) => a.postDetails.dateCreated - b.postDetails.dateCreated);
    }
  }
}
