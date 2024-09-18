import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registro } from 'src/models/registro';

@Component({
  selector: 'app-crear-expediente',
  templateUrl: './crear-expediente.component.html',
  styleUrls: ['./crear-expediente.component.css']
})
export class CrearExpedienteComponent {

  nombreMascota: string = '';
  nombrePropietario: string = '';
  tipoMascota: string = '';
  genero: number = 0;
  raza: string = '';
  color: string = '';
  peso: string = '';
  temperatura: string = '';
  frecuencia: string = '';
  direccion: string = '';
  telefono: string = '';
  medico: string = '';

  tipoAnimal: string[] = ['Felino', 'Canino'];
  razaAnimal: string[] = [];

  razaGato: string[] = ['Gato Persa', 'Gato Siamés', 'Gato Maine Coon', 'Gato Bengalí', 'Gato Sphynx'];
  razaPerro: string[] = ['Labrador', 'Pastor Alemán', 'Bulldog', 'Golden Retriever', 'Beagle'];

  formularioRegistro: FormGroup;

  constructor(private form: FormBuilder, private router: Router) {
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

  hasErrors(controlName: string, errorType: string) {
    return this.formularioRegistro.get(controlName)?.hasError(errorType) && this.formularioRegistro.get(controlName)?.touched
  }

  // Método para regresar al menú o a la página anterior
  regresar(): void {
    // Ejemplo de redirección a una ruta específica
    this.router.navigate(['/menu-expediente']); // Cambia '/menu' a la ruta que necesites
  }

  // Método para guardar el expediente
  guardarExpediente() {

    console.log(this.formularioRegistro)

    // this.nombreMascota = this.formularioRegistro.get('name')?.value;
    // this.nombrePropietario = this.formularioRegistro.get('owner')?.value;
    // this.tipoMascota = this.formularioRegistro.get('animal')?.value;
    // this.genero = parseInt(this.formularioRegistro.get('gender')?.value);
    // this.raza = this.formularioRegistro.get('raza')?.value;
    // this.color = this.formularioRegistro.get('color')?.value;
    // this.peso = this.formularioRegistro.get('weight')?.value;
    // this.temperatura = this.formularioRegistro.get('temp')?.value;
    // this.frecuencia = this.formularioRegistro.get('frec')?.value;
    // this.direccion = this.formularioRegistro.get('address')?.value;
    // this.telefono = this.formularioRegistro.get('phone')?.value;
    // this.medico = this.formularioRegistro.get('med')?.value;

    // const nuevoExpediente = new Registro(this.nombreMascota, this.nombrePropietario, this.tipoMascota, this.genero,
    //   this.raza, this.color, this.peso, this.temperatura, this.frecuencia, this.direccion, this.telefono, this.medico
    // );

    // if (this.formularioRegistro.invalid) {
    //   this.formularioRegistro.markAllAsTouched();
    // }
    // console.log(nuevoExpediente);

    if (this.formularioRegistro.valid) {
      console.log(this.formularioRegistro)
    }


  }

  limpiar(): void {
    this.formularioRegistro.reset(); // Limpia el formulario
  }


}
