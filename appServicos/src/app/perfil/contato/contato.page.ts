import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/contato.interface';
import { AlertController, LoadingController } from '@ionic/angular';
import { ContatoService } from 'src/app/services/contato.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
  
  contato: Contato[];
  
  constructor( 
    private alertController: AlertController,
    private contatoService: ContatoService,
    private loadingController: LoadingController
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.listar();
  }
  
  //listar() {
    // const loading = await this.loadingController.create({
    // message: 'Carregando'
    // });
    // loading.present();
    //this.contato = this.contatoService.getContatos();
    // this.contatoService.getContatos().subscribe((data) => {
    //   this.contato = data;
    // loading.dismiss();
    // });
  //}


  async listar() {
    const loading = await this.loadingController.create({
      message: 'Carregando'
    });
    loading.present();
    // this.autores = this.autorService.getAutores();
    this.contatoService.getContatos().subscribe((data) => {
      this.contato = data;
      loading.dismiss();
    });
  }


  async confirmarExclusao(contato: Contato) {
    let alerta = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir o contato ${contato.email}?`,
      buttons: [{
        text: 'SIM',
        handler: () => {
          this.excluir(contato);
        }
      }, {
        text: 'NÃO'
      }]
    });
    alerta.present();
  }

  excluir(contato: Contato){
    this.contatoService.excluir(contato).subscribe(() => this.listar());
    // this.listar();
  }
}