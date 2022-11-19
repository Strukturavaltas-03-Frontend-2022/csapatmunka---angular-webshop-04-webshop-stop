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
  booklistCat: Product[] = []
  booklistCaruselTop: Product[] = []
  category: number = 1

  constructor(private productService: ProductService,
    private gt: GetrandomService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(data => {
      this.booklistCaruselTop = this.gt.getRandom(data.filter(item => (item.featured) && (item.catId == this.category)), 5)
      this.booklistCat = data.filter(item => (item.catId == this.category))
    })
  }

  onCarusRightTop(): void {
    this.productService.getAll().subscribe(data => {
      this.booklistCaruselTop = this.gt.getRandom(data.filter(item => (item.featured) && (item.catId == this.category)), 5)
    })
  }

  onCarusLeftTop(): void {
    this.productService.getAll().subscribe(data => {
      this.booklistCaruselTop = this.gt.getRandom(data.filter(item => (item.featured) && (item.catId == this.category)), 5)
    })
  }
}
