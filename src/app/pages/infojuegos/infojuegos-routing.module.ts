import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfojuegosPage } from './infojuegos.page';

const routes: Routes = [
  {
    path: '',
    component: InfojuegosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfojuegosPageRoutingModule {}
