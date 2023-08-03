import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { delay, tap, toArray } from 'rxjs/operators';
// import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from '../interfaces/product.interface';
import { ProductsService } from '../services/products.service';
import { Category } from 'src/app/shared/interfaces/category.interface';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.scss']
})
export class NewproductComponent implements OnInit {
  model:any = {
    name: '',
    price: 0,
    description: '',
    categoryId: 0,
    stock: 0,
    qty: 0,
    date:''
  }

  categorias: Category[] = [];
  // date!:string;
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    // this.date=new Date().toLocaleDateString();
    // console.log('date: ',this.date)
    this.getCategories();
  }

  onSubmit({ value: formData }: NgForm): void {
    console.log('Guardar', formData);
    const data: Product = {
      ...formData,
      date: this.getCurrentDay(),
    }
    this.productsService.newProduct(data)
      .pipe(
        tap(() => this.router.navigate(['/checkout/thank-you-page'])),
        delay(10),
        tap(() => window.location.reload()),

      )
      .subscribe();
  }

  private getCurrentDay(): string {
    return new Date().toLocaleDateString();
  }

  getCategories(): void {
    this.productsService.getCategories().subscribe(
      (categories: Category[]) => {
        this.categorias = categories; // Asignar las categorías obtenidas del servicio
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
}
