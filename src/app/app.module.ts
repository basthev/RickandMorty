import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { HeaderComponent } from './principal/header/header.component';
import { ListaPersonajesComponent } from './principal/lista-personajes/lista-personajes.component';
import { ListaPersonajesNextComponent } from './principal/lista-personajes/lista-personajes-next/lista-personajes-next.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PersonajesComponent,
    HeaderComponent,
    ListaPersonajesComponent,
    ListaPersonajesNextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
