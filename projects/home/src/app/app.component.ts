import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { ProductsLibService } from 'products-lib';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from 'server/src/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'home';

  products$?: Observable<Product[]>;
  constructor(
    private productsService: ProductsLibService,
    public auth: AuthLibService
  ) {

  }

  async ngOnInit() {
    this.products$ = this.productsService.getProducts()
  }

  addToCart(id: number) {
    this.auth.addToCart(id)
  }
}
