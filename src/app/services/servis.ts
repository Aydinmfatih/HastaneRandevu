import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Servis {

  servisAdresi = "http://localhost:47125/api";
  constructor(public http: HttpClient) {

  }

  makePostRequest(url, formData) {
    return new Promise((resolve, reject) => {
      let servisAdresiHam = url;
      url = this.servisAdresi + url;
      // var headers = new HttpHeaders();
      // headers.append('Access-Control-Allow-Origin', '*');
      // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      // headers.append('Accept', 'application/json');
      // headers.append('content-type', 'application/json');
      // let options = { headers: headers };
      this.http.post<any>(url, formData).subscribe(
        data => {

          resolve(data);

        },
        error => {
          reject(error);
        }
      )
    })
  }

  makeGetRequest(url) {
    return new Promise((resolve, reject) => {
      let servisAdresiHam = url;
      url = this.servisAdresi + url;
      this.http.get<any>(url).subscribe(
        data => {

          resolve(data);

        },
        error => {
          reject(error);
        }
      )
    })
  }
}
