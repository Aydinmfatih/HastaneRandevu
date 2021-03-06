import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hastane-anasayfa',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'hastane-anasayfa',
    loadChildren: () => import('./routes/hastane-anasayfa/hastane-anasayfa.module').then( m => m.HastaneAnasayfaPageModule)
  },
  {
    path: 'doktor-bolum',
    loadChildren: () => import('./routes/doktor-bolum/doktor-bolum.module').then( m => m.DoktorBolumPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
