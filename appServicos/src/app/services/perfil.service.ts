import { Injectable } from '@angular/core';
import { Perfil } from '../models/perfil.interface';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

private API = 'http://localhost:8080/Busca-api/resources/perfis';

private _usuarioLogado: Perfil;



  constructor(private httpClient : HttpClient) { }

  getPerfis(){
    return this.httpClient.get<Perfil[]>(this.API);
  }
  getPerfil(id: number){
    return this.httpClient.get<Perfil>(`${this.API}/${id}`);
  } 

  adicionar(perfil: Perfil){
    return this.httpClient.post<Perfil>(this.API, perfil);
  } 

  atualizar(perfil: Perfil){
    return this.httpClient.put<Perfil>(`${this.API}/${perfil.id}`, perfil);
  }

  efetuaLogin(user: string, pass: string){
    return this.httpClient.get<Perfil>(`http://localhost:8080/Busca-api/resources/perfis?usuario=${user}&senha=${pass}`).pipe(tap(
      (perfil: Perfil) => this._usuarioLogado = perfil)
      );
  }

  obtemUsuarioLogado(){
    return this._usuarioLogado;
  }

  excluir(perfil: Perfil){
    return this.httpClient.delete(`${this.API}/${perfil.id}`);
  }

  salvar(perfil: Perfil){
    if(perfil && perfil.id){
      return this.atualizar(perfil);
    }else{
      return this.adicionar(perfil);
    }
  }
}