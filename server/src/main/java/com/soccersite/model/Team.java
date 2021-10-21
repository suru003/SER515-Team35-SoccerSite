package com.soccersite.model;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
	String categoryID;
	// Foreign key
	String coachID;
	// Foreign key
	String tournamentID;
	boolean status;

	
	
	

	public Team() {}
	
	public Team(String teamID, String teamName, String categoryId, String coachID, String tournamentID, boolean status) {
		super();
		this.teamID = teamID;
		this.categoryID = categoryId;
		this.teamName = teamName;
		this.coachID = coachID;
		this.tournamentID = tournamentID;
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

	public String getCategoryId() {
		return categoryID;
	}

	public void setCategoryId(String categoryId) {
		this.categoryID = categoryId;
	}

	public String getCoachID() {
		return coachID;
	}

	public void setCoachID(String coachID) {
		this.coachID = coachID;
	}

	public String getTournamentID() {
		return tournamentID;
	}

	public void setTournamentID(String tournamentID) {
		this.tournamentID = tournamentID;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Team [teamName=" + teamName + ", categoryId=" + categoryID + ", coachID=" + coachID + ", tournamentID="
				+ tournamentID + ", status=" + status + ", teamID=" + teamID + "]";
	}	
	

	
}
