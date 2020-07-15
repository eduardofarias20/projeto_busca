import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FuncaoService } from 'src/app/services/funcao.service';
import { Funcao } from 'src/app/models/funcao.interface';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  funcao: Funcao;

  constructor(
    private funcaoService: FuncaoService, 
    private navController: NavController,
    private activateRoute : ActivatedRoute,
    private loadingController: LoadingController
  ) {
    this.funcao = {
      nome:'',
      descricao:''
    }
   }

  async ngOnInit() {
    const id = this.activateRoute.snapshot.params['id'];
    if(id) {
      const loading = await this.loadingController.create({message: 'Carregando'})
      loading.present();
      this.funcaoService.getFuncao(id).subscribe((data) => {
        this.funcao = data;
        loading.dismiss();
      });
    } 
  }

  async salvar() {
    let loading = await this.loadingController.create({message: 'Salvando'});
    loading.present()
    this.funcaoService.salvar(this.funcao).subscribe(() => {
      loading.dismiss()
      this.navController.navigateForward(['/perfil/funcao']);
    });
    }
}