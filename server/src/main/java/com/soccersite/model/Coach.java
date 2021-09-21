package com.soccersite.model;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

@Entity
public class Coach implements Serializable{
	@Id
	@Column(nullable= false, updatable= false)
	String id;
	String firstName;
	String lastName;
	String email;
	String imageUrl;
	
	
	public Coach() {}
	public Coach(String iD, String firstName, String lastName, String email, String imageUrl) {
		super();
		id = iD;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.imageUrl = imageUrl;
	}
	
	public String getID() {
		return id;
	}
	public void setID(String iD) {
		id = iD;
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
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	@Override
	public String toString() {
		return "Coach [ID=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", imageUrl=" + imageUrl + "]";
	}
	
}