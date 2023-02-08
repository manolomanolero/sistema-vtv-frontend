import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styleUrls: ['./propietarios.component.css']
})
export class PropietariosComponent implements OnInit{
  
    propietarios: Cliente[];
  
    propietarioSelec: Cliente = new Cliente(0,"","",true,false,"",0);
    modoEdicion: boolean = false;
  
    constructor(
      private clientesService: ClientesService
      ) {}
      
    ngOnInit(): void {
        this.clientesService
          .getPropietarios()
          .subscribe((propietarios:any) => {
            this.propietarios = propietarios;
            console.log(propietarios);
          })
    }
  
    modalEliminar(propietarioSelec:Cliente){
      this.propietarioSelec = propietarioSelec;
    }
  
    onEliminar(){
      console.log("eliminando " + this.propietarioSelec.dni);
      this.clientesService.deletePropietario(this.propietarioSelec.dni).subscribe(
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
      this.propietarioSelec = new Cliente(0,"","",true,false,"",0);
      this.updateCuitForm();
      this.modoEdicion = false;
    }
  
    onEditar(propietarioSelec:Cliente){
      this.propietarioSelec.nombre = propietarioSelec.nombre;
      this.propietarioSelec.apellido = propietarioSelec.apellido;
      this.propietarioSelec.dni = propietarioSelec.dni;
      this.propietarioSelec.cuit = propietarioSelec.cuit;
      if(this.propietarioSelec.cuit > 0) {
        this.propietarioSelec.estaExento = true;
      } else {
        this.propietarioSelec.estaExento = false;
      }
      this.updateCuitForm();
      this.modoEdicion = true;
    }

    onChangeExento(){
      var checkBox = <HTMLInputElement> document.getElementById("exentoCheckbox");
      this.propietarioSelec.estaExento = checkBox.checked;
      this.updateCuitForm();
    }

    updateCuitForm() {
      if (this.propietarioSelec.estaExento) {
        document.getElementById('cuitControlForm').style.display = 'inline';
      } else {
        document.getElementById('cuitControlForm').style.display = 'none';
      }
    }
  
    formSubmit() {
  
      console.log("guardando propietario");
      console.log(this.propietarioSelec);
      if(this.modoEdicion){
        if(this.propietarioSelec.estaExento){
        this.clientesService.updatePropietarioExento(this.propietarioSelec).subscribe(
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
      } else {
        this.clientesService.updatePropietarioComun(this.propietarioSelec).subscribe(
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
      }
      } else{
        if(this.propietarioSelec.estaExento){
        this.clientesService.savePropietarioExento(this.propietarioSelec).subscribe(
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
        } else {
          this.clientesService.savePropietarioComun(this.propietarioSelec).subscribe(
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
  
  }
  
