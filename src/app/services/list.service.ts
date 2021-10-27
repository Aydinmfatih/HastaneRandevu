import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) { }

  dot():Observable < any[]>
{
return this.http.get<any[]>("//localhost:47125/api/Doktor/DoktorListele")
}
}

