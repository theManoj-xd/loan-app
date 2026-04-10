import { Component } from '@angular/core';
import { AccountService } from '../../Services/account-service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child 
{
  balance = 0;
  constructor(private accountService: AccountService) { 
  }

  getBalance() {
    return this.accountService.getBalance();
  }
}
