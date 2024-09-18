export class Registro {
    nombreMascota?: string;
    nombrePropietario?: string;
    tipoMascota?: string;
    genero?: number;
    raza?: string;
    color?: string;
    peso?: string;
    temperatura?: string;
    frecuencia?: string;
    direccion?: string;
    telefono?: string;
    medico?: string;

    constructor
        (
            nombreMascota: string, nombrePropietario: string, tipoMascota: string,
            genero: number, raza: string, color: string, peso: string, temperatura: string,
            frecuencia: string, direccion: string, telefono: string, medico: string
        ) 
        {
            this.nombreMascota = nombreMascota;
            this.nombrePropietario = nombrePropietario;
            this.tipoMascota = tipoMascota;
            this.genero = genero;
            this.raza = raza;
            this.color = color;
            this.peso = peso;
            this.temperatura = temperatura;
            this.frecuencia = frecuencia;
            this.direccion = direccion;
            this.telefono = telefono;
            this.medico = medico;
        }
}
