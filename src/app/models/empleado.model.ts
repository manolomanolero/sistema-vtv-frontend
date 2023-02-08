export class Empleado {
    numeroLegajo:number;
    dni:number;
    nombre:string;
    apellido:string;
    cargo:string;

    constructor(numeroLegajo:number, dni:number, nombre:string, apellido:string){
        this.numeroLegajo = numeroLegajo;
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}