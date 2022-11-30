import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyListsPageRoutingModule } from './my-lists-routing.module';

import { MyListsPage } from './my-lists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyListsPageRoutingModule
  ],
  declarations: [MyListsPage]
})
export class MyListsPageModule {}
