import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
        loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:3003/remoteEntry.js',
            exposedModule: './Module'
        })
        .then(m => m.AppModule)
},
  {
    path: 'details',
    pathMatch: 'full',
    loadChildren: () =>
        loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:3001/remoteEntry.js',
            exposedModule: './Module'
        })
        .then(m => m.AppModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
