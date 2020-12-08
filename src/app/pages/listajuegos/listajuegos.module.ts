import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListajuegosPageRoutingModule } from './listajuegos-routing.module';

import { ListajuegosPage } from './listajuegos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListajuegosPageRoutingModule
  ],
  declarations: [ListajuegosPage]
})
export class ListajuegosPageModule {}
