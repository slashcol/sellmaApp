import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalTigoPage } from './modal-tigo.page';

/* const routes: Routes = [
  {
    path: '',
    component: ModalTigoPage
  }
];
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
   
  ],
  declarations: [ModalTigoPage]
})
export class ModalTigoPageModule {}
