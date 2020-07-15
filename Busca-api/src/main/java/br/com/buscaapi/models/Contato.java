/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.buscaapi.models;

import java.io.Serializable;
import java.util.UUID;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

/**
 *
 * @author Arthur
 */
@Entity
@Table(name = "Contato", schema = "public")
public class Contato implements Serializable {
    
    @Id
    @GeneratedValue
    private UUID id;
    
    @Column(unique = false)
    private String telefone;
    
    @NotNull
    @Column(unique = true)
    private String celular;
    
    @NotNull
    @Column(unique = true)
    private String email;

    public Contato(){
        
    }
   
    
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    
}


//    id?: number;
//    telefone: string;
//    celular: string;
//    email: string;