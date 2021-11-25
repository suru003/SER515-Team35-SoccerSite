package com.soccersite.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Matches {
	@Id
	@Column(nullable= false, updatable= false)
//	@GeneratedValue(strategy = GenerationType.AUTO)
	String team_name1;
	String team_name2;
	String home_team;
	String time;
	String date;
	String category;
	public Matches() {
		
	}
	
	public Matches(String team_name1, String team_name2, String home_team, String time, String date, String Category) {
		super();
		this.team_name1=team_name1;
		this.team_name2=team_name2;
		this.home_team=home_team;
		this.category=category;
		this.date=date;
		this.time=time;
		
		
		
		
	}
	public String getTeam_name1() {
		return team_name1;
	}

	public void setTeam_name1(String team_name1) {
		this.team_name1 = team_name1;
	}

	public String getTeam_name2() {
		return team_name2;
	}

	public void setTeam_name2(String team_name2) {
		this.team_name2 = team_name2;
	}

	public String getHome_team() {
		return home_team;
	}

	public void setHome_team(String home_team) {
		this.home_team = home_team;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	/*public String getTeamNames() {
		return team_name1;
	}
	public void setTeamNames(String team_name1) {
		this.team_name1=team_name1;
	}*/
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date=date;
	}
	

}
