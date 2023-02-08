export class Cliente{
    dni:number;
    nombre:string;
    apellido:string;
    esTitular:boolean;
    estaExento:boolean;
    cedulaAzul:string;
    cuit:number;
    tipo:string;

     constructor(dni:number, nombre:string, apellido:string, esTitular:boolean, estaExento:boolean, cedulaAzul:string, cuit:number){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.esTitular = esTitular;
        this.estaExento = estaExento;
        this.cedulaAzul = cedulaAzul;
        this.cuit = cuit;
     }   
}