package com.soccersite.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class TournamentManager {
	
	@Id
	@Column(nullable= false, updatable= false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String firstName;
	String lastName;
	int roleID;
	
	
	public TournamentManager(int id, String firstName, String lastName, int roleID) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.roleID = roleID;
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


	public int getRole() {
		return roleID;
	}


	public void setRole(int roleID) {
		this.roleID = roleID;
	}
	
	

}
