import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../../service/persona.service';

@Component({
  selector: 'app-basico-persona',
  templateUrl: './basico-persona.component.html',
  styleUrls: ['./basico-persona.component.css']
})
export class BasicoPersonaComponent implements OnInit {

  public persona: any
  public contrato: number

  constructor(
    private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .subscribe(({ uid }) => this.personaByid(uid)
      );

  }

  personaByid(uid: string) {
    this.personaService.getPersonasById(uid).subscribe((res: any) => {

      this.persona = res.persona
      console.log(this.persona)
    })
  }

  verContratos(contrato: number) {
    this.contrato = contrato
    // console.log(this.contrato)


  }

}
