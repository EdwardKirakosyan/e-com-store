import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@Component({
  selector: 'container',
  standalone: true,
  imports: [SearchComponent, CommonModule, ProductListComponent, ProductDetailComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {
  listOfString: string[] = ['mark', 'cccc', 'ddd', 'eee', 'yyy'];

  searchText: string = ''

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent

  setSearchText(value: string) {
    this.searchText = value
  }
}
