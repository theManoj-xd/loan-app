import { Component } from '@angular/core';
import { ProductService } from '../../../Services/product-service';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header-component',
  imports: [AsyncPipe],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent 
{
  productService!: ProductService;
  count: any;
  
  constructor( productService: ProductService) {
    this.productService = productService;
    this.count = this.productService.products$.pipe(map(products => products.length));
  }
}

