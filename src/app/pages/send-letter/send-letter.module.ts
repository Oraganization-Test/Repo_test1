import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendLetterPageRoutingModule } from './send-letter-routing.module';

import { SendLetterPage } from './send-letter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendLetterPageRoutingModule
  ],
  declarations: [SendLetterPage]
})
export class SendLetterPageModule {}
