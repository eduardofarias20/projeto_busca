/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.buscaapi.models;

import java.io.Serializable;
import java.util.UUID;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 *
 * @author Arthur
 */
@Entity
@Table(name = "servico", schema = "public")
public class Servico implements Serializable{
    @Id
    @GeneratedValue
    private UUID id;
    
    @OneToOne
    private Perfil perfis;
    
    @OneToOne
    private Funcao funcao;
    
    @OneToOne
    private Contato contato;
    
    @OneToOne
    private Endereco endereco;

    public Servico(){  
    }
    
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public Perfil getPerfis() {
        return perfis;
    }

    public void setPerfis(Perfil perfis) {
        this.perfis = perfis;
    }

    public Funcao getFuncao() {
        return funcao;
    }

    public void setFuncao(Funcao funcao) {
        this.funcao = funcao;
    }

    public Contato getContato() {
        return contato;
    }

    public void setContato(Contato contato) {
        this.contato = contato;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }


    
    
}