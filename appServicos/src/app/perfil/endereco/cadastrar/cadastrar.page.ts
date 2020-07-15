import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/models/endereco.interface';
import { EnderecoService } from 'src/app/services/endereco.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  endereco: Endereco;
  
  constructor( 
    private enderecoService: EnderecoService, 
    private navController: NavController,
    private activateRoute : ActivatedRoute,
    private loadingController: LoadingController
    ) {   
      this.endereco = {
        cidade:'',
        bairro:'',
        rua:'',
        numero: null
      }
  }

  async ngOnInit() {
    const id = this.activateRoute.snapshot.params['id'];
    if(id) {
      const loading = await this.loadingController.create({message: 'Carregando'})
      loading.present();
      this.enderecoService.getEndereco(id).subscribe((data) => {
        this.endereco = data;
        loading.dismiss();
      });
    } 
  }

  async salvar() {
    let loading = await this.loadingController.create({message: 'Salvando'});
    loading.present()
    this.enderecoService.salvar(this.endereco).subscribe(() => {
      loading.dismiss()
      this.navController.navigateForward(['/perfil/endereco']);
    });
    }

}
