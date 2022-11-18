import { Component, OnInit } from '@angular/core';
import { GetrandomService } from 'src/app/service/getrandom.service';
import { Product } from '../../model/classes/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  booklistAll: Product[] = this.productService.list;
  booklistCaruselTop: Product[] = []
  booklistCaruselBottom: Product[] = []

  constructor(private productService: ProductService,
    private gt: GetrandomService) { }

  ngOnInit(): void {
    this.booklistCaruselTop = this.gt.getRandom(this.booklistAll.filter(item => item.featured), 5)
    this.booklistCaruselBottom = this.gt.getRandom(this.booklistAll, 5)
    //console.log(this.booklistCarusel)
  }

  onCarusRightTop(): void {
    console.log('rihgt')
    this.booklistCaruselTop = this.gt.getRandom(this.booklistAll.filter(item => item.featured), 5)

  }

  onCarusLeftTop(): void {
    console.log('left')
    this.booklistCaruselTop = this.gt.getRandom(this.booklistAll.filter(item => item.featured), 5)
  }

  onCarusRightBottom(): void {
    //onsole.log('rihgt')
    this.booklistCaruselBottom = this.gt.getRandom(this.booklistAll, 5)

  }

  onCarusLeftBottom(): void {
    //console.log('left')
    this.booklistCaruselBottom = this.gt.getRandom(this.booklistAll, 5)
  }




}
