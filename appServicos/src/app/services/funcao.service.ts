import { Injectable } from '@angular/core';
import { Funcao } from '../models/funcao.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncaoService {

private API = 'http://localhost:8080/Busca-api/resources/funcoes';


  constructor(private httpClient : HttpClient) {
  
  }

  getFuncoes(){
    return this.httpClient.get<Funcao[]>(this.API);
  }
  getFuncao(id: string){
    return this.httpClient.get<Funcao>(`${this.API}/${id}`);
  } 

  adicionar(funcao: Funcao){
    return this.httpClient.post<Funcao>(this.API, funcao);
  } 
  
  atualizar(funcao: Funcao){
    return this.httpClient.put<Funcao>(`${this.API}/${funcao.id}`, funcao);
  }

  excluir(funcao: Funcao){
    return this.httpClient.delete(`${this.API}/${funcao.id}`);
  }

  salvar(funcao: Funcao){
    if(funcao && funcao.id){
      return this.atualizar(funcao);
    }else{
      return this.adicionar(funcao);
    }
  }
}