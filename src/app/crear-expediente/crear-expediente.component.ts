import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registro } from 'src/models/registro';
import { NuevoExpedienteServiceService } from '../service/nuevo-expediente-service.service';
import { Raza } from 'src/models/raza';

@Component({
  selector: 'app-crear-expediente',
  templateUrl: './crear-expediente.component.html',
  styleUrls: ['./crear-expediente.component.css']
})
export class CrearExpedienteComponent {

  expediente: Registro = new Registro();
  raza: Raza = new Raza();

  tipoAnimal: string[] = ['Felino', 'Canino'];
  razaAnimal: string[] = [];

  razaGato: string[] = ['Gato Persa', 'Gato Siamés', 'Gato Maine Coon', 'Gato Bengalí', 'Gato Sphynx'];
  razaPerro: string[] = ['Labrador', 'Pastor Alemán', 'Bulldog', 'Golden Retriever', 'Beagle'];

  formularioRegistro: FormGroup;

  constructor(private form: FormBuilder, private router: Router, private _service: NuevoExpedienteServiceService) {
    this.formularioRegistro = this.form.group({
      name: ['', Validators.required],
      owner: ['', Validators.required],
      animal: [''],
      gender: ['', Validators.required],
      raza: [''],
      color: ['', Validators.required],
      weight: ['', Validators.required],
      temp: ['', Validators.required],
      frec: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      med: [''],
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.formularioRegistro.get('animal')?.valueChanges.subscribe(value => {

      if (value === 'Felino') {
        this.razaAnimal = this.razaGato;
      } else if (value === 'Canino') {
        this.razaAnimal = this.razaPerro;
      }

    });
  }

  // Método para regresar al menú o a la página anterior
  regresar(): void {
    // Ejemplo de redirección a una ruta específica
    this.router.navigate(['/menu-expediente']); // Cambia '/menu' a la ruta que necesites
  }

  // Método para guardar el expediente
  guardarExpediente() {
    this.expediente.masNombre = this.formularioRegistro.get('name')?.value;
    this.expediente.masPropietario = this.formularioRegistro.get('owner')?.value;
    this.expediente.masColor = this.formularioRegistro.get('color')?.value;
    this.raza.razId = 1;
    this.expediente.raza = this.raza;

    this._service.crearNuevoExpediente(this.expediente).subscribe((res => {
      alert(res);
      this.formularioRegistro.reset();
    }));
  }

  limpiar(): void {
    this.formularioRegistro.reset(); // Limpia el formulario
  }

  hasErrors(controlName: string, errorType: string) {
    return this.formularioRegistro.get(controlName)?.hasError(errorType) && this.formularioRegistro.get(controlName)?.touched
  }

}
