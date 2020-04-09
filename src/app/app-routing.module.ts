import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardGeralComponent } from './dashboard-geral/dashboard-geral.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardGeralComponent,
    data: {  }
  },
  {
    path: 'dashboard-geral',
    component: DashboardGeralComponent,
    data: { title: 'Dashboard Geral' }
  },
  {
    path: 'cadastro-usuario',
    component: CadastroUsuarioComponent,
    data: { title: 'Cadastro Usuário' }
  },
  
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }