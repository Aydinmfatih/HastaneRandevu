import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HastaneAnasayfaPageRoutingModule } from './hastane-anasayfa-routing.module';

import { HastaneAnasayfaPage } from './hastane-anasayfa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HastaneAnasayfaPageRoutingModule
  ],
  declarations: [HastaneAnasayfaPage]
})
export class HastaneAnasayfaPageModule {}
