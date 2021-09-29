package com.soccersite.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
