import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordMessagePage } from './record-message.page';

const routes: Routes = [
  {
    path: '',
    component: RecordMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordMessagePageRoutingModule {}
