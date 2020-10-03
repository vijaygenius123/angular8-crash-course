import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  breweriesBase = 'https://api.openbrewerydb.org';

  constructor(private httpClient: HttpClient) { }

  myMethod(): void {
    console.log('Called My Method');
  }

  getBreweries(): Observable<any>{
  return this.httpClient.get(this.breweriesBase + '/breweries');

}
}
