import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/models/servico.interface';
import { Perfil } from 'src/app/models/perfil.interface';
import { Funcao } from 'src/app/models/funcao.interface';
import { Endereco } from 'src/app/models/endereco.interface';
import { Contato } from 'src/app/models/contato.interface';
import { PerfilService } from 'src/app/services/perfil.service';
import { FuncaoService } from 'src/app/services/funcao.service';
import { EnderecoService } from 'src/app/services/endereco.service';
import { ContatoService } from 'src/app/services/contato.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  servico: Servico;
  perfil: Perfil[];
  funcao: Funcao[];
  endereco: Endereco[];
  contato: Contato[];

  constructor(
    private perfilService: PerfilService, 
    private funcaoService: FuncaoService, 
    private enderecoService: EnderecoService,
    private contatoService: ContatoService,
    private servicoService: ServicoService, 
    private navController: NavController,
    private activateRoute : ActivatedRoute,
    private loadingController: LoadingController) { 
      this.servico ={
        perfil: [],
        funcao: [],
        contato: [],
        endereco: []
     };
  }
  ionViewWillEnter() {
    this.perfilService.getPerfis().subscribe((data) => {
      this.perfil = data;
    });
  
    this.funcaoService.getFuncoes().subscribe((data) => {
      this.funcao = data;
    });
  
    this.enderecoService.getEnderecos().subscribe((data) => {
      this.endereco = data;
    });
  
    this.contatoService.getContatos().subscribe((data) => {
      this.contato = data;
    });
  }

  async ngOnInit(){
    const id = this.activateRoute.snapshot.params['id'];
    if(id) {
      const loading = await this.loadingController.create({message: 'Carregando'})
      loading.present();
      this.servicoService.getServico(id).subscribe((data) => {
        this.servico = data;
        loading.dismiss();
      });
    } 
  }
  
  async salvar(servico: Servico) {
    const loading = await this.loadingController.create({message: 'Salvando'});
    loading.present()
    this.servicoService.salvar(servico).subscribe(() => {
      loading.dismiss()
      this.navController.navigateForward(['/servicos-prestador']); 
    });
  }
}