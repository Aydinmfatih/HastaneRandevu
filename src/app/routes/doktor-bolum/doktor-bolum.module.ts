import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoktorBolumPageRoutingModule } from './doktor-bolum-routing.module';

import { DoktorBolumPage } from './doktor-bolum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoktorBolumPageRoutingModule
  ],
  declarations: [DoktorBolumPage]
})
export class DoktorBolumPageModule {}
