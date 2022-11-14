import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/classes/product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {
  booklistAll:Product[]=this.productService.list;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
