import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSort'
})
export class DateSortPipe implements PipeTransform {

  transform(value: any[], database: string = 'afs'): unknown {
    if (database === 'afs') {
      return value.sort((a, b) => b.dateCreated.toMillis() - a.dateCreated.toMillis());
    }
    else if (database === 'db') {
      return value.sort((a, b) => b.dateCreated - a.dateCreated);
    }
  }
}
