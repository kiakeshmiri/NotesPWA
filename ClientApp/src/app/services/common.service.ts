import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
  }

}

