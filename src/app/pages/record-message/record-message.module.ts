import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordMessagePageRoutingModule } from './record-message-routing.module';

import { RecordMessagePage } from './record-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordMessagePageRoutingModule
  ],
  declarations: [RecordMessagePage]
})
export class RecordMessagePageModule {}
