import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChoferesComponent } from './pages/clientes/choferes/choferes.component';
import { PropietariosComponent } from './pages/clientes/propietarios/propietarios.component';
import { ClientesService } from './services/clientes.service';
import { FormsModule } from '@angular/forms';
import { InspectoresComponent } from './pages/empleados/inspectores/inspectores.component';
import { GerentesComponent } from './pages/empleados/gerentes/gerentes.component';
import { AutomovilesComponent } from './pages/vehiculos/automoviles/automoviles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ChoferesComponent,
    PropietariosComponent,
    InspectoresComponent,
    GerentesComponent,
    AutomovilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    NgbPaginationModule, 
    NgbAlertModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
