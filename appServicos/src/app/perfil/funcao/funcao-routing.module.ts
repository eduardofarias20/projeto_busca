import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncaoPage } from './funcao.page';

const routes: Routes = [
  {
    path: '',
    component: FuncaoPage
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
export class FuncaoPageRoutingModule {}
