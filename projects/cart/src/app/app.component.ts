import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cart';

  items: any[] = [];

  get itemsTotal() {
    return this.items.reduce((a,v) => a + v.quantity * v.price, 0)
  }

  constructor(
    public auth: AuthLibService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['/home'])
      return
    }

    this.auth.cart$.subscribe((cart: any) => {
      this.items = cart?.cartItems ?? []
    })
  }

  clearCart() {
    this.auth.clearCart();
  }
}
