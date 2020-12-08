import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfojuegosPageRoutingModule } from './infojuegos-routing.module';

import { InfojuegosPage } from './infojuegos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfojuegosPageRoutingModule
  ],
  declarations: [InfojuegosPage]
})
export class InfojuegosPageModule {}
