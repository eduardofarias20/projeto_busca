import { Injectable } from '@angular/core';
import { Endereco } from '../models/endereco.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

private API = 'http://localhost:8080/Busca-api/resources/enderecos';


  constructor(private httpClient : HttpClient) { }

  getEnderecos(){
    return this.httpClient.get<Endereco[]>(this.API);
  }
  getEndereco(id: string){
    return this.httpClient.get<Endereco>(`${this.API}/${id}`);
  } 

  adicionar(endereco: Endereco){
    return this.httpClient.post<Endereco>(this.API, endereco);
  } 

  atualizar(endereco: Endereco){
    return this.httpClient.put<Endereco>(`${this.API}/${endereco.id}`, endereco);
  }

  excluir(endereco: Endereco){
    return this.httpClient.delete(`${this.API}/${endereco.id}`);
  }

  salvar(endereco: Endereco){
    if(endereco && endereco.id){
      return this.atualizar(endereco);
    }else{
      return this.adicionar(endereco);
    }
  }
}