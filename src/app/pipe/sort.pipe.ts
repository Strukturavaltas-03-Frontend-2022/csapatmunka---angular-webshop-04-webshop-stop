import { Output, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe<T extends { [x: string]: any }> implements PipeTransform {

  ignoreWords(item: any, property: any): any {
    return item[property].replace(/^The |^A |^An /, "")
  }

  transform(list: T[], property: string = 'price', ascend: Boolean = true): T[] {

    if (!Array.isArray(list)) {
      return list;
    }

    if (property == 'author') {
      list.sort((a, b) => a[property].localeCompare(b[property]))
      list.sort((a, b) => a[property].split(' ').pop().localeCompare(b[property].split(' ').pop()))
    }
    else if (property == 'name') {
      list.sort((a, b) => this.ignoreWords(a, property).localeCompare(this.ignoreWords(b, property)));
    }
    else if (property == 'price' || property == 'id' || property == 'catId' || property == 'stock' || property == 'featured' || property == 'active') {
      list.sort((a, b) => a[property] - b[property])
    }
    else return list

    if (!ascend) {
      ascend = true
      return list.reverse()
    } else {
      ascend = false
      return list
    }
  }
}

