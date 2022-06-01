import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { BasicoPersonaComponent } from './basico-persona/basico-persona.component';
import { ListarAscensosComponent } from './planta/ascensos/listar-ascensos/listar-ascensos.component';


const pageRoutes: Routes = [
  { path: 'personas', component: PersonasComponent, data: { titulo: 'Personas' } },
  { path: 'personas/nuevo', component: CrearPersonaComponent, data: { titulo: 'Nueva Personas' } },
  { path: 'personas/:uid', component: BasicoPersonaComponent, data: { titulo: 'Básico Persona' } },
  { path: 'personas/:uid/planta/ascensos', component: ListarAscensosComponent, data: { titulo: 'Ascensos y Destinos' } },

]



@NgModule({
  imports: [
    CommonModule,


    RouterModule.forChild(pageRoutes)],
  exports: [RouterModule]
})

export class PagesRoutesModule { }
