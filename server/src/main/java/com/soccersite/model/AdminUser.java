package com.soccersite.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AdminUser {
	
	@Id
	@Column(nullable= false, updatable= false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String firstName;
	String lastName;
	String email;
//	String imageUrl;
	String username;
	String password;
//	Set<Roles> role;
	
	public AdminUser() {
		
	}
	
	public AdminUser(int id, String firstName, String lastName, String email, String username,
			String password) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.username = username;
		this.password = password;
//		this.role = role;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
//	public Set<Roles> getRole() {
//		return role;
//	}
//
//	public void setRole(Set<Roles> role) {
//		this.role = role;
//	}
	


	
	
}
