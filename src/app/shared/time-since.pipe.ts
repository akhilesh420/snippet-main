import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeSince'
})
export class TimeSincePipe implements PipeTransform {


  transform(dateFrom: any): string {
    const dateTo = new Date();

    var diffMs = (dateTo.getTime() - (dateFrom.seconds)*1000); // milliseconds between now & Christmas
    console.log(dateTo.getTime(), dateFrom, diffMs);
    var diffSecs = Math.round(diffMs / 1000); // seconds
    if (diffSecs < 60) {
      if (diffSecs === 1) return diffSecs.toString() + ' sec ago'
      return diffSecs.toString() + ' secs ago'
    }

    var diffMins = Math.round(diffMs / 60000); // minutes
    if (diffMins < 60) {
      if (diffMins === 1) return diffMins.toString() + ' min ago'
      return diffMins.toString() + ' mins ago'
    }

    var diffHrs = Math.round(diffMs  / 3600000); // hours
    if (diffHrs < 24) {
      if (diffHrs === 1) return diffHrs.toString() + ' hour ago'
      return diffHrs.toString() + ' hours ago'
    }

    var diffDays = Math.round(diffMs / 86400000); // days
    if (diffDays < 30) {
      if (diffDays === 1) return diffDays.toString() + ' days ago'
      return diffDays.toString() + ' days ago'
    }

    var diffMonths = Math.round(diffMs / 2629800000); // months
    if (diffMonths < 12) {
      if (diffMonths === 1) return diffMonths.toString() + ' month ago'
      return diffMonths.toString() + ' months ago'
    }

    var diffYears = Math.round(diffMs / 31557600000); // years
      if (diffYears === 1) return diffYears.toString() + ' year ago'
      return diffYears.toString() + ' years ago'
  }

}
