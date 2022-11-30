import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstTaskPageRoutingModule } from './first-task-routing.module';

import { FirstTaskPage } from './first-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstTaskPageRoutingModule
  ],
  declarations: [FirstTaskPage]
})
export class FirstTaskPageModule {}
