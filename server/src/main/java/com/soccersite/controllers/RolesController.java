package com.soccersite.controllers;

import org.aspectj.lang.annotation.Before;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.soccersite.model.Roles;
import com.soccersite.services.RoleService;

@RestController
@CrossOrigin()
@RequestMapping("/roles")
public class RolesController {
	
	private final RoleService rolesService;
	
	public RolesController(RoleService rolesService) {
		super();
		this.rolesService = rolesService;
	}
	

	@Before(value = "")
	@GetMapping("/insert")
	public String insertRole(){
		Roles role = new Roles(1, "Admin");
		Roles role1 = new Roles(2, "Coach");
		Roles role2 = new Roles(3, "Referee");
		Roles role3 = new Roles(4, "Player");
		Roles role4 = new Roles(5, "Tournament manager");

		Roles response = rolesService.addRoles(role);
		Roles response1 = rolesService.addRoles(role1);
		Roles response2 = rolesService.addRoles(role2);
		Roles response3 = rolesService.addRoles(role3);
		Roles response4 = rolesService.addRoles(role4);
//		return new ResponseEntity<Roles>(response, HttpStatus.CREATED) ;
		return "Roles inserted into table";
	}
}
