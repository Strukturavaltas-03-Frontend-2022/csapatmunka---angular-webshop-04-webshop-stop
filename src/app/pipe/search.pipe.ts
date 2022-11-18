import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/classes/product';

@Pipe({
  name: 'search'
})
export class SearchPipe<T extends { [x: string]: any }> implements PipeTransform {
  booksInCategory: Product[] = [];

  transform(value: Product[], phrase: string = '', key: string = '', category: number): Product[] {
    if (!Array.isArray(value) || !phrase || !key || !category) {
      return this.booksInCategory = value.filter(item => item.catId == category);
    }

    this.booksInCategory = value.filter(item => item.catId == category)

    phrase = phrase.toLowerCase()
    return this.booksInCategory.filter(item => item[key].toLowerCase().includes(phrase))
  }
}
