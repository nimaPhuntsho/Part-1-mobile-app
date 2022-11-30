import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvailableCarsPage } from './available-cars.page';

const routes: Routes = [
  {
    path: '',
    component: AvailableCarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvailableCarsPageRoutingModule {}
