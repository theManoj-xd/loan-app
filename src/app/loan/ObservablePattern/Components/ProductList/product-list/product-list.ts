import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../Services/product-service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList 
{
  productService!: ProductService;
  products$: any;
 
  constructor( productService: ProductService) {
    this.productService = productService;
    this.products$ = this.productService.products$;
  }

  addManualProducts(){
  this.productService.addProduct({
    id: Date.now(),
    productName: `Manual Product`,
    price: 999
  });
}
}
