import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ProductActions from "./product.actions";
import { delay, map, mergeMap } from "rxjs/operators";
import { ProductService } from "../Services/product-service";

@Injectable()
export class ProductEffects {
    actions = inject(Actions);
    constructor(private service: ProductService) { }
    actions$ = createEffect(() =>
        this.actions.pipe(
            ofType(ProductActions.loadProducts),
            mergeMap(() => this.service.getProduct().pipe(
                map(products => ProductActions.loadProductsSuccess({ products }))
            ))
        )
    );
}