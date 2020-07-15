package br.com.buscaapi.models;

import java.io.Serializable;
import java.util.UUID;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "perfil", schema = "public")
@NamedQueries({
    @NamedQuery(name = "Perfil.findByPerfil", query = "SELECT A FROM Perfil A WHERE A.usuario = :usuario and A.senha = :senha")
})
public class Perfil implements Serializable {
    @Id
    @GeneratedValue
    private UUID id;

    @NotNull
    private String nome;
    
    @NotNull
    private String sobrenome;
    
    @NotNull
    @Column(unique = true)
    private String cpf;
        
    @NotNull
    private String sexo;
            
    @NotNull
    @Column(unique = true)
    private String usuario;
                
    @NotNull
    private String senha;

    public Perfil(){
        
    }

    
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}