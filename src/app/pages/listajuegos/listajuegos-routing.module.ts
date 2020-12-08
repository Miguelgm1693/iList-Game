import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListajuegosPage } from './listajuegos.page';

const routes: Routes = [
  {
    path: '',
    component: ListajuegosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListajuegosPageRoutingModule {}
