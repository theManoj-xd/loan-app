import { product } from "./product.model";
import { createAction, props } from "@ngrx/store";

export const loadProducts=createAction('[Product]Load products')
export const loadProductsSuccess=createAction('[Product]Load products successfully',props<{products:product[]}>())
export const addProduct=createAction('[Product]Add product',props<{product:product}>())
export const updateProduct=createAction('[Product]Update product',props<{product:product}>())
export const deleteProduct=createAction('[Product]Delete product',props<{id:number}>())
 