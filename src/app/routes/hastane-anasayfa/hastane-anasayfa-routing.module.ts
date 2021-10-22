import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HastaneAnasayfaPage } from './hastane-anasayfa.page';

const routes: Routes = [
  {
    path: '',
    component: HastaneAnasayfaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HastaneAnasayfaPageRoutingModule {}
