import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BankActions from '../../Modules/bank.action';
import { selectBalance, selectLoading } from '../../Modules/bank.selector';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { BankState } from '../../Modules/bank.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bank-global',
  imports: [AsyncPipe, CommonModule],
  templateUrl: './bank-global.html',
  styleUrl: './bank-global.css'
})
export class BankGlobal {
  balance!: Observable<number>;
  loading!: Observable<Boolean>;

  constructor(private store: Store<{ bank: BankState }>) {
    this.balance = this.store.select(selectBalance);
    this.loading = this.store.select(selectLoading);
  }

  deposit() {
    this.store.dispatch(BankActions.deposit({ amount: 2000 }));
  }

  withdraw() {
    this.store.dispatch(BankActions.withdraw({ amount: 1000 }));
  }

  load() {
    this.store.dispatch(BankActions.loadBalance());
  }
}
