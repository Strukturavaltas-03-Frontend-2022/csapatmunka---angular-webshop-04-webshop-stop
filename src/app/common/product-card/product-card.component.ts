import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/classes/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() oneProduct: Product = {
    id: 1,
    catId: 3,
    name: 'Things Fall Apart',
    author: 'Chinua Achebe',
    description: 'https://en.wikipedia.org/wiki/Things_Fall_Apart',
    image: 'https://m.media-amazon.com/images/I/919XM42JQlL.jpg',
    price: 6.99,
    stock: 0,
    featured: true,
    active: false
  };
  @Input() cardDescription: string = `An even longer text, because that's how descriptions are.`
  @Input() stockText: string = 'Stock:'
  @Input() priceText: string = 'Price:'


  constructor() { }

  ngOnInit(): void {
  }

}
