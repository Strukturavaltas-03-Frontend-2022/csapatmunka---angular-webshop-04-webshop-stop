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
    this.productService.getAll().subscribe(data => {
      this.booklistCaruselTop = this.gt.getRandom(data.filter(item => item.featured), 5)
      this.booklistCaruselBottom = this.gt.getRandom(data.filter(item => item.active), 5)
    })
    //console.log(this.booklistCarusel)
  }

  onCarusRightTop(): void {
    console.log('rihgt')
    this.productService.getAll().subscribe(data => {
      this.booklistCaruselTop = this.gt.getRandom(data.filter(item => item.featured), 5)
    })

  }

  onCarusLeftTop(): void {
    console.log('left')
    this.productService.getAll().subscribe(data => {
      this.booklistCaruselTop = this.gt.getRandom(data.filter(item => item.featured), 5)
    })

  }

  onCarusRightBottom(): void {
    //onsole.log('rihgt')
    this.productService.getAll().subscribe(data => {
      this.booklistCaruselBottom = this.gt.getRandom(data.filter(item => item.active), 5)
    })

  }

  onCarusLeftBottom(): void {
    //console.log('left')
    this.productService.getAll().subscribe(data => {
      this.booklistCaruselBottom = this.gt.getRandom(data.filter(item => item.active), 5)
    })
  }




}
