import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/classes/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() oneProduct: Product = new Product;
  stockColor: string = '';
  grammarCase: string = ''

  @Input() stockText: string = 'Stock:'
  @Input() priceText: string = 'Price:'

  @Input() cardDescription: string = `An even longer text, because that's how descriptions are.`

  constructor() { }

  ngOnInit(): void {
    this.stockTextColorizer();
    this.singularCaseChecker()
  }

  stockTextColorizer(): void {
    this.stockColor = this.oneProduct.stock > 4 ? '#52d352' : '#ffb74b';
  }

  singularCaseChecker(): void {
    this.grammarCase = this.oneProduct.stock > 1
      ? 'plural' : this.oneProduct.stock === 1
        ? 'singular' : 'zero'
  }

}
