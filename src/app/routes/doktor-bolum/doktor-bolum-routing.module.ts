import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoktorBolumPage } from './doktor-bolum.page';

const routes: Routes = [
  {
    path: '',
    component: DoktorBolumPage
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoktorBolumPageRoutingModule {}
