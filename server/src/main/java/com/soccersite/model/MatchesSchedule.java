package com.soccersite.model;

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

@Entity
public class MatchesSchedule {
	
	@Id
	@Column(nullable= false, updatable= false)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_id")
    @GenericGenerator(
        name = "user_id", 
        strategy = "com.soccersite.custom.generators.CustomGenerator", 
        parameters = {
            @Parameter(name = CustomGenerator.INCREMENT_PARAM, value = "50"),
            @Parameter(name = CustomGenerator.SEQUENCE_PREFIX_PARAMETER, value = "SCH_"),
            @Parameter(name = CustomGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d") })
	String id;
	
	@OneToOne()
    @JoinColumn(name = "category_id", referencedColumnName = "id",nullable = false)
    private Category category;
	String time;
	
	@OneToOne()
    @JoinColumn(name = "field", referencedColumnName = "id",nullable = true)
	Field field;
	
	@OneToOne()
    @JoinColumn(name = "home_id", referencedColumnName = "teamID",nullable = false)
	Team homeTeam;
	String homeTeamScore;
	String date;
	
	@OneToOne()
    @JoinColumn(name = "visiting_id", referencedColumnName = "teamID",nullable = false)
	Team visitingTeam;
	String visitingTeamScore;
	String type;
	boolean isPlayed;
	
	@OneToOne()
    @JoinColumn(name = "referee", referencedColumnName = "id",nullable = true)
	Referee referee;
	
	public MatchesSchedule() {}
	
	public MatchesSchedule(Category category, String time, Field field, Team homeTeam,
			String homeTeamScore, Team visitingTeam, String visitingTeamScore, String type, String date) {
		super();
//		this.id = id;
		this.category = category;
		this.time = time;
		this.field = field;
		this.homeTeam = homeTeam;
		this.homeTeamScore = homeTeamScore;
		this.visitingTeam = visitingTeam;
		this.visitingTeamScore = visitingTeamScore;
		this.type = type;
		this.date=date;
		this.isPlayed = false;
	}
	
	public MatchesSchedule(Category category, String time, Field field, Team homeTeam,
			String homeTeamScore, Team visitingTeam, String visitingTeamScore, String type, String date, Referee referee) {
		super();
//		this.id = id;
		this.category = category;
		this.time = time;
		this.field = field;
		this.homeTeam = homeTeam;
		this.homeTeamScore = homeTeamScore;
		this.visitingTeam = visitingTeam;
		this.visitingTeamScore = visitingTeamScore;
		this.type = type;
		this.date=date;
		this.isPlayed = false;
		this.referee = referee;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public Field getField() {
		return field;
	}

	public void setField(Field field) {
		this.field = field;
	}

	public Team getHomeTeam() {
		return homeTeam;
	}

	public void setHomeTeam(Team homeTeam) {
		this.homeTeam = homeTeam;
	}

	public String getHomeTeamScore() {
		return homeTeamScore;
	}

	public void setHomeTeamScore(String homeTeamScore) {
		this.homeTeamScore = homeTeamScore;
	}

	public Team getVisitingTeam() {
		return visitingTeam;
	}

	public void setVisitingTeam(Team visitingTeam) {
		this.visitingTeam = visitingTeam;
	}

	public String getVisitingTeamScore() {
		return visitingTeamScore;
	}

	public void setVisitingTeamScore(String visitingTeamScore) {
		this.visitingTeamScore = visitingTeamScore;
	}

	
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public boolean isPlayed() {
		return isPlayed;
	}

	public void setPlayed(boolean isPlayed) {
		this.isPlayed = isPlayed;
	}

	public Referee getReferee() {
		return referee;
	}

	public void setReferee(Referee referee) {
		this.referee = referee;
	}
	

}
