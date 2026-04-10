import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.reducers";   


export const selectProductState=createFeatureSelector<ProductState>('products')
export const selectAllProducts=createSelector(
    selectProductState,
    (state: ProductState) => state.products
);  
 