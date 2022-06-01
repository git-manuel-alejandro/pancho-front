import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { PersonaService } from '../../service/persona.service';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  public personaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private personaService: PersonaService

  ) { }

  ngOnInit(): void {

    this.personaForm = this.fb.group({
      rut: ['', Validators.required],
      dv: ['', Validators.required],
      nombre: ['', Validators.required],
      role: ['', Validators.required],
    });
  }


  guardarPersona() {
    if (!this.personaForm.valid) {
      Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
    } else {
      this.personaService.creatPersonas(this.personaForm.value).subscribe((resp) => {
        this.personaForm.reset()

        Swal.fire('Congrats', 'Creado correctamente', 'success');
        // console.log(resp)
      })
      // console.log(this.personaForm.valid)
    }


  }

}
