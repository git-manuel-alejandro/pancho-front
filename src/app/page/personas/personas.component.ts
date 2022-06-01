import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../service/persona.service';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(
    private personaService: PersonaService,

  ) { }

  public personas: any = []

  ngOnInit(): void {
    this.cargarPersona()

  }

  cargarPersona() {
    this.personaService.getPersonas().subscribe((res: any) => {
      this.personas = res.personas
      console.log(res.personas)
    })
  }

}
