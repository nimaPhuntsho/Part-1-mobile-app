import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvailableCarsPageRoutingModule } from './available-cars-routing.module';

import { AvailableCarsPage } from './available-cars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvailableCarsPageRoutingModule
  ],
  declarations: [AvailableCarsPage]
})
export class AvailableCarsPageModule {}
