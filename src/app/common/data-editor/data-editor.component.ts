import { Component, Input, OnInit } from '@angular/core';
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
  booklistAll: EditableProduct[] = []
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

  @Input() pageSize: number = 10;
  currentPage: number = 1;

  canWeJumpPages: Boolean = true;

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(data => {
      this.booklistAll = data
    })
  }

  getPageNumbers(): number[] {
    const pageCount: number = Math.ceil(this.booklistAll.length / this.pageSize)
    let nums: number[] = [];
    for (let i = 0; i < pageCount; i++) {
      nums[i] = i + 1
    }
    return nums
  }

  jumpToPage(pageNum: number): void {
    this.currentPage = pageNum
  }

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
    this.productService.delete(book).subscribe(() => console.log("user deleted"))
    this.productService.getAll().subscribe(data => {
      this.booklistAll = data
    })
  }

  onSaveClick(book: EditableProduct) {
    book.editable = false
    this.productService.update(book as Product).subscribe(() => console.log("user updated"))
    this.productService.getAll().subscribe(data => {
      this.booklistAll = data
    })
  }

  onSearchType(key: string) {
    //console.log(this.searchRow)
    this.canWeJumpPages = false
    this.currentPage = 1
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
    this.canWeJumpPages = true
  }


}
