import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

import { Servis } from 'src/app/services/servis';
import { DoktorBolumPage } from '../doktor-bolum/doktor-bolum.page';

@Component({
  selector: 'app-hastane-anasayfa',
  templateUrl: './hastane-anasayfa.page.html',
  styleUrls: ['./hastane-anasayfa.page.scss'],
})
export class HastaneAnasayfaPage implements OnInit {
  hastaneBolumListesi = [];
  doktorListele = [];
  constructor(
    public servis: Servis,
    private router: Router,
    private listservice: ListService
  ) {}

  ngOnInit() {
    this.bolumListesiMethod();
    this.doktorListesiMethod();
  }

  /*routerLinkMethod(bolumAdi:string){
  let newBolumAdi = bolumAdi.replace(" ","-") // Veri tabanındaki isim boşlukluysa - ile doldur
  this.router.navigate([newBolumAdi]);
  }*/

  bolumListesiMethod() {
    let formData = new FormData();
    formData.append('hastaneID', '2');
    this.servis
      .makePostRequest('/hastane/HastaneBolumListesi', formData)
      .then((a) => {
        let sonuc = a as any;
        this.hastaneBolumListesi = sonuc.SonucJSON;
      });
  }

  bolumSayfasi(bolum) {
    this.router.navigate(['doktor-bolum'], { state: bolum });
  }

  doktorListesiMethod() {
    /*
    let formData = new FormData();
    formData.append("d", "2");
    this.servis.makePostRequest("/Doktor/DoktorListele", formData).then(a => {
      let sonuc = a as any;
      this.doktorListele= sonuc.SonucJSON;
      console.log(this.doktorListele)
      
    })*/
    // this.listservice.dot().subscribe(x =>{
    //   this.doktorListele=x;
    //   console.log(x);
    //   console.log(this.doktorListele)
    // })
  }
}
