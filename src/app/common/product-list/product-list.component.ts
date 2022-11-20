import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/classes/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() productList: Product[] = [];

  searchPhrase: string = ''
  searchProperty: string = 'author'
  currentSortOrder: string = "Ascending";

  reverseList: Boolean = true;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onReverseList(): void {
    this.reverseList ? this.reverseList = false : this.reverseList = true
    this.currentSortOrder == 'Ascending' ? this.currentSortOrder = 'Descending' : this.currentSortOrder = 'Ascending'
  }

}
