import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { PersonajesComponent } from './personajes/personajes.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PersonajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
