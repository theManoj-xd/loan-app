import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Loan } from '../../models/loan.model';

@Component({
  selector: 'app-loan-card',
  standalone: true,
  imports: [],
  templateUrl: './loan-card.html',
  styleUrl: './loan-card.css',
})
export class LoanCardComponent {
  @Input() loan!: Loan;
  @Output() approve = new EventEmitter<Loan>();
}
