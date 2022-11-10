import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/classes/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() oneProduct: Product = ''
  @Input() cardImageUrl: string = 'https://m.media-amazon.com/images/I/919XM42JQlL.jpg'
  @Input() cardTitle: string = 'A long-ass text as a title placeholder'
  @Input() cardAuthor: string = 'G. R. R. R. Rowling'
  @Input() cardDescription: string = `An even longer text, because that's how descriptions are.`
  @Input() stockStatus: number = 15
  @Input() priceStatus: number = 15.99
  @Input() stockText: string = 'Stock:'
  @Input() priceText: string = 'Price:'

  constructor() { }

  ngOnInit(): void {
  }

}
