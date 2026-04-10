import { Injectable } from '@angular/core';
import { product } from '../Modules/product.model';
import { of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private testdata: product[] = [
    { id: 1, name: '5Star', description: '5 Star Bar', price: 100 },
    { id: 2, name: 'Dairy Milk', description: 'Nuts Bar', price: 200 },
    { id: 3, name: 'Dark Chocolate', description: 'Big Pack', price: 300 },
  ];

  constructor() { }
  getProduct() {
    return of(this.testdata).pipe(delay(2000));
  }
  getProductById(id: number) {
    const product = this.testdata.find(p => p.id === id);
    return of(product).pipe(delay(2000));
  }
  addProduct(product: product) {
    this.testdata.push(product);
    return of(product).pipe(delay(2000));
  }
  updateProduct(product: product) {
    const index = this.testdata.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.testdata[index] = product;
    }
    return of(product).pipe(delay(2000));
  }
  deleteProduct(product: product) {
    const index = this.testdata.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.testdata.splice(index, 1);
    }
    return of(product).pipe(delay(2000));
  }
}
