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
  public botonext:boolean = false;
  public estado:boolean = true;
  public numero = 1 ;
  public slock = document.createElement("li");
  public bnext:any ;
  public bprev:any ;

  constructor(public GetPersonajesService: GetPersonajesService, public NextPageService : NextPageService ) {



  }

  ngOnInit(): void {
    if (this.numero <= 34) {
      this.GetPersonajesService.getPersonajes(`${this.url}/character/?page=${this.numero}`)
      .subscribe(respuesta =>{
      console.log("respuesta", typeof(respuesta["results"]) )
      this.personajesJson = respuesta["results"];
      this.paginas = respuesta["info"]["pages"];
      })
    }
      
    

  }

    nextpagina(){
      if(this.numero <= 34){

      this.GetPersonajesService.pagina$.emit(this.sumar())
      this.botonext = true;
      this.estado = false;
      console.log(this.numero)
      console.log("funciona")
    }
      }
      
    returnpagina(){
      this.GetPersonajesService.pagina$.emit( this.restar() )
      this.botonext = true;
      this.estado = false;
      console.log(this.numero)
      console.log("funciona")
    }
    sumar(){
      if (this.numero == 34) {
        this.numero == 34
      }else{
       return this.numero = this.numero + 1;
      }

      
    }

    disabledboton(){
      if (this.numero == 34 ) {
      this.bnext = document.getElementById("next");
      this.bnext.classList.add("disabled") 
      
      }

      if(this.numero == 2){
      this.bprev = document.getElementById("prev");
      this.bprev.classList.remove("disabled")
      }
    }

    restar(){
      if (this.numero == 1) {

      }else{
        return this.numero = this.numero - 1;
      }
    }

    
} 

