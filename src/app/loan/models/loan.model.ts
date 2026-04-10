export interface Loan {
  id: number;
  borrowerName: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
}
 