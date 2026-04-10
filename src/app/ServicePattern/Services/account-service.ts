import { Injectable } from '@angular/core';

@Injectable(
  { providedIn: 'root' }
)
export class AccountService {
  balance!: number;
  constructor() {
    this.balance = 10000;
  }
  getBalance(): number {
    return this.balance;
  }
  deposit(amount: number): void {
    this.balance += amount;
  }
  withdraw(amount: number): void {
    if (amount > this.balance) {
      alert('Insufficient funds'); 
      return; 
    }
    this.balance -= amount;
  }
}
