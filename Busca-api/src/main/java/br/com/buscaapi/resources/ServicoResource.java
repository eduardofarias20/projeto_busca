/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.buscaapi.resources;

import br.com.buscaapi.models.Servico;
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
@Path("servicos")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ServicoResource {
    static List<Servico> perfis = new ArrayList<>();
    
    @PersistenceContext(unitName = "BuscaPU")
    EntityManager entityManager;
    
    @GET
    public List<Servico> getServico() {
        return entityManager.createQuery("SELECT a FROM Servico a", Servico.class).getResultList();
    }
    
    @POST
    public Response addServico(Servico servico){
        entityManager.persist(servico);
        return Response.status(Response.Status.CREATED).entity(servico).build();
    }
    
    @GET
    @Path("{id}")
    public Servico getServico(@PathParam("id")UUID id){
        return entityManager.find(Servico.class, id);
    }
    
    @DELETE
    @Path("{id}")
    public void removeServico(@PathParam("id")UUID id){
        Servico servico = entityManager.find(Servico.class, id);
        entityManager.remove(servico);
    }
     
    @PUT
    @Path("{id}")
    public Servico updateServico(@PathParam("id")UUID id, Servico a){
        a.setId(id);
        entityManager.merge(a);
        return a;
    }
}