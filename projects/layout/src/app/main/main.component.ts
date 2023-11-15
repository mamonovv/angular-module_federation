import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @ViewChild('login', { read: ViewContainerRef }) layout!: ViewContainerRef;

  ngAfterViewInit() {
    this.loadLayout()
  }

  async loadLayout(): Promise<void> {

    const {LoginComponent} = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:3004/remoteEntry.js',
      exposedModule: './Login'
    });

    console.log(LoginComponent)

    // return ref, to interact with component
    this.layout.createComponent(LoginComponent);

}
}
