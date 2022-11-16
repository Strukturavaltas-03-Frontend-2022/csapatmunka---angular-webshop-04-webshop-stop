import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/classes/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(booklist:Product[],phrase:string=''): Product[] {
    
    if(!phrase)
      return booklist

    
    phrase=phrase.toLowerCase()  
    return booklist.filter(item=>item.name.toLowerCase().includes(phrase))
      
  }

}
