import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthLibService {

  private API_SERVER = "http://localhost:8080"

  jwtSubject = new BehaviorSubject(null);
  jwt$ = this.jwtSubject.asObservable();

  cartSubject = new BehaviorSubject(null);
  cart$ = this.cartSubject.asObservable();
  

  get isLoggedIn() {
    return !!this.jwtSubject.value
  }

  constructor(
    private http: HttpClient,
  ) { }

  login(username: string, password: string) {
    this.http.post(`${this.API_SERVER}/auth/login`, {
      username, password
    }, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe((res: any) => {
      this.jwtSubject.next(res.access_token)
      this.getCart();
    });
  }

  getCart() {
    this.http.get(`${this.API_SERVER}/cart`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.jwtSubject.value}`
      })
    }).subscribe((res: any) => {
      this.cartSubject.next(res)
    });
  }

  addToCart(id: number) {
    this.http.post(`${this.API_SERVER}/cart`, {
      id
    }, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.jwtSubject.value}`
      })
    }).subscribe(() => {
      this.getCart();
    });
  }

  clearCart() {
    this.http.delete(`${this.API_SERVER}/cart`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.jwtSubject.value}`
      })
    }).subscribe(() => {
      this.getCart();
    });
  }
}
