import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BankState } from "./bank.state";

export const selectBankState = createFeatureSelector<BankState>('bank');

export const selectBalance = createSelector(
  selectBankState,
  (state: BankState) => state?.balance || 0
);

export const selectLoading = createSelector(
  selectBankState,
  (state: BankState) => state?.loading || false
);