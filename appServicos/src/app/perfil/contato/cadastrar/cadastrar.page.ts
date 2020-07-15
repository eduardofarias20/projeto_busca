import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/contato.interface';
import { ContatoService } from 'src/app/services/contato.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  contato: Contato;
  
  constructor( 
    private contatoService: ContatoService, 
    private navController: NavController,
    private activateRoute : ActivatedRoute,
    private loadingController: LoadingController
    ) {   
      this.contato = {
        telefone:'',
        celular:'',
        email:'' 
      }
  }


  async ngOnInit() {
    const id = this.activateRoute.snapshot.params['id'];
    if(id) {
      const loading = await this.loadingController.create({message: 'Carregando'})
      loading.present();
      this.contatoService.getContato(id).subscribe((data) => {
        this.contato = data;
        loading.dismiss();
      });
    } 
  }

  async salvar() {
    let loading = await this.loadingController.create({message: 'Salvando'});
    loading.present()
    this.contatoService.salvar(this.contato).subscribe(() => {
      loading.dismiss()
      this.navController.navigateForward(['/perfil/contato']);
    });
    }
}