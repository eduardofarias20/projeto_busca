/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.buscaapi.resources;

import br.com.buscaapi.models.Funcao;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author Arthur
 */
@Stateless
@Path("funcoes")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class FuncaoResource {
    static List<Funcao> funcao = new ArrayList<>();
    
    @PersistenceContext(unitName = "BuscaPU")
    EntityManager entityManager;
    
    @GET
    public List<Funcao> getFuncao() {
        return entityManager.createQuery("SELECT a FROM Funcao a", Funcao.class).getResultList();
    }
    
    @POST
    public Response addFuncao(Funcao funcao){
        entityManager.persist(funcao);
        return Response.status(Response.Status.CREATED).entity(funcao).build();
    }
    
    @GET
    @Path("{id}")
    public Funcao getFuncao(@PathParam("id")UUID id){
        return entityManager.find(Funcao.class, id);
    }
    
    @DELETE
    @Path("{id}")
    public void removeFuncao(@PathParam("id")UUID id){
        Funcao funcao = entityManager.find(Funcao.class, id);
        entityManager.remove(funcao);
    }
    
    @PUT
    @Path("{id}")
    public Funcao updateFuncao(@PathParam("id")UUID id, Funcao a){
        a.setId(id);
        entityManager.merge(a);
        return a;
    }
    
}
