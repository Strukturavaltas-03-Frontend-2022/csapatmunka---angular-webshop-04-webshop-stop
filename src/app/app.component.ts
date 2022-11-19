import { Component, HostListener } from '@angular/core';
import { Product } from './model/classes/product';
import { ProductService } from './service/product.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'str-angular-project001';
  booklistAll: Product[] = this.productService.list;

  constructor(
    private productService: ProductService,
    public readonly viewportScroller: ViewportScroller
  ) { }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(): void {
    let element = document.querySelector('#navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

  ngOnInit(): void {
  }

  onScrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0])
  }
}
