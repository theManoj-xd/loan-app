import { Component } from '@angular/core';
import { AccountService } from '../../Services/account-service';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent 
{
  balance = 0;
  constructor(private accountService: AccountService) { 
  }

  ngOnInit() {
    this.balance = this.accountService.getBalance();
  }
  
  deposit(): void {
    this.accountService.deposit(1000);
    this.balance = this.accountService.getBalance();
  }
  withdraw(): void {
    this.accountService.withdraw(2000);
    this.balance = this.accountService.getBalance();
    this.accountService.withdraw(12000);
    this.balance = this.accountService.getBalance();
  }
}
