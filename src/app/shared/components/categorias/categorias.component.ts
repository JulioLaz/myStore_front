import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/pages/products/services/products.service';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-categorias',
  templateUrl: 'categorias.component.html',
  styleUrls: ['categorias.component.scss']
})

export class CategoriasComponent implements OnInit {
  categories: Category[] = [];
  errorMessage!: string;
  categorias:any=[];

  @Output() categoriasSelected = new EventEmitter<number>();

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.productsService.getCategories().subscribe(
      (categories: Category[]) => {
        this.categorias = categories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
  selectedCategory: number | undefined; // Propiedad para almacenar la categoría seleccionada

  changeCategory(category: number): void {
    this.selectedCategory = category;
    this.categoriasSelected.emit(category);
    console.log('CATEGORIAS: ',this.selectedCategory)
  }
  }
