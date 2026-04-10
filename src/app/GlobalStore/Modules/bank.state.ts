export interface BankState{
    balance:number;
    loading:boolean;
 
}
export const initialState: BankState = {
    balance: 1000,
    loading: false
};
 