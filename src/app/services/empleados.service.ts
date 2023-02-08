import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.model';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private httpClient: HttpClient) { }

  getInspectores() {
    return this.httpClient.get(`${baserUrl}/empleados/inspectores`);    
  }

  saveInspector(empleado: Empleado) {
    return this.httpClient.post(`${baserUrl}/empleados/inspectores`, empleado);
  }

  updateInspector(empleado: Empleado) {
    return this.httpClient.put(`${baserUrl}/empleados/inspectores`, empleado);
  }

  findInspector(dni:number) {
    return this.httpClient.get(`${baserUrl}/empleados/inspectores?dni=` + dni);
  }


  getGerentes() {
    return this.httpClient.get(`${baserUrl}/empleados/gerentes`);
  }

  findGerente(dni: number) {
    return this.httpClient.get(`${baserUrl}/empleados/gerentes?dni=` + dni);
  }

  saveGerente(empleado: Empleado){
    return this.httpClient.post(`${baserUrl}/empleados/gerentes`, empleado);
  }

  updateGerente(empleado: Empleado){
    return this.httpClient.put(`${baserUrl}/empleados/gerentes`, empleado);
  }

  
  deleteEmpleado(dni: number) {
    return this.httpClient.delete(`${baserUrl}/empleados?dni=`+ dni);
  }

}
