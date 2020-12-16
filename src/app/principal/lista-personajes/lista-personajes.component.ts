import { Component, OnInit } from '@angular/core';
import { GetPersonajesService } from '../../services/get-personajes.service';
import { NextPageService } from '../../services/next-page.service'
import { Ruta } from '../../config.js';


@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})



export class ListaPersonajesComponent implements OnInit {

  public personajesJson:any
  public url = Ruta.url;
  public paginas:number;


  constructor(public GetPersonajesService: GetPersonajesService, public NextPageService : NextPageService ) {
    this.GetPersonajesService.getPersonajes(this.url)
    .subscribe(respuesta =>{
      console.log("respuesta", typeof(respuesta["results"]) )
      this.personajesJson = respuesta["results"];
      this.paginas = respuesta["info"]["pages"];
    })

  }

  ngOnInit(): void {

  }

  nextpage(){
    let next = document.getElementById("next")
    this.NextPageService.nextpage = 1;
    next.addEventListener("click", ()=>{
      this.NextPageService.nextpage = this.NextPageService.nextpage + 1;
    })
  }


}

