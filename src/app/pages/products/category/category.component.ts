// import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { ProductsService } from '../services/products.service';
// import { Category } from 'src/app/shared/interfaces/category.interface';

// @Component({
//   selector: 'app-category',
//   templateUrl: './category.component.html',
//   styleUrls: ['./category.component.scss']
// })
// export class CategoryComponent implements OnInit {
//   categories: Category[] = [];
//   errorMessage!: string;
//   categorias:any=[];

//   @Output() categorySelected = new EventEmitter<number>();

//   constructor(private productsService:ProductsService) { }

//   ngOnInit(): void {
//     this.getCategories();
//   }

//   getCategories(): void {
//     this.productsService.getCategories().subscribe(
//       (categories: Category[]) => {
//         // console.log('categorias:',this.categorias)
//         this.categorias = categories;
//       },
//       (error) => {
//         console.error('Error fetching categories:', error);
//       }
//     );
//   }
//   selectedCategory: number | undefined;

//   // filterProductsByCategory(category: number): void {
//   //   this.selectedCategory = category;
//   // }

//   changeCategory(category: number): void {
//     this.selectedCategory = category;
//     this.categorySelected.emit(category);
//     console.log('Categoria: ',this.selectedCategory)
//   }
// }
