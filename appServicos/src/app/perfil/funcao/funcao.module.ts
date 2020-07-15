import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncaoPageRoutingModule } from './funcao-routing.module';

import { FuncaoPage } from './funcao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuncaoPageRoutingModule
  ],
  declarations: [FuncaoPage]
})
export class FuncaoPageModule {}
