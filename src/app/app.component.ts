import { Component } from '@angular/core';
import { Product } from './model/classes/product';
import {ProductService} from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'str-angular-project001';
  booklistAll:Product[]=this.productService.list;
 // booklistCarusel:Product[]=[]

  constructor(
    private productService: ProductService
  ) {}


  ngOnInit(): void {
    //console.log(this.booklistAll[0])
   // this.booklistCarusel=this.booklistAll.slice(0,5)
   // console.log(this.booklistCarusel)
  }

}
