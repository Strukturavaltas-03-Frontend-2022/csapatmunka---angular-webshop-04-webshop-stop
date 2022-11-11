import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/classes/product';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Output() leftClick:EventEmitter<boolean>=new EventEmitter();
  @Output() rightClick:EventEmitter<boolean>=new EventEmitter();

  @Input()  productList:Product[]=[]

  test_array:string[]=['a','b','c','d','e'];

  constructor() { }

  ngOnInit(): void {
  }

  onLeftClick()
  {
    this.leftClick.emit(true);
    //console.log('left')
  }

  onRightClick()
  {
    this.rightClick.emit(true);
   // console.log('right')
  }

}
