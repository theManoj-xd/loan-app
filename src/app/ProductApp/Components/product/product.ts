import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductActions from '../../Modules/product.actions';
import { selectAllProducts } from '../../Modules/product.selectors';
import { Observable } from 'rxjs';
import { product } from '../../Modules/product.model';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product 
{
  products!: Observable<product[]>;

  constructor(private store: Store) {
    this.products = this.store.select(selectAllProducts);
  }

  ngOnInit() {
     this.products = this.store.select(selectAllProducts);
    this.store.dispatch(ProductActions.loadProducts());
  }
  addProduct()
  {
    const newProduct: product = {
      id: 4,
      name: 'Food Grains',
      description: 'All Basic cooking grains',
      price: 1300
    };
    this.store.dispatch(ProductActions.addProduct({ product: newProduct }));
  }
  updateProduct()
  {
    const updatedProduct: product = {
      id: 4,
      name: 'Food Grains',
      description: 'All Basic cooking grains - Updated',
      price: 1400
    };
    this.store.dispatch(ProductActions.updateProduct({ product: updatedProduct }));
  }
  deleteProduct()
  {
    const productId = 2;
    this.store.dispatch(ProductActions.deleteProduct({ id: productId }));
  }
 
}