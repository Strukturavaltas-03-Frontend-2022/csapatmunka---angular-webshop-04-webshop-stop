import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe<T extends { [x: string]: any }> implements PipeTransform {

  transform(list: T[], property: string = 'price'): T[] {

    if (!Array.isArray(list)) {
      return list;
    }
    if (property == 'author') {
      list.sort((a, b) => a[property].localeCompare(b[property]))
      return list.sort((a, b) => a[property].split(' ').pop().localeCompare(b[property].split(' ').pop()))
    }
    else if (property == 'name') {
      return list.sort(function (a, b) {
        a = a[property].replace(/^The /, "");
        b = b[property].replace(/^The /, "");
        return a['localeCompare'](b);
      })
    }
    else if (property == 'price') {
      return list.sort((a, b) => a[property] - b[property])
    }
    else return list
  }
}

