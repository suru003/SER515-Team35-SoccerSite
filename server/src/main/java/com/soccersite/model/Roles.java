package com.soccersite.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Roles {

	
	@Id
	@Column(nullable= false, updatable= false)
//	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String roles;

	
	public Roles() {
		
	}
	
	
	public Roles(int id, String roles) {
		super();
		this.id = id;
		this.roles = roles;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getRoles() {
		return roles;
	}

	public void setRoles(String roles) {
		this.roles = roles;
	}

	

	
	

}
