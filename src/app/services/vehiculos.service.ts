import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo } from '../models/vehiculo.model';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(private httpClient: HttpClient) { }

  getAutomoviles() {
    return this.httpClient.get(`${baserUrl}/vehiculos/automoviles`);    
  }

  getAutomovilesAptos() {
    return this.httpClient.get(`${baserUrl}/vehiculos/automoviles/aptos`);    
  }

  getAutomovilesCondicionales() {
    return this.httpClient.get(`${baserUrl}/vehiculos/automoviles/condicionales`);    
  }

  getAutomovilesRechazados() {
    return this.httpClient.get(`${baserUrl}/vehiculos/automoviles/rechazados`);    
  }

  saveAutomovil(vehiculo: Vehiculo) {
    return this.httpClient.post(`${baserUrl}/vehiculos/automoviles`, vehiculo);
  }

  updateAutomovil(vehiculo: Vehiculo) {
    return this.httpClient.put(`${baserUrl}/vehiculos/automoviles`, vehiculo);
  }

 
  findAutomovil(dominio:string) {
    return this.httpClient.get(`${baserUrl}/vehiculos/automoviles?dominio=` + dominio);
  }


  deleteAutomovil(dominio: string) {
    return this.httpClient.delete(`${baserUrl}/vehiculos/automoviles?dominio=`+ dominio);
  }

}
