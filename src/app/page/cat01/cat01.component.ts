import { Component, OnInit } from '@angular/core';
import { GetrandomService } from 'src/app/service/getrandom.service';
import { Product } from '../../model/classes/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {
  booklistAll: Product[] = this.productService.list;
  booklistCat: Product[] = []
  booklistCaruselTop: Product[] = []
  category: number = 1

  constructor(private productService: ProductService,
    private gt: GetrandomService) { }

  ngOnInit(): void {
    this.booklistCaruselTop = this.gt.getRandom(this.booklistAll.filter(item => (item.featured) && (item.catId == this.category)), 5)
    this.booklistCat = this.booklistAll.filter(item => (item.catId == this.category))
  }

  onCarusRightTop(): void {
    console.log('rihgt')
    this.booklistCaruselTop = this.gt.getRandom(this.booklistAll.filter(item => (item.featured) && (item.catId == this.category)), 5)

  }

  onCarusLeftTop(): void {
    console.log('left')
    this.booklistCaruselTop = this.gt.getRandom(this.booklistAll.filter(item => (item.featured) && (item.catId == this.category)), 5)
  }


}
