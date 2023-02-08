import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empleado } from 'src/app/models/empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inspectores',
  templateUrl: './inspectores.component.html',
  styleUrls: ['./inspectores.component.css'],
})
export class InspectoresComponent implements OnInit {
  inspectores: Empleado[];

  inspectorSelec: Empleado = new Empleado(0, 0, '', '');
  modoEdicion: boolean = false;

  constructor(private empleadosService: EmpleadosService) {}

  ngOnInit(): void {
    this.empleadosService.getInspectores().subscribe((inspectores: any) => {
      this.inspectores = inspectores;
      console.log(inspectores);
    });
  }

  modalEliminar(inspectorSelec: Empleado) {
    this.inspectorSelec = inspectorSelec;
  }

  onEliminar() {
    console.log('eliminando ' + this.inspectorSelec.dni);
    this.empleadosService.deleteEmpleado(this.inspectorSelec.dni).subscribe(
      (data) => {
        Swal.fire(
          'Inspector eliminado',
          'Inspector eliminado con éxito en el sistema',
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
          text: 'Something went wrong! ' + error.message,
        });
      }
    );
  }

  onCrear() {
    this.inspectorSelec = new Empleado(0, 0, '', '');
    this.modoEdicion = false;
  }

  onEditar(inspectorSelec: Empleado) {
    this.inspectorSelec.nombre = inspectorSelec.nombre;
    this.inspectorSelec.apellido = inspectorSelec.apellido;
    this.inspectorSelec.dni = inspectorSelec.dni;
    this.inspectorSelec.numeroLegajo = inspectorSelec.numeroLegajo;
    this.modoEdicion = true;
  }

  formSubmit() {
    console.log('guardando inspector');
    console.log(this.inspectorSelec);
    if (this.modoEdicion) {
      this.empleadosService.updateInspector(this.inspectorSelec).subscribe(
        (data) => {
          Swal.fire(
            'Inspector actualizado',
            'Inspector actualizado con éxito en el sistema',
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
            text: 'Something went wrong! ' + error.error.mensaje,
          });
        }
      );
    } else {
      this.empleadosService.saveInspector(this.inspectorSelec).subscribe(
        (data) => {
          Swal.fire(
            'Inspector guardado',
            'Inspector guardado con éxito en el sistema',
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
            text: 'Something went wrong! ' + error.error.mensaje,
          });
        }
      );
    }
  }
}
