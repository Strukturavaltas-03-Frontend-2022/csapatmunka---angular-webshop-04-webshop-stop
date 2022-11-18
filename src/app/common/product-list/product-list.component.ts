import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/classes/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: Observable<Product[]> = this.productService.getAll()

  searchPhrase: string = ''
  @Input() categoryNumber: number = 1;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
