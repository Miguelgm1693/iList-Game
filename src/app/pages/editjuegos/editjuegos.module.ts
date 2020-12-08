import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditjuegosPageRoutingModule } from './editjuegos-routing.module';

import { EditjuegosPage } from './editjuegos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditjuegosPageRoutingModule
  ],
  declarations: [EditjuegosPage]
})
export class EditjuegosPageModule {}
