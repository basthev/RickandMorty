import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { HeaderComponent } from './principal/header/header.component';
import { ListaPersonajesComponent } from './principal/lista-personajes/lista-personajes.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PersonajesComponent,
    HeaderComponent,
    ListaPersonajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
