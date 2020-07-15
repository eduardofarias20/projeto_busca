import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicosPrestadorPageRoutingModule } from './servicos-prestador-routing.module';

import { ServicosPrestadorPage } from './servicos-prestador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicosPrestadorPageRoutingModule
  ],
  declarations: [ServicosPrestadorPage]
})
export class ServicosPrestadorPageModule {}
