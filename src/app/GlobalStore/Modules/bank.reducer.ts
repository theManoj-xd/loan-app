import { on, createReducer } from "@ngrx/store";
import * as BankActions from "./bank.action";
import { initialState } from "./bank.state";

export const bankReducer = createReducer(
    initialState,
    on(BankActions.deposit, (state, { amount }) => ({
        ...state,
        balance: state.balance + amount
    })),

    on(BankActions.withdraw, (state, { amount }) => ({
        ...state,
        balance: state.balance - amount
    })),

    on(BankActions.loadBalance, (state) => ({
        ...state,
        loading: true
    })),
    
    on(BankActions.loadBalanceSuccess, (state, { balance }) => ({
        ...state,
        loading: false,
        balance
    }))
);