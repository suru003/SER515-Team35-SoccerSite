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
	
	public TournamentManager addCoach(TournamentManager manager) {
		return repo.save(manager);
	}
	
	public List<TournamentManager> findAllManagers(){
		return repo.findAll();
	}
	
	public TournamentManager updateManager(TournamentManager manager) {
		return repo.save(manager);
	}
	
	public void deleteManager(int id) {
		 repo.deleteById(id);
	}
	
	public TournamentManager findManagerById(int id) {
		 return repo.findManagerById(id).orElseThrow(()->new EntryNotFoundExcemption("Tournament Manager with id: "+id+" not found in the repositiory")); 
	}

}
