import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSort'
})
export class DateSortPipe implements PipeTransform {

  transform(value: any[], type: string): unknown {
 
    if (type === 'afs') { //Cloud firestore
      return value.sort((a, b) => b.dateCreated.toMillis() - a.dateCreated.toMillis());
    }
    else if (type === 'db') { //Realtime database
      return value.sort((a, b) => b.dateCreated - a.dateCreated);
    } 
    else if (type === 'collectionDisplay') { //Profile edit component collection display
      console.log('working?'); //log
      return value.sort((a, b) =>  b.sortTime - a.sortTime);
    }
  }
}
