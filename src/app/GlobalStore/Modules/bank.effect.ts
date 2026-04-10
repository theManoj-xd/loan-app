import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable,inject } from '@angular/core';
import * as BankActions from './bank.action';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class BankEffect {

  actions$ = inject(Actions);
  constructor()
  {
    console.log('Actions Instance', this.actions$);
  }
  loadBalance$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BankActions.loadBalance),
      delay(2000), //simulate an API Call
      map(() => BankActions.loadBalanceSuccess({ balance: 5000 }))
    )
  );

  
}