import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    value = value.toString();
    if (value.length === 0) {
      return 0;
    } else {
      // hundreds
     if (value.length > 6) {
        // millions
        return value.substr(0, value.length - 8 ) + 'M';
      } else if (value.length <= 6) {
        // thousands
        return value.substr(0, value.length - 5 ) + 'K';
      } else {
        return value.length;
      }
    }
  }
}
