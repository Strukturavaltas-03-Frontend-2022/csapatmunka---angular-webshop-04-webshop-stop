import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/classes/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input()  productList:Product[]=[]

  searchPhrase:string=''

  constructor() { }

  ngOnInit(): void {
  }

}
