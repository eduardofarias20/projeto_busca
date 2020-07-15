import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { FuncaoService } from 'src/app/services/funcao.service';
import { Funcao } from 'src/app/models/funcao.interface';

@Component({
  selector: 'app-funcao',
  templateUrl: './funcao.page.html',
  styleUrls: ['./funcao.page.scss'],
})
export class FuncaoPage implements OnInit {

  funcao: Funcao[];

  constructor(
    private alertController: AlertController,
    private funcaoService: FuncaoService,
    private loadingController: LoadingController
  ) { }

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
  
    this.funcaoService.getFuncoes().subscribe((data) => {
      this.funcao = data;
      loading.dismiss();
    });
  }
  
  
  async confirmarExclusao(funcao: Funcao) {
    let alerta = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir a Função ${funcao.nome}?`,
      buttons: [{
        text: 'SIM',
        handler: () => {
          this.excluir(funcao);
        }
      }, {
        text: 'NÃO'
      }]
    });
    alerta.present();
  }
  
  excluir(funcao: Funcao){
    this.funcaoService.excluir(funcao).subscribe(() => this.listar());
  }
  
}