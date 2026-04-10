import { createAction, props } from "@ngrx/store";

export const deposit =createAction(
    '[Bank] Deposit',
    props<{ amount: number }>()
);

export const withdraw = createAction(
    '[Bank] Withdraw',
    props<{ amount: number }>()
);

export const loadBalance = createAction('[Bank] Load Balance');

export const loadBalanceSuccess = createAction(
    '[Bank] Load Balance Success',
    props<{ balance: number }>()
);