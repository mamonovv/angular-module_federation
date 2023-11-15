import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from 'server/src/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsLibService {

  private API_SERVER = "http://localhost:8080"
  
  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<Product[]>(`${this.API_SERVER}/products`);
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.API_SERVER}/products/${id}`);
  }
}
