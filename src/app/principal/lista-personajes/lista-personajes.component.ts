import { Component, OnInit, } from '@angular/core';
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
  public slock:any ;
  public bnext:any ;
  public bprev:any ;

  constructor(public GetPersonajesService: GetPersonajesService, public NextPageService : NextPageService ) {



  }

  ngOnInit(): void {
    //funcion para definir la primera pagina
    if (this.numero <= 34) {
      this.GetPersonajesService.getPersonajes(`${this.url}/character/?page=${this.numero}`)
      .subscribe(respuesta =>{
      console.log("respuesta", typeof(respuesta["results"]) )
      this.personajesJson = respuesta["results"];
      this.paginas = respuesta["info"]["pages"];
      })
    }
  }

    //funcion para definir el numero de la pagina
    nextpagina(){
      if(this.numero <= 34){

      this.GetPersonajesService.pagina$.emit(this.sumar())
      this.botonext = true;
      this.estado = false;
      console.log(this.numero)
      console.log("funciona")
    }
      }
    //Funcion para definir el regreso de pagina
    returnpagina(){
      this.GetPersonajesService.pagina$.emit( this.restar() )
      this.botonext = true;
      this.estado = false;
      console.log(this.numero)
      console.log("funciona")
    }
    botonprevnext(){
      this.bnext = document.getElementById("next");
      this.bprev = document.getElementById("prev");
      this.GetPersonajesService.pagina$.subscribe(respuesta =>{
        console.log(respuesta)
        if (respuesta == 34 ) {
        this.bnext.classList.add("disabled")
        }
        if(respuesta <= 34) {
        this.bnext.classList.remove("disabled")
        }
        if(respuesta >= 2){
        this.bprev.classList.remove("disabled")
        }
        if(respuesta == 1){
          this.bprev.classList.add("disabled")
        }
      })
      }

    //Funcion para sumar el indice del cambio de pagina
    sumar(){
      if (this.numero == 34) {
        this.numero == 34
      }else{
       return this.numero = this.numero + 1;
      }
    }
    //Funcion para restar el indice del cambio de pagina
    restar(){
      if (this.numero == 1) {

      }else{
        return this.numero = this.numero - 1;
      }
    }
    //Funcionalidades paginacion


    //Funcion de personaje

    enviarPersonaje(url){
      this.NextPageService.personajeUrl = url;
      console.log(url)
    }


}

