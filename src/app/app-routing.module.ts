import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'listajuegos',
    loadChildren: () => import('./pages/listajuegos/listajuegos.module').then( m => m.ListajuegosPageModule)
  },
  {
    path: 'editjuegos',
    loadChildren: () => import('./pages/editjuegos/editjuegos.module').then( m => m.EditjuegosPageModule)
  },

   {
    path: 'editjuegos/:id',
    loadChildren: () => import('./pages/editjuegos/editjuegos.module').then( m => m.EditjuegosPageModule)
  },
  {
    path: 'infojuegos',
    loadChildren: () => import('./pages/infojuegos/infojuegos.module').then( m => m.InfojuegosPageModule)
  },

  {
    path: 'infojuegos/:id',
    loadChildren: () => import('./pages/infojuegos/infojuegos.module').then( m => m.InfojuegosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


