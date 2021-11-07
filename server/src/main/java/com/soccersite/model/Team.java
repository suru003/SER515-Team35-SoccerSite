package com.soccersite.model;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.soccersite.custom.generators.CustomGenerator;

@Entity
public class Team implements Serializable{
	@Id
	@Column(nullable= false, updatable= false)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_id")
    @GenericGenerator(
        name = "user_id", 
        strategy = "com.soccersite.custom.generators.CustomGenerator", 
        parameters = {
            @Parameter(name = CustomGenerator.INCREMENT_PARAM, value = "50"),
            @Parameter(name = CustomGenerator.SEQUENCE_PREFIX_PARAMETER, value = "TMN_"),
            @Parameter(name = CustomGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d") })
	String teamID;
	
	@Column(unique= true)
	String teamName;
	
	// Foreign key
//	String categoryID;
	@OneToOne()
    @JoinColumn(name = "cat_fk", referencedColumnName = "id",nullable = false)
    private Category category;
	
	// Foreign key
//	String coachID;
	@OneToOne()
    @JoinColumn(name = "coach_fk", referencedColumnName = "id",nullable = false)
    private Coach coach;
	
	// Foreign key
//	String tournamentID;
	@OneToOne()
    @JoinColumn(name = "tourn_fk", referencedColumnName = "id",nullable = false)
    private Tournament tournament;
	
	
	boolean status;

	

	public Team() {}
	
	public Team(String teamID, String teamName, Category category, Coach coach, Tournament tournament, boolean status) {
		super();
		this.teamID = teamID;
		this.category = category;
		this.teamName = teamName;
		this.coach = coach;
		this.tournament = tournament;
		this.status = status;
	}
	public String getTeamID() {
		return teamID;
	}

	public void setTeamID(String teamID) {
		this.teamID = teamID;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Coach getCoach() {
		return coach;
	}

	public void setCoachID(Coach coach) {
		this.coach = coach;
	}

	public Tournament getTournament() {
		return tournament;
	}

	public void setTournament(Tournament tournament) {
		this.tournament = tournament;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Team [teamName=" + teamName + ", categoryId=" + category.id + ", coachID=" + coach.id + ", tournamentID="
				+ tournament.id + ", status=" + status + ", teamID=" + teamID + "]";
	}	
	

	
}
