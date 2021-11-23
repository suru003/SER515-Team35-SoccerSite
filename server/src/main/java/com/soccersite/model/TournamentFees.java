package com.soccersite.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class TournamentFees {
	@Id
	@Column(nullable= false, updatable= false)

//	@GeneratedValue(strategy = GenerationType.AUTO)
	String category;
	String fee;
	public TournamentFees() {
		
	}
	
	public TournamentFees(String category, String fee) {
		super();
		this.category=category;
		this.fee=fee;
		
	}
	
	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
	public String getFee() {
		return fee;
	}

	public void setFee(String fee) {
		this.fee = fee;
	}
	

}
