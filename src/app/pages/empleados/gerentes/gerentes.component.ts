import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empleado } from 'src/app/models/empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gerentes',
  templateUrl: './gerentes.component.html',
  styleUrls: ['./gerentes.component.css']
})
export class GerentesComponent implements OnInit{
  
    gerentes: Empleado[];
    
      gerenteSelec: Empleado = new Empleado(0,0,"","");
      modoEdicion: boolean = false;
    
      constructor(
        private empleadosService: EmpleadosService
        ) {}
        
      ngOnInit(): void {
          this.empleadosService
            .getGerentes()
            .subscribe((gerentes:any) => {
              this.gerentes = gerentes;
              console.log(gerentes);
            })
      }
    
      modalEliminar(gerenteSelec:Empleado){
        this.gerenteSelec = gerenteSelec;
      }
    
      onEliminar(){
        console.log("eliminando " + this.gerenteSelec.dni);
        this.empleadosService.deleteEmpleado(this.gerenteSelec.dni).subscribe(
          (data) => {
            Swal.fire(
              'Gerente eliminado',
              'Gerente eliminado con éxito en el sistema',
              'success'
            ).then(() => {
              window.location.reload();
            });
          },
          (error) => {
            console.log(error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...Status (' + error.status + ')',
              text: 'Something went wrong! ' + error.message
            })
          }
        );
      }
    
      onCrear(){
        this.gerenteSelec = new Empleado(0,0,"","");
        this.modoEdicion = false;
      }
    
      onEditar(gerenteSelec:Empleado){
        this.gerenteSelec.nombre = gerenteSelec.nombre;
        this.gerenteSelec.apellido = gerenteSelec.apellido;
        this.gerenteSelec.dni = gerenteSelec.dni;
        this.gerenteSelec.numeroLegajo = gerenteSelec.numeroLegajo;
        this.modoEdicion = true;
      }
  
    
      formSubmit() {
    
        console.log("guardando gerente");
        console.log(this.gerenteSelec);
        if(this.modoEdicion){

          this.empleadosService.updateGerente(this.gerenteSelec).subscribe(
            (data) => {
              Swal.fire(
                'Gerente actualizado',
                'Gerente actualizado con éxito en el sistema',
                'success'
              ).then(() => {
                window.location.reload();
              });
            },
            (error) => {
              console.log(error);
              Swal.fire({
                icon: 'error',
                title: 'Oops...Status (' + error.status + ')',
                text: 'Something went wrong! ' + error.error.mensaje
              })
            }
          );
       
        } else{
          
          this.empleadosService.saveGerente(this.gerenteSelec).subscribe(
            (data) => {
              Swal.fire(
                'Gerente guardado',
                'Gerente guardado con éxito en el sistema',
                'success'
              ).then(() => {
                window.location.reload();
              });
            },
            (error) => {
              console.log(error);
              Swal.fire({
                icon: 'error',
                title: 'Oops...Status (' + error.status + ')',
                text: 'Something went wrong! ' + error.error.mensaje
              })
            }
          );
          
        }
      }   
    
    }
    
  