package com.soccersite.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soccersite.exceptions.EntryNotFoundExcemption;
import com.soccersite.model.Roles;
import com.soccersite.repo.RolesRepo;

@Service
public class RoleService {
	
	@Autowired
	private RolesRepo repo;
	
	public RoleService() {
		
	}
	
	public Roles addRoles(Roles roles) {
		return repo.save(roles);
	}
	
	public List<Roles> findAllRoles(){
		return repo.findAll();
	}
	
	public Roles addRole(Roles role) {
		return repo.save(role);
	}
	
	public Roles findRoleById(int id) {
		 return repo.findRoleById(id).orElseThrow(()->new EntryNotFoundExcemption("Role with id: "+id+" not found in the repositiory")); 
	}

}
