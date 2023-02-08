import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Vehiculo } from 'src/app/models/vehiculo.model';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-automoviles',
  templateUrl: './automoviles.component.html',
  styleUrls: ['./automoviles.component.css'],
})
export class AutomovilesComponent implements OnInit {

  vehiculos: Vehiculo[];

  vehiculoSelec: Vehiculo = new Vehiculo('', '', '', '', '', '', null, null);
  modoEdicion: boolean = false;

  constructor(private vehiculosService: VehiculosService) {}

  ngOnInit(): void {
    this.vehiculosService.getAutomoviles().subscribe((vehiculos: any) => {
      this.vehiculos = vehiculos;
      console.log(vehiculos);
    });
  }

  modalEliminar(vehiculoSelec: Vehiculo) {
    this.vehiculoSelec = vehiculoSelec;
  }

  onEliminar() {
    console.log('eliminando ' + this.vehiculoSelec.dominio);
    this.vehiculosService.deleteAutomovil(this.vehiculoSelec.dominio).subscribe(
      (data) => {
        Swal.fire(
          'Vehiculo eliminado',
          'Vehiculo eliminado con éxito en el sistema',
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
    this.vehiculoSelec = new Vehiculo('', '', '', '', '', '', null, null);
    this.modoEdicion = false;
  }

  onEditar(vehiculoSelec: Vehiculo) {
    this.vehiculoSelec.dominio = vehiculoSelec.dominio;
    this.vehiculoSelec.numeroMotor = vehiculoSelec.numeroMotor;
    this.vehiculoSelec.numeroChasis = vehiculoSelec.numeroChasis;
    this.vehiculoSelec.marca = vehiculoSelec.marca;
    this.vehiculoSelec.modelo = vehiculoSelec.modelo;
    this.vehiculoSelec.version = vehiculoSelec.version;
    this.vehiculoSelec.propietario = vehiculoSelec.propietario;
    this.vehiculoSelec.chofer = vehiculoSelec.chofer;
    this.modoEdicion = true;
  }

  formSubmit() {
    console.log('guardando vehiculo');
    console.log(this.vehiculoSelec);
    if (this.modoEdicion) {
      this.vehiculosService.updateAutomovil(this.vehiculoSelec).subscribe(
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
      this.vehiculosService.saveAutomovil(this.vehiculoSelec).subscribe(
        (data) => {
          Swal.fire(
            'Vehiculo guardado',
            'Vehiculo guardado con éxito en el sistema',
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
