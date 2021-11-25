package com.soccersite.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soccersite.exceptions.EntryNotFoundExcemption;
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
	
	public TournamentManager addTournamentManager(TournamentManager tournamentManager) {
		return repo.save(tournamentManager);
	}
	
	public List<TournamentManager> findAllTournamentManager(){
		return repo.findAll();
	}
	
	public TournamentManager updateTournamentManager(TournamentManager tournamentManager) {
		return repo.save(tournamentManager);
	}
	
	public void deleteTournamentManager(String id) {
		 repo.deleteById(id);
	}
	
	public TournamentManager findTournamentManagerById(String id) {
		 return repo.findTournamentManagerById(id).orElseThrow(
				 ()->new EntryNotFoundExcemption(
						 "Tournament Manager with id: "+id+" not found in the repositiory")); 
	}
	

}
