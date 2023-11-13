import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewChild, ViewContainerRef, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductsLibService } from 'products-lib';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from 'server/src/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'details';
  product$?: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsLibService
  ) {}

  async ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.router.navigate(['home']);
      return
    }

    this.product$ = this.productsService.getProductById(+id)
  }
}
