import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @ViewChild('login', { read: ViewContainerRef }) login!: ViewContainerRef;
  @ViewChild('cart', { read: ViewContainerRef }) cart!: ViewContainerRef;

  ngAfterViewInit() {
    this.loadLogin()
    this.loadCart();
  }

  async loadLogin(): Promise<void> {

    const {LoginComponent} = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:3004/remoteEntry.js',
      exposedModule: './Login'
    });

    // return ref, to interact with component
    this.login.createComponent(LoginComponent);
}

async loadCart(): Promise<void> {

  const {MiniCartComponent} = await loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:3004/remoteEntry.js',
    exposedModule: './MiniCart'
  });

  // return ref, to interact with component
  this.cart.createComponent(MiniCartComponent);
}
}
