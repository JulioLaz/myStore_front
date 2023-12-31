import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './pages/products/orders/orders.component';
// import { CategoryComponent } from './pages/products/category/category.component';
import { StoresComponent } from './pages/products/stores/stores.component';
import { DetailsComponent } from './pages/checkout/details/details.component';
import { NewproductComponent } from './pages/products/product/newproduct.component';
import { AuthGuard } from './pages/products/product/auth.guard';
import { LoginComponent } from './pages/products/product/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'new-product', component: NewproductComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)
  },
  { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: 'order', component: OrdersComponent},
  // { path: 'category', component: CategoryComponent},
  { path: 'stores', component: StoresComponent},
  { path: 'details', component: DetailsComponent},
  { path: 'newProduct', component: NewproductComponent},
  // { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
