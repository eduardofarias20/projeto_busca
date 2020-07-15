import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/models/endereco.interface';
import { AlertController, LoadingController } from '@ionic/angular';
import { EnderecoService } from 'src/app/services/endereco.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.page.html',
  styleUrls: ['./endereco.page.scss'],
})
export class EnderecoPage implements OnInit {

  endereco: Endereco[];

  constructor(
    private alertController: AlertController,
    private enderecoService: EnderecoService,
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

    this.enderecoService.getEnderecos().subscribe((data) => {
      this.endereco = data;
      loading.dismiss();
    });
  }


  async confirmarExclusao(endereco: Endereco) {
    let alerta = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir o endereço ${endereco.rua}?`,
      buttons: [{
        text: 'SIM',
        handler: () => {
          this.excluir(endereco);
        }
      }, {
        text: 'NÃO'
      }]
    });
    alerta.present();
  }

  private async excluir(endereco: Endereco){
    const loading = await this.loadingController.create({message: 'Excluíndo...'})
    loading.present();
    this.enderecoService.excluir(endereco).subscribe(() => {
      this.listar()
      loading.dismiss();
    });
  }
}
