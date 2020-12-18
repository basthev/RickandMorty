import { Component, OnInit } from '@angular/core';
import { NextPageService } from '../services/next-page.service'
import { GetPersonajesService } from '../services/get-personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  public personajeInfo:any

  constructor( public NextPageService: NextPageService, public GetPersonajesService: GetPersonajesService ) {}

  ngOnInit(): void {
    console.log(this.NextPageService.personajeUrl)
    this.GetPersonajesService.getPersonajes(`${this.NextPageService.personajeUrl}`)
      .subscribe(respuesta =>{
      console.log("respuesta", respuesta)
      this.personajeInfo = respuesta;
      })

  }

}
