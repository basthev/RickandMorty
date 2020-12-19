import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Ruta } from '../../config.js';
import { GetPersonajesService } from '../../services/get-personajes.service';


@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.css']
})
export class EpisodioComponent implements OnInit {
  public url = Ruta.url;
  public episodioInfo;
  public personajesInfo;
  public personaje

  constructor(  public GetPersonajesService: GetPersonajesService, private _route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.GetPersonajesService.getPersonajes(`${this.url}/episode/${this._route.snapshot.paramMap.get('id')}`)
      .subscribe(respuesta =>{

      this.episodioInfo = [respuesta];
      this.personajesInfo =[respuesta][0]["characters"];
      this.personaje = this.personajesInfo.map(function(infopersonaje) {

        return  infopersonaje = [ ` ${infopersonaje.substr(42, 45)}`]
      })
      console.log(this.personaje)

      })
  }

}
