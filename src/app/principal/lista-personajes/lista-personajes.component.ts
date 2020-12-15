import { Component, OnInit } from '@angular/core';
import { GetPersonajesService } from '../../services/get-personajes.service'
import { Ruta } from '../../config.js';
@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {
  public personajesJson:any
  public url = Ruta.url;
  constructor(private GetPersonajesService: GetPersonajesService) {
    this.GetPersonajesService.getPersonajes()
    .subscribe(respuesta =>{
      console.log("respuesta", respuesta["results"])
      this.personajesJson = respuesta["results"]
    })
  }

  ngOnInit(): void {
  }

}
