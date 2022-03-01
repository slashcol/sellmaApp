import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalVirginPage } from './modal-virgin.page';

/* const routes: Routes = [
  {
    path: '',
    component: ModalVirginPage
  }
]; */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  /*   RouterModule.forChild(routes) */
  ],
  declarations: [ModalVirginPage]
})
export class ModalVirginPageModule {}
