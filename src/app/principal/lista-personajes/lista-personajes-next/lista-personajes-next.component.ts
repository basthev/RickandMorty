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
   public url = Ruta.url;
   public personajesJson
   constructor(private GetPersonajesService: GetPersonajesService, public NextPageService : NextPageService) {

   }

  ngOnInit(): void {
    let normal:number

    this.GetPersonajesService.pagina$.subscribe( (n) =>{

      this.GetPersonajesService.getPersonajes(`${this.url}/character/?page=${n}`)
     .subscribe(respuesta =>{
       console.log ()
       console.log("respuesta", respuesta["info"]["next"])
       console.log(respuesta)
       this.personajesJson = respuesta["results"];

     })
    })

  }

}
