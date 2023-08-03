import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { Category } from 'src/app/shared/interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiURL = 'http://localhost:3000/products';
  private apiURL_cat = 'http://localhost:3000/categories';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }

  updateStock(productId: number, stock: number): Observable<any> {
    const body = { "stock": stock };
    return this.http.patch<any>(`${this.apiURL}/${productId}`, body);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiURL_cat);
  }

  public newProduct(productData: Product): Observable<any> {
    return this.http.post<any>(this.apiURL, productData);
  }


  public delProduct(id: number): Observable<any>{
    return this.http.delete<any>(this.apiURL + `delete/${id}`);
  }

}
