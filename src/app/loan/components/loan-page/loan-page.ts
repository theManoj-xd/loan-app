import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanService } from '../../services/loan/services/loan-service';
import { LoanCardComponent } from '../loan-card/loan-card';
import { Loan } from '../../models/loan.model';

@Component({
  selector: 'app-loan-page',
  imports: [CommonModule, LoanCardComponent],
  templateUrl: './loan-page.html',
  styleUrl: './loan-page.css',
})
export class LoanPageComponent implements OnInit {

  loans: Loan[] = [];

  constructor(private loanService: LoanService) {
   
  }

  ngOnInit() {
    this.loans = this.loanService.getLoans();
  }

  approveLoan(loanId: number): void {
    this.loanService.approveLoan(loanId);
    this.loans = this.loanService.getLoans();
  }
}
