/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.buscaapi.resources;

import br.com.buscaapi.models.Contato;
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
@Path("contatos")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ContatoResource {
        
    static List<Contato> contato = new ArrayList<>();
    
    @PersistenceContext(unitName = "BuscaPU")
    EntityManager entityManager;
    
    @GET
    public List<Contato> getContato() {
        return entityManager.createQuery("SELECT a FROM Contato a", Contato.class).getResultList();
    }
    
    @POST
    public Response addContato(Contato contato){
        entityManager.persist(contato);
        return Response.status(Response.Status.CREATED).entity(contato).build();
    }
    
    @GET
    @Path("{id}")
    public Contato getContato(@PathParam("id")UUID id){
        return entityManager.find(Contato.class, id);
    }
    
    @DELETE
    @Path("{id}")
    public void removeContato(@PathParam("id")UUID id){
        Contato contato = entityManager.find(Contato.class, id);
        entityManager.remove(contato);
    }
    
    @PUT
    @Path("{id}")
    public Contato updateContato(@PathParam("id")UUID id, Contato a){
        a.setId(id);
        entityManager.merge(a);
        return a;
    }
}
