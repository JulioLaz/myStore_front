import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Product } from 'src/app/pages/products/interfaces/product.interface';
import { CategoryService } from '../../services/category.service';
// import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  products: Product[] = [];
  @Input() product!: Product;
  categorias:any=[];
  quantity$ = this.shoppingCartSvc.quantityAction$;

  selectedCategory: number = 1000;

  constructor(
    private shoppingCartSvc: ShoppingCartService,
    private router: Router,
    private categoryService:CategoryService,
    ) { }

  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }

  clearCart(): void {
    this.shoppingCartSvc.clearCart();
    window.location.reload();
  }

  onCategorySelected(category: number): void {
    console.log('Desde HEADER cambio de categoria', category)
    this.categoryService.updateCategory(category); // Actualiza la categoría seleccionada en el servicio
  }
}


