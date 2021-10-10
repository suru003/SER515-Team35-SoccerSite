package com.soccersite.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soccersite.exceptions.EntryNotFoundExcemption;
import com.soccersite.model.Tournament;
import com.soccersite.model.TournamentManager;
import com.soccersite.repo.TournamentManagerRepo;

@Service
public class TournamentManagerService {
	
	private final TournamentManagerRepo repo;

	@Autowired
	public TournamentManagerService(TournamentManagerRepo repo) {
		super();
		this.repo = repo;
	}
	
	public Tournament addTournament(Tournament tournament) {
		return repo.save(tournament);
	}
	
	public List<Tournament> findAllTournaments(){
		return repo.findAll();
	}
	
	public Tournament updateTournament(Tournament tournament) {
		return repo.save(tournament);
	}
	
	public void deleteTournament(String id) {
		 repo.deleteById(id);
	}
	
	public Tournament findTournamentById(String id) {
		 return repo.findTournamentById(id).orElseThrow(
				 ()->new EntryNotFoundExcemption(
						 "Tournament Manager with id: "+id+" not found in the repositiory")); 
	}

}
