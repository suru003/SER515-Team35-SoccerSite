package com.soccersite.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soccersite.exceptions.EntryNotFoundExcemption;
import com.soccersite.model.Tournament;
import com.soccersite.model.TournamentManager;
import com.soccersite.repo.TournamentRepo;

@Service
public class TournamentService {
	
	private final TournamentRepo repo;

	@Autowired
	public TournamentService(TournamentRepo repo) {
		super();
		this.repo = repo;
	}
	
	public Tournament addTournament(Tournament tournament) {
		return repo.save(tournament);
	}
	
	public List<Tournament> findAllTournament(TournamentManager manager_id){
//		return repo.findAll();
		return repo.findTournamentByTournamentManager(manager_id);
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
						 "Tournament with id: "+id+" not found in the repositiory")); 
	}
	
	public TournamentManager findTournamentManagerById(String id) {
		return repo.findTournamentManagerById(id).orElseThrow(
				 ()->new EntryNotFoundExcemption(
						 "TournamentManager with id: "+id+" not found in the repositiory"));
	}
	

}
