package com.soccersite.model;


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
	String username;
	String password;
	int roleID;

	
	public AdminUser() {}
	
	public AdminUser(int adminID, String firstName, String lastName, String email, String username, String password,
			int roleID) {
		super();
		this.id = adminID;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.username = username;
		this.password = password;
		this.roleID = roleID;
	}

	public int getAdminID() {
		return id;
	}



	public void setAdminID(int adminID) {
		this.id = adminID;
	}



	public int getRoleID() {
		return roleID;
	}



	public void setRoleID(int roleID) {
		this.roleID = roleID;
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

	
	
	
}
