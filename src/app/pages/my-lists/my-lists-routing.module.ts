import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyListsPage } from './my-lists.page';

const routes: Routes = [
  {
    path: '',
    component: MyListsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyListsPageRoutingModule {}
