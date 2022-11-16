import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/classes/product';
import { GetrandomService } from 'src/app/service/getrandom.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {
  booklistAll:Product[]=this.productService.list;
  booklistCat:Product[]=[]
  booklistCaruselTop:Product[]=[]
  category:number=2

  constructor(private productService: ProductService,
              private gt:GetrandomService) { }

  ngOnInit(): void {
    this.booklistCaruselTop=this.gt.getRandom(this.booklistAll.filter(item=>(item.featured)&&(item.catId==this.category)),5)
    this.booklistCat=this.booklistAll.filter(item=>(item.catId==this.category))
  }

  onCarusRightTop():void{
    console.log('rihgt')
    this.booklistCaruselTop=this.gt.getRandom(this.booklistAll.filter(item=>(item.featured)&&(item.catId==this.category)),5)

  }

  onCarusLeftTop():void{
    console.log('left')
    this.booklistCaruselTop=this.gt.getRandom(this.booklistAll.filter(item=>(item.featured)&&(item.catId==this.category)),5)
  }



}
