/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.buscaapi.resources;

import br.com.buscaapi.models.Perfil;
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
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author Arthur
 */
@Stateless
@Path("perfis")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class PerfilResource {
    static List<Perfil> perfis = new ArrayList<>();
    
    @PersistenceContext(unitName = "BuscaPU")
    EntityManager entityManager;
    
    @GET
    public List<Perfil> getPerfil(@QueryParam("usuario") String usuario, @QueryParam("senha") String senha ) {
        if(usuario == null && senha == null){
            return entityManager.createQuery("SELECT a FROM Perfil a", Perfil.class).getResultList();
        }else{
            return entityManager.createNamedQuery("Perfil.findByPerfil").setParameter("usuario", usuario).setParameter("senha", senha).getResultList();
        }
    }
    
    @GET
    @Path("{id}")
    public Perfil getPerfil(@PathParam("id")UUID id){
        return entityManager.find(Perfil.class, id);
    }
    
    @POST
    public Response addPerfil(Perfil perfil){
        entityManager.persist(perfil);
        return Response.status(Response.Status.CREATED).entity(perfil).build();
    }
    
    @DELETE
    @Path("{id}")
    public void removePerfil(@PathParam("id")UUID id){
        Perfil perfil = entityManager.find(Perfil.class, id);
        entityManager.remove(perfil);
    }
     
    @PUT
    @Path("{id}")
    public Perfil updatePerfil(@PathParam("id")UUID id, Perfil a){
        a.setId(id);
        entityManager.merge(a);
        return a;
    }
}