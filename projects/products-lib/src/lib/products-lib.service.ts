import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from 'server/src/products';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Injectable({
  providedIn: 'root',
})
export class ProductsLibService {

  private API_SERVER = "http://localhost:8080"
  private _products: Product[] = [];

  get products() {
    return this._products;
  }

  set products(data: any[]) {
    this._products = data;
  }

  constructor(
    private http: HttpClient
  ) { }

  async loadProducts(): Promise<Product[]> {
    const res = await firstValueFrom(this.http.get<Product[]>(`${this.API_SERVER}/products`));
    this.products = res;
    return this.products;
  }
}
