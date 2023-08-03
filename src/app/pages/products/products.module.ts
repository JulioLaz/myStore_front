import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';

import { MaterialModule } from './../../material.module';
import { OrdersComponent } from './orders/orders.component';
// import { CategoryComponent } from './category/category.component';
import { StoresComponent } from './stores/stores.component';
import { NewproductComponent } from './product/newproduct.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    OrdersComponent,
    // CategoryComponent,
    StoresComponent,
    NewproductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    FormsModule

  ]
})
export class ProductsModule { }
