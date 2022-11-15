import { Injectable } from '@angular/core';
import { Category} from '../model/classes/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  list: Category[] = [
    { id: 1, name: 'ancient', description: 'ancient books'},
    { id: 2, name: 'classic', description: 'classic books'},
    { id: 3, name: 'modern', description: 'modern books'},
  ]

  constructor() { }
}
