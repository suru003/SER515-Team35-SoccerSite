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
public class TournamentManager {
	
	@Id
	@Column(nullable= false, updatable= false)
//	@GeneratedValue(strategy = GenerationType.AUTO)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_id")
    @GenericGenerator(
        name = "user_id", 
        strategy = "com.soccersite.custom.generators.CustomGenerator", 
        parameters = {
            @Parameter(name = CustomGenerator.INCREMENT_PARAM, value = "50"),
            @Parameter(name = CustomGenerator.SEQUENCE_PREFIX_PARAMETER, value = "TMAN_"),
            @Parameter(name = CustomGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d") })
	String id;
	String firstName;
	String lastName;
	@Column(unique= true)
	String email;
	long contactNo;
	String address;
	String city;
	String country;
	
	
	
//    @PrimaryKeyJoinColumn
//	@OneToOne(mappedBy = "tournamentManager", fetch = FetchType.LAZY,cascade =  CascadeType.ALL)
//	Tournament tournament;
	

	
	
	public TournamentManager() {}


	public TournamentManager(String id, String firstName, String lastName, String email, long contactNo, String address,
			String city, String country) {
		super();
		this.id = id; 
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.contactNo = contactNo;
		this.address = address;
		this.city = city;
		this.country = country;
//		this.tournament = tournament;
	}


	public String getId() {
		return id;
	}


	public void setId(String id) {
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


	public long getContactNo() {
		return contactNo;
	}


	public void setContactNo(long contactNo) {
		this.contactNo = contactNo;
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

//
//	public Tournament getTournament() {
//		return tournament;
//	}
//
//
//	public void setTournament(Tournament tournament) {
//		this.tournament = tournament;
//	}




}
