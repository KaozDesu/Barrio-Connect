import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroEmpresaComponent } from './registro-empresa/registro-empresa.component';
import { ListaNegociosComponent } from './lista-negocios/lista-negocios.component';

const routes: Routes = [
  { path: 'registro-empresa', component: RegistroEmpresaComponent },
  { path: 'lista-negocios', component: ListaNegociosComponent },
  { path: '', redirectTo: '/lista-negocios', pathMatch: 'full' }, // Página inicial
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}