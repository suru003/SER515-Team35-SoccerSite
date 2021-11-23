package com.soccersite.controllers;

import java.util.List;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.soccersite.model.TournamentManager;
import com.soccersite.services.TournamentManagerService;

@RestController
@CrossOrigin()
@RequestMapping("/tournamentManager")
public class TournamentManagerController {
	
	
	private final TournamentManagerService tournamentManagerService;

	public TournamentManagerController(TournamentManagerService tournamentManagerService) {
		super();
		this.tournamentManagerService = tournamentManagerService;
	}
		
	@GetMapping("/all")
	public ResponseEntity<List<TournamentManager>> findAllTournamentManagers(){
		List<TournamentManager> list = tournamentManagerService.findAllTournamentManager();
		return new ResponseEntity<List<TournamentManager>>(list, HttpStatus.OK) ;
	}


	@GetMapping("/find/{id}")
	public ResponseEntity<TournamentManager> findTournamentById(@PathVariable("id") String id){
		TournamentManager tournament = tournamentManagerService.findTournamentManagerById(id);
		return new ResponseEntity<TournamentManager>(tournament, HttpStatus.OK) ;
	}
	
	
	@PostMapping("/insert")
	public ResponseEntity<TournamentManager> insertTournament(@RequestBody TournamentManager tournamentManager){
		TournamentManager response = tournamentManagerService.addTournamentManager(tournamentManager);
		return new ResponseEntity<TournamentManager>(response, HttpStatus.CREATED) ;
	}
	
	@PutMapping("/update")
	public ResponseEntity<TournamentManager> updateTournamentManager(@RequestBody TournamentManager tournamentManager){
		TournamentManager response = tournamentManagerService.addTournamentManager(tournamentManager);
		return new ResponseEntity<TournamentManager>(response, HttpStatus.OK) ;
	}

	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteTournamentManager(@PathVariable("id") String id){
		tournamentManagerService.deleteTournamentManager(id);
		return new ResponseEntity<>("TournamentManager deleted:"+id,HttpStatus.OK) ;
	}
	


}
