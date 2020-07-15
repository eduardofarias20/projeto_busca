import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../services/servico.service';
import { Servico } from '../models/servico.interface';
import { LoadingController, AlertController } from '@ionic/angular';
import { Perfil } from 'src/app/models/perfil.interface';
import { Funcao } from 'src/app/models/funcao.interface';
import { Endereco } from 'src/app/models/endereco.interface';
import { Contato } from 'src/app/models/contato.interface';

@Component({
  selector: 'app-sevicos-prestador',
  templateUrl: './servicos-prestador.page.html',
  styleUrls: ['./servicos-prestador.page.scss'],
})
export class ServicosPrestadorPage implements OnInit {

  servico: Servico[];
  perfil: Perfil[];
  funcao: Funcao[];
  endereco: Endereco[];
  contato: Contato[];

  constructor(
    private servicoService: ServicoService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { }
  
  ngOnInit(){ }

  ionViewWillEnter() {
    this.listar();
  }

  async listar(){
    const busyLoader = await this.loadingController.create({message: 'Carregando Serviços...'});
    busyLoader.present();

    this.servicoService.getServicos().subscribe((servico) => {
      this.servico = servico;
      console.log(this.servico);
    busyLoader.dismiss();
    });
  }

  async confirmarExclusao(servico: Servico){
    const alerta = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir o serviço?`,
      buttons:[
        {
          text: 'SIM',
          handler: () => {
            this.excluir(servico);
          }
        },{
          text:'NÃO'
        }]
     });
     alerta.present();
  }

  private async excluir(servico: Servico){
    const loading = await this.loadingController.create({message: 'Excluíndo...'})
    loading.present();
    this.servicoService.excluir(servico).subscribe(() => {
      this.listar()
      loading.dismiss();
    });
  }

}