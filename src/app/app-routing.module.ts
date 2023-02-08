import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoferesComponent } from './pages/clientes/choferes/choferes.component';
import { PropietariosComponent } from './pages/clientes/propietarios/propietarios.component';
import { GerentesComponent } from './pages/empleados/gerentes/gerentes.component';
import { InspectoresComponent } from './pages/empleados/inspectores/inspectores.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'choferes',
    component: ChoferesComponent,
    pathMatch: 'full',
  },
  {
    path: 'propietarios',
    component: PropietariosComponent,
    pathMatch: 'full',
  },
  {
    path: 'inspectores',
    component: InspectoresComponent,
    pathMatch: 'full',
  },
  {
    path: 'gerentes',
    component: GerentesComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
