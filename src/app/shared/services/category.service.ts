import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // categorySelected: number = 1000; // Inicialmente seleccionamos "All" (valor 1000)
  private selectedCategorySubject = new BehaviorSubject<number>(1000); // Default category
  public selectedCategory$: Observable<number> = this.selectedCategorySubject.asObservable();

  updateCategory(category: number): void {
    // this.categorySelected = category;
    this.selectedCategorySubject.next(category);
  }

}
