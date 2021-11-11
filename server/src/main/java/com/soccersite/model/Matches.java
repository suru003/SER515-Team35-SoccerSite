package com.soccersite.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Matches {
	@Id
	@Column(nullable= false, updatable= false)
//	@GeneratedValue(strategy = GenerationType.AUTO)
	String team_names;
	String date;
	public Matches() {
		
	}
	
	public Matches(String team_names, String date) {
		super();
		this.team_names=team_names;
		this.date=date;
		
		
	}
	public String getTeamNames() {
		return team_names;
	}
	public void setTeamNames(String team_names) {
		this.team_names=team_names;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date=date;
	}
	

}
