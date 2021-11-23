package com.soccersite.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.soccersite.custom.generators.CustomGenerator;

@Entity
public class Coach {
	@Id
	@Column(nullable= false, updatable= false)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_id")
    @GenericGenerator(
        name = "user_id", 
        strategy = "com.soccersite.custom.generators.CustomGenerator", 
        parameters = {
            @Parameter(name = CustomGenerator.INCREMENT_PARAM, value = "50"),
            @Parameter(name = CustomGenerator.SEQUENCE_PREFIX_PARAMETER, value = "COACH_"),
            @Parameter(name = CustomGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d") })
	String id;
	String firstName;
	String lastName;
	@Column(unique= true)
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
	
	public Coach(String firstName, String lastName, String email) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
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
