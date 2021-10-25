package com.soccersite.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.soccersite.exceptions.EntryNotFoundExcemption;
import com.soccersite.model.Team;
import com.soccersite.repo.TeamRepo;

@Service
public class TeamService {
	
	private final TeamRepo repo;

	@Autowired
	public TeamService(TeamRepo repo) {
		super();
		this.repo = repo;
	}
	
	public Team addTeam(Team team) {
		return repo.save(team);
	}
	
	public List<Team> findAllTeams(){
		return repo.findAll();
	}
	
	public Team updateTeam(Team team) {
		return repo.updateById(team.getTeamID(), team.getTeamName(), team.getCategoryID(), team.getTournamentID(), team.isStatus());
	}
	
	public void deleteTeam(String teamID) {
		 repo.deleteById(teamID);
	}
	
	public Team findTeamById(String teamID) {
		 return repo.findTeamById(teamID).orElseThrow(()->new EntryNotFoundExcemption("Team with id: "+teamID+" not found in the repositiory")); 
	}

}
