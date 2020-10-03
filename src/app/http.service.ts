import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  myMethod(): void {
    console.log('Called My Method');
  }
}
