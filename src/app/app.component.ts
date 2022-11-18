import { Component, HostListener } from '@angular/core';
import { Product } from './model/classes/product';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'str-angular-project001';
  booklistAll: Product[] = this.productService.list;
  // booklistCarusel:Product[]=[]

  constructor(
    private productService: ProductService
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

    //console.log(this.booklistAll[0])
    // this.booklistCarusel=this.booklistAll.slice(0,5)
    // console.log(this.booklistCarusel)
  }

}
