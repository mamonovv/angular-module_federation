import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';
import { MiniCartComponent } from './components/mini-cart/mini-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MiniCartComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgHeroiconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
