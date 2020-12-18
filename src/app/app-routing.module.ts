import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { PersonajesComponent } from './personajes/personajes.component';

const routes: Routes = [
  {path: '', component:PrincipalComponent},
  {path: 'personaje/:id', component:PersonajesComponent},
  {path: '**', pathMatch:'full', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
