import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http'

import { Ruta} from '../config'

@Injectable({
  providedIn: 'root'
})
export class GetPersonajesService {

  public url: string;
  constructor(private http: HttpClient) {
    this.url = Ruta.url;
   }

  getPersonajes(url) {
    return this.http.get(`${url}/character`)
  }
}
