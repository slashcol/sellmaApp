import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalMovistarPage } from './modal-movistar.page';
/* 
const routes: Routes = [
  {
    path: '',
    component: ModalMovistarPage
  }
];
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ModalMovistarPage]
})
export class ModalMovistarPageModule {}
