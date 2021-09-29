package com.soccersite.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Referee {
	
	@Id
	@Column(nullable= false, updatable= false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	int refID;
	String firstName;
	String lastName;
	String email;
	long contactNo;
	String username;
	String password;
	String address;
	String city;
	String country;
	int roleID;
	
	public Referee() {}

	public Referee(int refID, String firstName, String lastName, String email, long contactNo, String username,
			String password, String address, String city, String country, int roleID) {
		super();
		this.refID = refID;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.contactNo = contactNo;
		this.username = username;
		this.password = password;
		this.address = address;
		this.city = city;
		this.country = country;
		this.roleID = roleID;
	}

	public int getId() {
		return refID;
	}

	public void setId(int refID) {
		this.refID = refID;
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

	public long getContactNo() {
		return contactNo;
	}

	public void setContactNo(long contactNo) {
		this.contactNo = contactNo;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}
	
	
	
	

}
