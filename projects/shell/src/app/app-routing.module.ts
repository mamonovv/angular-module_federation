import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
        loadRemoteModule({
            type: 'manifest',
            remoteName: 'home',
            exposedModule: './Module'
        })
        .then(m => m.AppModule)
},
  {
    path: 'details/:id',
    loadChildren: () =>
        loadRemoteModule({
            type: 'manifest',
            remoteName: 'details',
            exposedModule: './Module'
        })
        .then(m => m.AppModule)
},
{
  path: 'cart',
  loadChildren: () =>
      loadRemoteModule({
          type: 'manifest',
          remoteName: 'cart',
          exposedModule: './Module'
      })
      .then(m => m.AppModule)
},

{
  path: '**',
  redirectTo: 'home'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
