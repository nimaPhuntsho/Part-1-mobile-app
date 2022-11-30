import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCarsPageRoutingModule } from './list-cars-routing.module';

import { ListCarsPage } from './list-cars.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCarsPageRoutingModule,
    Ng2SearchPipeModule,
  ],
  declarations: [ListCarsPage],
})
export class ListCarsPageModule {}
