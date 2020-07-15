import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePrestadorPage } from './home-prestador.page';

const routes: Routes = [
  {
    path: '',
    component: HomePrestadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePrestadorPageRoutingModule {}
