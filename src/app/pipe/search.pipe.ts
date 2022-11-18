import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/classes/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

transform(booklist:Product[],phrase:string='',key:string='name'): Product[] {
    
    if(!phrase)
      return booklist

    
    phrase=phrase.toLowerCase()  
    return booklist.filter(item=>String(item[key]).toLowerCase().includes(phrase))
  }

}
