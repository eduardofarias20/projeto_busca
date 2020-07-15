import { Component, OnInit } from '@angular/core';
import { Perfil } from '../models/perfil.interface';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-home-prestador',
  templateUrl: './home-prestador.page.html',
  styleUrls: ['./home-prestador.page.scss'],
})
export class HomePrestadorPage implements OnInit {

  perfil: Perfil;

  constructor(private perfilService: PerfilService) {
    this.perfil = {
      nome:'',
      sobrenome:'',
      cpf:'',
      sexo:'',
      usuario:'',
      senha:''
    }
   }

  ngOnInit() {
      const onPerfil = this.perfilService.obtemUsuarioLogado();
      this.perfil.id = onPerfil[0].id;
      console.log(this.perfil.id);
  }

  

  

}
