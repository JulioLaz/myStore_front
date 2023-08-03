import { CartComponent } from './shared/components/cart/cart.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './pages/products/products.module';
import { CategoriasComponent } from './shared/components/categorias/categorias.component';
import { CategoryService } from './shared/services/category.service';
import { ProductsService } from './pages/products/services/products.service';
import { LoginComponent } from './pages/products/product/login.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    CategoriasComponent,
    LoginComponent

 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ProductsModule,
    ReactiveFormsModule,
    MatButtonModule

  ],
  exports:[HeaderComponent],
  providers: [CategoryService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
