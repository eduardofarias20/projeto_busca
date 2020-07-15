import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil.interface';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  perfil: Perfil;

  constructor(
    private loadingController: LoadingController,
    private alertController: AlertController,
    private perfilService: PerfilService,
    private navController: NavController
  ) { 
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
  }

ionViewWillEnter(){
  this.listar();
}

async listar() {
  const loading = await this.loadingController.create({
    message: 'Carregando'
  });
  loading.present();

  const perfilOn = this.perfilService.obtemUsuarioLogado();
  let id = perfilOn[0].id;

  this.perfilService.getPerfil(id).subscribe((data) => {
    this.perfil = data;
    loading.dismiss();
  });
}


async confirmarExclusao(perfil: Perfil) {
  let alerta = await this.alertController.create({
    header: 'Confirmação de exclusão',
    message: `Deseja excluir o perfil ${perfil.nome}?`,
    buttons: [{
      text: 'SIM',
      handler: () => {
        this.excluir(perfil);
        // this.navController.navigateForward(['/home']);
      }
    }, {
      text: 'NÃO'
    }]
  });
  alerta.present();
}

excluir(perfil: Perfil){
  this.perfilService.excluir(perfil).subscribe(() => this.navController.navigateForward(['/home']));
}

async salvar() {
  let loading = await this.loadingController.create({message: 'Salvando'});
  loading.present()
  this.perfilService.salvar(this.perfil).subscribe(() => {
    loading.dismiss()
    this.navController.navigateForward(['/home-prestador']);
  });
  }
}