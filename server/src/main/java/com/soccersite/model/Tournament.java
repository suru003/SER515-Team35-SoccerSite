package com.soccersite.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.soccersite.custom.generators.CustomGenerator;

@Entity
public class Tournament {
	
	@Id
	@Column(nullable= false, updatable= false, name="tournament_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_id")
    @GenericGenerator(
        name = "user_id", 
        strategy = "com.soccersite.custom.generators.CustomGenerator", 
        parameters = {
            @Parameter(name = CustomGenerator.INCREMENT_PARAM, value = "50"),
            @Parameter(name = CustomGenerator.SEQUENCE_PREFIX_PARAMETER, value = "TN_"),
            @Parameter(name = CustomGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d") })
	String id;
	String tournamentName;
	String category;
	String startDate;
	String endDate;
	
	//foreign key
//  @OneToOne
//  @MapsId
//  @JoinColumn(name = "tournament_id")
	
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "manager_id", referencedColumnName = "id")
  private TournamentManager tournamentManager;
	 
	
	public Tournament() {}
	
	public Tournament(String id, String tournamentName, String category, String startDate, String endDate) {
		super();
		this.id = id;
		this.tournamentName = tournamentName;
		this.category = category;
		this.startDate = startDate;
		this.endDate = endDate;
//		this.tournamentManager = tournamentManager;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTournamentName() {
		return tournamentName;
	}

	public void setTournamentName(String tournamentName) {
		this.tournamentName = tournamentName;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public TournamentManager getTournamentManager() {
		return tournamentManager;
	}

	public void setTournamentManager(TournamentManager tournamentManager) {
		this.tournamentManager = tournamentManager;
	}
	
	

}
