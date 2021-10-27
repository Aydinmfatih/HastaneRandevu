import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servis } from 'src/app/services/servis';

@Component({
  selector: 'app-doktor-bolum',
  templateUrl: './doktor-bolum.page.html',
  styleUrls: ['./doktor-bolum.page.scss'],
})
export class DoktorBolumPage implements OnInit {
  bolum: any = {};
  doktorListesi = [];
  
  constructor(
    public servis: Servis,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.bolum = this.router.getCurrentNavigation().extras.state;
  }
  goDetails(){
    this.router.navigate()
  }

  ionViewWillEnter() {
    
    
    let formData = new FormData();
    formData.append('bolumID', this.bolum.BolumID);
    formData.append('hastaneID', this.bolum.HastaneID);

    // sil
   // formData.append('fatihinDizisi', JSON.stringify(this.fatihinDizisi));

    // sil

    this.servis.makePostRequest('/Doktor/DoktorListele', formData).then((a) => {
      let sonuc = a as any;
      this.doktorListesi = sonuc.SonucJSON;
    });
  }

  ngOnInit() {}
}
