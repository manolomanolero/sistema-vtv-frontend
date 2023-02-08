import { Cliente } from "./cliente.model";

export class Vehiculo{
    dominio:string;
    numeroMotor:string;
    numeroChasis:string;
    marca:string;
    modelo:string;
    version:string;
    propietario:Cliente;
    chofer:Cliente;

    constructor(dominio:string, numeroMotor:string, numeroChasis:string, marca:string, modelo:string, version:string, propietario:Cliente, chofer:Cliente) {
        this.dominio = dominio;
        this.numeroMotor = numeroMotor;
        this.numeroChasis = numeroChasis;
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        this.propietario = propietario;
        this.chofer = chofer;
    }

}