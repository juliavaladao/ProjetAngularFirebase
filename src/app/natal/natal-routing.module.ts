import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NatalPage } from './natal.page';

const routes: Routes = [
  {
    path: '',
    component: NatalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NatalPageRoutingModule {}
