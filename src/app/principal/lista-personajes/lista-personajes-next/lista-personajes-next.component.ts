import { Component, OnInit, Input } from '@angular/core';
import { GetPersonajesService } from '../../../services/get-personajes.service'
import { Ruta } from '../../../config';

@Component({
  selector: 'app-lista-personajes-next',
  templateUrl: './lista-personajes-next.component.html',
  styleUrls: ['./lista-personajes-next.component.css']
})
export class ListaPersonajesNextComponent implements OnInit {
   public url = Ruta.url;
   public personajesJson
   constructor(private GetPersonajesService: GetPersonajesService) {

   }

  ngOnInit(): void {
    let normal:number

    this.GetPersonajesService.pagina$.subscribe( (n) =>{

      this.GetPersonajesService.getPersonajes(`${this.url}/character/?page=${n}`)
     .subscribe(respuesta =>{
       this.personajesJson = respuesta["results"];

     })
    })

  }

}
