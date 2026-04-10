import { createReducer,on } from "@ngrx/store";
import * as ProductActions from "./product.actions";
import { product } from "./product.model";

export interface ProductState{
    products:product[];
}

export const initialState:ProductState={
    products:[]
}

export const productReducer = createReducer(
    initialState,
    on(ProductActions.loadProductsSuccess, (state, { products }) => ({
        ...state,
        products,
    })),
    on(ProductActions.addProduct, (state, { product }) => ({
        ...state,
        products: [...state.products, product],
    })),
    on(ProductActions.updateProduct, (state, { product }) => {
        const updatedProducts = state.products.map((p) =>
            p.id === product.id ? product : p
        );
        return {
            ...state,
            products: updatedProducts,
        };
    }),
    on(ProductActions.deleteProduct, (state, { id }) => {
        const filteredProducts = state.products.filter((p) => p.id !== id);
        return {
            ...state,
            products: filteredProducts,
        };
    })
);