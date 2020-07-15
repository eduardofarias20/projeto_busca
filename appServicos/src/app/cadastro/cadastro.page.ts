import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil.interface';
import { PerfilService } from 'src/app/services/perfil.service';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  perfil: Perfil;

  constructor( 
    private perfilService: PerfilService, 
    private navController: NavController,
    private activateRoute : ActivatedRoute,
    private loadingController: LoadingController
    ) {   
      this.perfil = {
        nome: '',
        sobrenome: '',
        cpf: '',
        sexo: '',
        usuario: '',
        senha: ''
      }
  }

  async ngOnInit() {
    const id = this.activateRoute.snapshot.params['id'];
    if(id) {
      const loading = await this.loadingController.create({message: 'Carregando'})
      loading.present();
      this.perfilService.getPerfil(id).subscribe((data) => {
        this.perfil = data;
        loading.dismiss();
      });
    } 
  }

  async salvar() {
    let loading = await this.loadingController.create({message: 'Salvando'});
    loading.present()
    this.perfilService.salvar(this.perfil).subscribe(() => {
      loading.dismiss()
      this.navController.navigateForward(['/login']);
    });
    console.log(this.perfil);
    }

  // ionViewWillEnter(){
  //   this.listar();
  // }

  // async listar() {
  //   const loading = await this.loadingController.create({
  //     message: 'Carregando'
  //   });
  //   loading.present();

  //   this.perfilService.getPerfis().subscribe((data) => {
  //     this.perfil = data;
  //     loading.dismiss();
  //   });
  // }


  // async confirmarExclusao(perfil: Perfil) {
  //   let alerta = await this.alertController.create({
  //     header: 'Confirmação de exclusão',
  //     message: `Deseja excluir o endereço ${perfil.nome}?`,
  //     buttons: [{
  //       text: 'SIM',
  //       handler: () => {
  //         this.excluir(perfil);
  //       }
  //     }, {
  //       text: 'NÃO'
  //     }]
  //   });
  //   alerta.present();
  // }

  // excluir(perfil: Perfil){
  //   this.perfilService.excluir(perfil).subscribe(() => this.listar());
  // }
}