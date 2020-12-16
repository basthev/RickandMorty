import { Component, OnInit, Input } from '@angular/core';
import { GetPersonajesService } from '../../../services/get-personajes.service'
import { NextPageService } from '../../../services/next-page.service'
import { Ruta } from '../../../config';

@Component({
  selector: 'app-lista-personajes-next',
  templateUrl: './lista-personajes-next.component.html',
  styleUrls: ['./lista-personajes-next.component.css']
})
export class ListaPersonajesNextComponent implements OnInit {
   public url = Ruta;

   public personajesJson
   constructor(private GetPersonajesService: GetPersonajesService, public NextPageService : NextPageService) {
     this.GetPersonajesService.getPersonajes(`${this.url}/?page=${NextPageService.nextpage}`)
     .subscribe(respuesta =>{
       console.log("respuesta", respuesta["info"]["next"])

       this.personajesJson = respuesta["results"];

     })

   }

  ngOnInit(): void {
  }

}
