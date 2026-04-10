import { Injectable } from '@angular/core';
import { Loan } from '../../../models/loan.model';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  constructor() {}
  private loans: Loan[] = [
    {
      id: 1,
      borrowerName: 'John Doe',
      amount: 5000,
      status: 'pending'
    },
    {
      id: 2,
      borrowerName: 'Jane Smith',
      amount: 10000,
      status: 'approved'
    },
    {
      id: 3,
      borrowerName: 'Alice Johnson',
      amount: 15000,
      status: 'rejected'
    }
  ];
 
  getLoans(): Loan[] {
    return this.loans;
  }
  approveLoan(loanId: number): void {
    const loan = this.loans.find(l => l.id === loanId);
    if (loan) {
      loan.status = 'approved';
    }
  }
  
}