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
  editInProgress: Boolean = false;

  sortedProperty: string = 'id'
  sortOrderSetting: Boolean = true;

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
    if (book.editable) {
      book.editable = false
    }
    else {
      book.editable = true
      this.editInProgress = true
    }
  }

  onDeleteClick(book: Product) {
    this.productService.delete(book).subscribe(() =>
      this.productService.getAll().subscribe(data => {
        this.booklistAll = data
      })
    )
    this.editInProgress = false
  }

  onSaveClick(book: EditableProduct) {
    book.editable = false
    this.productService.update(book as Product).subscribe(() =>
      this.productService.getAll().subscribe(data => {
        this.booklistAll = data
      })
    )
    this.editInProgress = false
  }

  onSearchType(key: string) {
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

  onPropertySelect(ev: Event): void {
    switch ((ev.target as Element).textContent) {
      case 'ID': this.sortedProperty = 'id';
        break;
      case 'Cat.': this.sortedProperty = 'catId';
        break;
      case 'Name': this.sortedProperty = 'name';
        break;
      case 'Author': this.sortedProperty = 'author';
        break;
      case 'Description': this.sortedProperty = 'description';
        break;
      case 'Image': this.sortedProperty = 'image';
        break;
      case 'Price': this.sortedProperty = 'price';
        break;
      case 'Stock': this.sortedProperty = 'stock';
        break;
      case 'Featured': this.sortedProperty = 'featured';
        break;
      case 'Active': this.sortedProperty = 'active';
        break;
      default: null
    }
    this.sortOrderSetting = !this.sortOrderSetting
    this.currentPage = 1
  }
}
