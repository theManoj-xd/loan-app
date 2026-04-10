import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService 
{
  private productSubject = new BehaviorSubject<any[]>([]);

  products$ = this.productSubject.asObservable();

  constructor() {
    this.startLiveUpdates();
  }
  startLiveUpdates() {
    interval(5000).pipe(
      map(i=> ([
        { id: i, productName: `Product ${i+1}`,
          price: Math.floor(Math.random() * 1000) +100
         }
      ]))
    ).subscribe(products => {
      const currentProducts = this.productSubject.value;
      this.productSubject.next([...currentProducts, ...products]);
    });
  }
   //Add Manually
   addProduct(product:any){
    const current=this.productSubject.value;
    this.productSubject.next([...current, product]);
   }
}
