import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/classes/product';
import { ProductService } from 'src/app/service/product.service';


class EditableProduct extends Product {
  editable?: boolean = false;
}




@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {
  booklistAll: EditableProduct[] = this.productService.list;
  product: Product = new Product

  searchRow = {
    id: "",
    catId: "",
    name: "",
    author: "",
    description: "",
    image: "",
    price: "",
    stock: "",
    featured: "",
    active: "",

  }




  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  /*onUpdate(product: Product): void {
    this.productService.update(product).subscribe(
      product => this.router.navigate(['/','admin']),
    );
  }*/

  onEditClick(book: EditableProduct) {
   // console.log(book)
    if (book.editable) {
      book.editable = false
    }
    else {
      book.editable = true
    }
  }

  onDeleteClick(book: Product) {
    console.log(book)
  }

  onSaveClick(book: Product) {
    console.log(book)
  }

  onSearchType(key: string) {
    //console.log(this.searchRow)
  }


  clearFilters(): void {

    this.searchRow.id = ""
    this.searchRow.catId = ""
    this.searchRow.name = ""
    this.searchRow.author = ""
    this.searchRow.description = ""
    this.searchRow.image = ""
    this.searchRow.price = ""
    this.searchRow.stock = ""
    this.searchRow.featured = ""
    this.searchRow.active = ""
  }


}
