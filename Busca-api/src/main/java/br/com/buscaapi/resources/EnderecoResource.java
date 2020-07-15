/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.buscaapi.resources;

import br.com.buscaapi.models.Endereco;
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
@Path("enderecos")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class EnderecoResource {
    
    static List<Endereco> endereco = new ArrayList<>();
    
    @PersistenceContext(unitName = "BuscaPU")
    EntityManager entityManager;
    
    @GET
    public List<Endereco> getEndereco() {
        return entityManager.createQuery("SELECT a FROM Endereco a", Endereco.class).getResultList();
    }
    
    @POST
    public Response addEndereco(Endereco endereco){
        entityManager.persist(endereco);
        return Response.status(Response.Status.CREATED).entity(endereco).build();
    }
    
    @GET
    @Path("{id}")
    public Endereco getEndereco(@PathParam("id")UUID id){
        return entityManager.find(Endereco.class, id);
    }
    
    @DELETE
    @Path("{id}")
    public void removeEndereco(@PathParam("id")UUID id){
        Endereco endereco = entityManager.find(Endereco.class, id);
        entityManager.remove(endereco);
    }
    
    @PUT
    @Path("{id}")
    public Endereco updateLivro(@PathParam("id")UUID id, Endereco a){
        a.setId(id);
        entityManager.merge(a);
        return a;
    }
    
}