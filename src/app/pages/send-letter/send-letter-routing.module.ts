import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendLetterPage } from './send-letter.page';

const routes: Routes = [
  {
    path: '',
    component: SendLetterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendLetterPageRoutingModule {}
