import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddCategoriesPage } from './add-categories.page';

const routes: Routes = [
  {
    path: '',
    component: AddCategoriesPage
  }
];

@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddCategoriesPage]
})
export class AddCategoriesPageModule {}
