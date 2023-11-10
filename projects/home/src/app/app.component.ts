import { Component, OnInit } from '@angular/core';
import { ProductsLibService } from 'products-lib';
import { Product } from 'server/src/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'home';

  products: Product[] = []

  constructor(
    private productsService: ProductsLibService
  ) {

  }

  async ngOnInit() {
    this.products = await this.productsService.loadProducts()
  }
}
