import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Product } from './interfaces/product.interface';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
// import { CategoryComponent } from './category/category.component';
// import { CategoriasComponent } from 'src/app/shared/components/categorias/categorias.component';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  template: `
    <!-- <app-category #categoryComponent></app-category> -->
    <section class="products">
    <app-product
      (addToCartClick)="addToCart($event)"
      [product]="product"
      *ngFor="let product of filteredProducts"
    ></app-product>
  </section>
  `,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnDestroy  {
  products: Product[] = [];
  errorMessage = '';
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategory: number = 1000;
  private subscription: Subscription | undefined;

  // @ViewChild('categoryComponent', { static: true }) categoryComponent!: CategoryComponent;
  // @ViewChild('categoriasComponent', { static: true }) categoriasComponent!: CategoriasComponent;

  constructor(
    private productSvc: ProductsService,
    private shoppingCartSvc: ShoppingCartService,
    private categoryService: CategoryService
  ) { }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.getProducts();
    // if (this.categoryComponent) {
    //   this.categoryComponent.categorySelected.subscribe((category: number) => {
    //     console.log('CAMBIANDO CATEGOTIAS')
    //     this.filterProductsByCategory(category);
    //   });
    // }
    // if (this.categoriasComponent) {
    //   this.categoriasComponent.categoriasSelected.subscribe((category: number) => {
    //     this.filterProductsByCategory(category);
    //   });
    // }
    // Subscribe directly to the selectedCategory$ observable
    this.subscription = this.categoryService.selectedCategory$.subscribe((category: number) => {
      this.selectedCategory = category;
      console.log('CAMBIANDO CATEGORIAS desde service');
      this.filterProductsByCategory(category);
    });
  }

  addToCart(product: Product): void {
    console.log('Add to cart', product);
    const productToAdd = this.filteredProducts.find(p => p.id === product.id);
    if (productToAdd) {
      this.shoppingCartSvc.updateCart(productToAdd);
    }
  }

  getProducts(): void {
    this.productSvc.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
        // this.filterProductsByCategory(); // Filtra los productos iniciales por categoría
        this.filterProductsByCategory(this.selectedCategory); // Filtra los productos iniciales por categoría
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Error al cargar los productos. Por favor, intenta de nuevo más tarde.';
        console.error('Error al obtener productos:', error);
      }
    );
  }

  filterProductsByCategory(category: number): void {
    if (category == 1000) {
      this.filteredProducts = this.products;
      console.log('product: ', this.products)
      console.log('Category: ', category)
    } else {
      this.filteredProducts = this.products.filter(p => p.categoryId === category);
    }
  }

  // filterProductsByCategory(): void {
  //   if (this.selectedCategory === 1000) {
  //     this.filteredProducts = this.products;
  //     console.log('Todos los productos: ', this.products);
  //   } else {
  //     this.filteredProducts = this.products.filter(p => p.categoryId === this.selectedCategory);
  //     console.log('Productos filtrados por categoría: ', this.filteredProducts);
  //   }
  // }

}
