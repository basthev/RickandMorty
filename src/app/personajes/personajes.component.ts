import { Component, OnInit } from '@angular/core';
import { GetPersonajesService } from '../services/get-personajes.service';
import {ActivatedRoute} from '@angular/router'
import { Ruta } from '../config.js';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  public personajeInfo:any;
  public personajeCapitulos:any;
  public url = Ruta.url;
  public capitulos ;

  constructor( public GetPersonajesService: GetPersonajesService, private _route: ActivatedRoute ) {
    console.log(this._route.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    this.GetPersonajesService.getPersonajes(`${this.url}/character/${this._route.snapshot.paramMap.get('id')}`)
      .subscribe(respuesta =>{

      this.personajeInfo = [respuesta];
      this.personajeCapitulos = respuesta["episode"]
      this.capitulos = this.personajeCapitulos.map(function(capitulo) {

        return  capitulo = [ `capitulo ${capitulo.substr(40, 42)}`, capitulo]
      })
      console.log(this.capitulos)
      })

  }


}
