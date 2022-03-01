import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalRecargasPage } from './modal-recargas.page';

/* const routes: Routes = [
  {
    path: '',
    component: ModalRecargasPage
  }
]; */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ModalRecargasPage]
})
export class ModalRecargasPageModule {}
