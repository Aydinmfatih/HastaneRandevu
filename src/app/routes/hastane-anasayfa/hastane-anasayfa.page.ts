import { Component, OnInit } from '@angular/core';
import { Servis } from 'src/app/services/servis';

@Component({
  selector: 'app-hastane-anasayfa',
  templateUrl: './hastane-anasayfa.page.html',
  styleUrls: ['./hastane-anasayfa.page.scss'],
})
export class HastaneAnasayfaPage implements OnInit {

  hastaneBolumListesi = [];
  constructor(public servis: Servis) { }

  ngOnInit() {
    this.bolumListesiMethod();
  }

  bolumListesiMethod() {
    let formData = new FormData();
    formData.append("hastaneID", "2");
    this.servis.makePostRequest("/hastane/HastaneBolumListesi", formData).then(a => {
      let sonuc = a as any;
      this.hastaneBolumListesi = sonuc.SonucJSON;
    })
  }

}
