import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('layout', { read: ViewContainerRef }) layout!: ViewContainerRef;

  title = 'shell';

  ngAfterViewInit() {
    this.loadLayout()
  }

  async loadLayout(): Promise<void> {

    const m = await loadRemoteModule({
      type: 'manifest',
      remoteName: 'layout',
      exposedModule: './Component'
    });

    // return ref, to interact with component
    this.layout.createComponent(m.MainComponent);
}
}
