import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) { }

  getPropietarios() {
    var clientes = this.httpClient.get(`${baserUrl}/clientes/propietarios`);
    return clientes;
  }

  savePropietarioComun(cliente: Cliente) {
    return this.httpClient.post(`${baserUrl}/clientes/propietarios/comun`, cliente);
  }

  updatePropietarioComun(cliente: Cliente) {
    return this.httpClient.put(`${baserUrl}/clientes/propietarios/comun`, cliente);
  }

  savePropietarioExento(cliente: Cliente) {
    return this.httpClient.post(`${baserUrl}/clientes/propietarios/exento`, cliente);
  }

  updatePropietarioExento(cliente: Cliente) {
    return this.httpClient.put(`${baserUrl}/clientes/propietarios/exento`, cliente);
  }

  findPropietario(dni:number) {
    return this.httpClient.get(`${baserUrl}/clientes/propietarios?dni=` + dni);
  }


  deletePropietario(dni: number) {
    return this.httpClient.delete(`${baserUrl}/clientes/propietarios?dni=`+ dni);
  }



  getChoferes() {
    return this.httpClient.get(`${baserUrl}/clientes/choferes`);
  }

  findChofer(dni: number) {
    return this.httpClient.get(`${baserUrl}/clientes/choferes?dni=` + dni);
  }

  saveChofer(cliente: Cliente){
    return this.httpClient.post(`${baserUrl}/clientes/choferes`, cliente);
  }

  updateChofer(cliente: Cliente){
    return this.httpClient.put(`${baserUrl}/clientes/choferes`, cliente);
  }

  deleteChofer(dni: number) {
    return this.httpClient.delete(`${baserUrl}/clientes/choferes?dni=`+ dni);
  }

}
