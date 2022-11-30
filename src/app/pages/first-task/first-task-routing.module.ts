import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstTaskPage } from './first-task.page';

const routes: Routes = [
  {
    path: '',
    component: FirstTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstTaskPageRoutingModule {}
