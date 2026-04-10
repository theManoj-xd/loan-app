import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { bankReducer } from './GlobalStore/Modules/bank.reducer';
import { BankEffect } from './GlobalStore/Modules/bank.effect';
import { routes } from './app.routes';
import { productReducer } from './ProductApp/Modules/product.reducers';
import { ProductEffects } from './ProductApp/Modules/product.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({ bank: bankReducer }),
    provideStore({ products: productReducer }),
    provideEffects([BankEffect]),
    provideEffects([ProductEffects])
  ]
};
