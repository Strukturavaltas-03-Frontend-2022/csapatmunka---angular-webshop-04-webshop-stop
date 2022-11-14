import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/classes/product';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  booklistAll:Product[]=this.productService.list;
  booklistCarusel:Product[]=[]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.booklistCarusel=this.booklistAll.slice(0,5)
    //console.log(this.booklistCarusel)
  }

  onCarusRight():void{
    console.log('rihgt')
    this.booklistCarusel=this.booklistAll.slice(4,9)

  }

  onCarusLeft():void{
    console.log('left')
  }

}
