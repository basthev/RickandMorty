import { Component, OnInit, Input } from '@angular/core';
import { GetPersonajesService } from '../../services/get-personajes.service'
import { Ruta } from '../../config';
@Component({
  selector: 'app-personajes-episodio',
  templateUrl: './personajes-episodio.component.html',
  styleUrls: ['./personajes-episodio.component.css']
})
export class PersonajesEpisodioComponent implements OnInit {
  public url = Ruta.url;
  public personajecapInfo
  @Input() id

  constructor(private GetPersonajesService: GetPersonajesService) { }

  ngOnInit(): void {
    this.GetPersonajesService.getPersonajes(`${this.url}/character/${this.id}`)
      .subscribe(respuesta =>{

      this.personajecapInfo = [respuesta];

      })
  }

}
