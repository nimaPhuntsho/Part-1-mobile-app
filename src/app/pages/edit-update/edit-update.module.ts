import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditUpdatePageRoutingModule } from './edit-update-routing.module';

import { EditUpdatePage } from './edit-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditUpdatePageRoutingModule,
  ],
  declarations: [EditUpdatePage],
})
export class EditUpdatePageModule {}
