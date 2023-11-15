import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss']
})
export class MiniCartComponent implements OnInit {

  items: undefined | any[] = undefined;

  constructor(
    public auth: AuthLibService
  ) {

  }

  ngOnInit(): void {
    this.auth.cart$.subscribe((cart: any) => {
      this.items = cart?.cartItems
    })
  }
}
