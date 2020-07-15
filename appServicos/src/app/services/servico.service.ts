import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servico } from '../models/servico.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  private API = "http://localhost:8080/Busca-api/resources/servicos";
  
  constructor( private httpClient: HttpClient ) { }

  getServicos(){
    return this.httpClient.get<Servico[]>(this.API);
  }

  excluir(servico: Servico){
    return this.httpClient.delete(`${this.API}/${servico.id}`);
  }
  getServico(id: string){
    return this.httpClient.get<Servico>(`${this.API}/${id}`);
  }

  adicionar(servico: Servico){
    return this.httpClient.post<Servico>(this.API, servico);
  } 
  
  atualizar(servico: Servico){
    return this.httpClient.put<Servico>(`${this.API}/${servico.id}`, servico);
  }

  salvar(servico: Servico){
    if(servico && servico.id){
      return this.atualizar(servico);
    }else{
      return this.adicionar(servico);
    }
  }
}
