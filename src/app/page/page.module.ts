import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PersonasComponent } from './personas/personas.component';
import { PagesRoutesModule } from './pages-routes.module';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicoPersonaComponent } from './basico-persona/basico-persona.component';
import { ListarAscensosComponent } from './planta/ascensos/listar-ascensos/listar-ascensos.component';






@NgModule({
  declarations: [PersonasComponent, CrearPersonaComponent, BasicoPersonaComponent, ListarAscensosComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,



  ],
  exports: [
    PersonasComponent,
    PagesRoutesModule

  ]
})
export class PageModule { }
