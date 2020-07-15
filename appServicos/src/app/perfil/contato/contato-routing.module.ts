import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatoPage } from './contato.page';

const routes: Routes = [
  {
    path: '',
    component: ContatoPage
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'cadastrar/:id',
    loadChildren: () => import('./cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContatoPageRoutingModule {}
