package com.soccersite.model;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.soccersite.custom.generators.CustomGenerator;

@SuppressWarnings("serial")
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
            @Parameter(name = CustomGenerator.SEQUENCE_PREFIX_PARAMETER, value = "TEAM_"),
            @Parameter(name = CustomGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d") })
	String teamID;
	
	
//	@Column(unique= true)
	String teamName;
	
	// Foreign key
//	String categoryID;
	@OneToOne()
    @JoinColumn(name = "category_id", referencedColumnName = "id",nullable = true)
    private Category category;
	
	// Foreign key
//	String coachID;
	@OneToOne()
    @JoinColumn(name = "coach_id", referencedColumnName = "id",nullable = true)
    private Coach coach;
	
	// Foreign key

	@OneToOne()
    @JoinColumn(name = "tournament_id", referencedColumnName = "id",nullable = true)
    private Tournament tournament;
	

	String tournamentID;
	boolean isVerified;	
	String gender;
	String age;
	String coachName;
	String clubName;
	String city;
	String state;
	String association;
	String league;
	String playLevel;
	String primaryJerseyColor;
	String altJerseyColor;
	String oldestDOB;
	String applicationCategory;
	String teamContactName;
	String emailAddress;
	

	

	public Team() {}
	
	public Team(String teamID, String teamName, Category category, 
			boolean isVerified, String gender, String age, String coachName, String clubName, String city, String state,
			String association, String league, String playLevel, String primaryJerseyColor, String altJerseyColor,
			String oldestDOB, String applicationCategory, String teamContactName, String emailAddress) {
		super();
		this.teamID = teamID;
		this.teamName = teamName;
		this.category = category;
//		this.coach = coach;
//		this.tournament = tournament;
		this.isVerified = isVerified;
		this.gender = gender;
		this.age = age;
		this.coachName = coachName;
		this.clubName = clubName;
		this.city = city;
		this.state = state;
		this.association = association;
		this.league = league;
		this.playLevel = playLevel;
		this.primaryJerseyColor = primaryJerseyColor;
		this.altJerseyColor = altJerseyColor;
		this.oldestDOB = oldestDOB;
		this.applicationCategory = applicationCategory;
		this.teamContactName = teamContactName;
		this.emailAddress = emailAddress;
	}
	
	public Team(String teamName, Category category, 
			boolean isVerified, String gender, String age, String coachName, String clubName, String city, String state,
			String association, String league, String playLevel, String primaryJerseyColor, String altJerseyColor,
			String oldestDOB, String applicationCategory, String teamContactName, String emailAddress) {
		super();
//		this.teamID = teamID;
		this.teamName = teamName;
		this.category = category;
//		this.coach = coach;
//		this.tournament = tournament;
		this.isVerified = isVerified;
		this.gender = gender;
		this.age = age;
		this.coachName = coachName;
		this.clubName = clubName;
		this.city = city;
		this.state = state;
		this.association = association;
		this.league = league;
		this.playLevel = playLevel;
		this.primaryJerseyColor = primaryJerseyColor;
		this.altJerseyColor = altJerseyColor;
		this.oldestDOB = oldestDOB;
		this.applicationCategory = applicationCategory;
		this.teamContactName = teamContactName;
		this.emailAddress = emailAddress;
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

	public boolean isVerified() {
		return isVerified;
	}

	public void setVerified(boolean status) {
		this.isVerified = status;
	}

	@Override
	public String toString() {

		return "Team [teamName=" + teamName + ", categoryId=" + category.id + ", coachID=" + coach.id + ", tournamentID="
				+ tournament.id + ", status=" + isVerified + ", teamID=" + teamID + "]";}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getCoachName() {
		return coachName;
	}

	public void setCoachName(String coachName) {
		this.coachName = coachName;
	}

	public String getClubName() {
		return clubName;
	}

	public void setClubName(String clubName) {
		this.clubName = clubName;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getAssociation() {
		return association;
	}

	public void setAssociation(String association) {
		this.association = association;
	}

	public String getLeague() {
		return league;
	}

	public void setLeague(String league) {
		this.league = league;
	}

	public String getPlayLevel() {
		return playLevel;
	}

	public void setPlayLevel(String playLevel) {
		this.playLevel = playLevel;
	}

	public String getPrimaryJerseyColor() {
		return primaryJerseyColor;
	}

	public void setPrimaryJerseyColor(String primaryJerseyColor) {
		this.primaryJerseyColor = primaryJerseyColor;
	}

	public String getAltJerseyColor() {
		return altJerseyColor;
	}

	public void setAltJerseyColor(String altJerseyColor) {
		this.altJerseyColor = altJerseyColor;
	}

	public String getOldestDOB() {
		return oldestDOB;
	}

	public void setOldestDOB(String oldestDOB) {
		this.oldestDOB = oldestDOB;
	}

	public String getApplicationCategory() {
		return applicationCategory;
	}

	public void setApplicationCategory(String applicationCategory) {
		this.applicationCategory = applicationCategory;
	}

	public String getTeamContactName() {
		return teamContactName;
	}

	public void setTeamContactName(String teamContactName) {
		this.teamContactName = teamContactName;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}	
	
	
}
