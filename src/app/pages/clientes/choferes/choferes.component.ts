import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-choferes',
  templateUrl: './choferes.component.html',
  styleUrls: ['./choferes.component.css']
})
export class ChoferesComponent implements OnInit{

  choferes: Cliente[];

  choferSeleccionado: Cliente = new Cliente(0,"","",false,false,"",0);
  modoEdicion: boolean = false;

  constructor(
    private clientesService: ClientesService
    ) {}
    
  ngOnInit(): void {
      this.clientesService
        .getChoferes()
        .subscribe((choferes:any) => {
          this.choferes = choferes;
          console.log(choferes);
        })
  }

  modalEliminar(chofer:Cliente){
    this.choferSeleccionado = chofer;
  }

  onEliminar(){
    console.log("eliminando " + this.choferSeleccionado.dni);
    this.clientesService.deleteChofer(this.choferSeleccionado.dni).subscribe(
      (data) => {
        Swal.fire(
          'Cliente eliminado',
          'Cliente eliminado con éxito en el sistema',
          'success'
        ).then(() => {
          window.location.reload();
        });
      },
      (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
    );
  }

  onCrear(){
    this.choferSeleccionado = new Cliente(0,"","",false,false,"",0);
    this.modoEdicion = false;
  }

  onEditar(chofer:Cliente){
    this.choferSeleccionado.nombre = chofer.nombre;
    this.choferSeleccionado.apellido = chofer.apellido;
    this.choferSeleccionado.dni = chofer.dni;
    this.choferSeleccionado.cedulaAzul = chofer.cedulaAzul;
    this.modoEdicion = true;
  }

  formSubmit() {

    console.log("guardando chofer");
    console.log(this.choferSeleccionado);
    if(this.modoEdicion){
      this.clientesService.updateChofer(this.choferSeleccionado).subscribe(
        (data) => {
          Swal.fire(
            'Cliente actualizado',
            'Cliente actualizado con éxito en el sistema',
            'success'
          ).then(() => {
            window.location.reload();
          });
        },
        (error) => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        }
      );
    } else{
      this.clientesService.saveChofer(this.choferSeleccionado).subscribe(
        (data) => {
          Swal.fire(
            'Cliente guardado',
            'Cliente guardado con éxito en el sistema',
            'success'
          ).then(() => {
            window.location.reload();
          });
        },
        (error) => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        }
      );
    }
  }   

}
