import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipoAnimal: string[] = ['Felino', 'Canino'];
  razaAnimal: string[] = [];

  razaGato: string[] = ['Gato Persa', 'Gato Siamés', 'Gato Maine Coon', 'Gato Bengalí', 'Gato Sphynx'];
  razaPerro: string[] = ['Labrador', 'Pastor Alemán', 'Bulldog', 'Golden Retriever', 'Beagle'];

  formularioRegistro: FormGroup

  constructor(private form: FormBuilder) {
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
    })
  }
  ngOnInit(): void {
    this.formularioRegistro.get('animal')?.valueChanges.subscribe(value => {

      if (value === 'Felino') {
        this.razaAnimal = this.razaGato;
      } else if (value === 'Canino') {
        this.razaAnimal = this.razaPerro;
      }

    })
  }

  enviar() {
    console.log(this.formularioRegistro);
  }

  hasErrors(controlName: string, errorType: string) {
    return this.formularioRegistro.get(controlName)?.hasError(errorType) && this.formularioRegistro.get(controlName)?.touched
  }

}
