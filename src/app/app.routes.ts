import { Routes } from '@angular/router';
import { LoanPageComponent } from './loan/components/loan-page/loan-page';
import { Parent } from './ServicePattern/Component/parent/parent';
import { Login } from './SingletonPattern/Components/login/login';
import { Dashboard } from './SingletonPattern/Components/dashboard/dashboard';
import { HeaderComponent } from './loan/ObservablePattern/Components/HeaderComponenet/header-component/header-component';
import { ProductList } from './loan/ObservablePattern/Components/ProductList/product-list/product-list';
import { BankGlobal } from './GlobalStore/Components/bank-global/bank-global';
import { Product } from './ProductApp/Components/product/product';
import { Test } from './OnPushandLazyLoading/test/test';

export const routes: Routes = [
    { path: 'loan', component: LoanPageComponent },
    { path: 'parent', component: Parent },
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard },
    { path: 'header', component: HeaderComponent },
    { path: 'products', component: ProductList },
    { path: 'bank', component: BankGlobal },
    { path: 'product', component: Product },
    { path: 'test', component: Test }
];
