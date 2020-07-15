import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, AlertController } from '@ionic/angular';
import { Perfil } from '../models/perfil.interface';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  perfil: Perfil;

  constructor(
    private perfilService: PerfilService,
    private loadingController: LoadingController,
    private navController: NavController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  
  async login(user: string, pass: string){
    const loading = await this.loadingController.create({
      message: 'Carregando'
    });
    loading.present();
    
    this.perfilService.efetuaLogin(user,pass).subscribe(
      async (perfil : Perfil) =>{
        this.perfil = perfil
        loading.dismiss();
          if(this.perfil[0]){
            this.navController.navigateRoot(['/home-prestador']);
          }else{
            const alerta = await this.alertController.create({
              header: 'Usuário não encontrado',
              message: 'Usuário ou senha inválido!',
              buttons: ['Confirmar']
            });
             alerta.present();
           }
      })
    }
  }