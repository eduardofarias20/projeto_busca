import { Injectable } from '@angular/core';
import { Contato } from '../models/contato.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

private API = 'http://localhost:8080/Busca-api/resources/contatos';


  constructor(private httpClient : HttpClient) {
  
  }

  getContatos(){
    return this.httpClient.get<Contato[]>(this.API);
    //return this.contatos;
  }
  getContato(id: string){
    return this.httpClient.get<Contato>(`${this.API}/${id}`);
  } 

  adicionar(contato: Contato){
    return this.httpClient.post<Contato>(this.API, contato);
  } 
  
  atualizar(contato: Contato){
    return this.httpClient.put<Contato>(`${this.API}/${contato.id}`, contato);
  }

  excluir(contato: Contato){
    //this.contatos = this.contatos.filter(a => a.id !== contato.id);
    return this.httpClient.delete(`${this.API}/${contato.id}`);
  }

  salvar(contato: Contato){
    if(contato && contato.id){
      return this.atualizar(contato);
    }else{
      return this.adicionar(contato);
    }
  }
}