import { Component, Input } from '@angular/core';
import { Product } from "../../Models/Product";
import { ProductListComponent } from "../product-list/product-list.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  @Input() productListComp: ProductListComponent = undefined

  product: Product

  ngOnInit() {
    this.product = this.productListComp.selectedProduct
  }
}
