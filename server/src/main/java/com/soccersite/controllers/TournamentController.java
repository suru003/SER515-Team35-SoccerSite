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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.soccersite.model.Tournament;
import com.soccersite.model.TournamentManager;
import com.soccersite.services.TournamentService;

@RestController
@CrossOrigin()
@RequestMapping("/tournament")
public class TournamentController {
	
	
	private final TournamentService tournamentService;

	public TournamentController(TournamentService tournamentService) {
		super();
		this.tournamentService = tournamentService;
	}
		
//	@GetMapping("/all")
//	public ResponseEntity<List<Tournament>> findAllTournaments(){
//		List<Tournament> list = tournamentService.findAllTournament();
//		return new ResponseEntity<List<Tournament>>(list, HttpStatus.OK) ;
//	}
	
	@GetMapping("/all/{manager_id}")
	public ResponseEntity<List<Tournament>> findAllTournaments(@PathVariable("manager_id") String manager_id){
		TournamentManager tournamentManager = tournamentService.findTournamentManagerById(manager_id);
//        tournament.setTournamentManager(tournamentManager);		
//		Tournament response = tournamentService.addTournament(tournament);
		List<Tournament> list = tournamentService.findAllTournament(tournamentManager);
		return new ResponseEntity<List<Tournament>>(list, HttpStatus.OK) ;
	}
	

	@GetMapping("/find/{id}")
	public ResponseEntity<Tournament> findTournamentById(@PathVariable("id") String id){
		Tournament tournament = tournamentService.findTournamentById(id);
		return new ResponseEntity<Tournament>(tournament, HttpStatus.OK) ;
	}
	
	
	@PostMapping("/insert")
	public ResponseEntity<Tournament> insertTournament(@RequestBody Tournament tournament, @RequestParam("manager_id") String manager_id ){
		TournamentManager tournamentManager = tournamentService.findTournamentManagerById(manager_id);
        tournament.setTournamentManager(tournamentManager);		
		Tournament response = tournamentService.addTournament(tournament);
		return new ResponseEntity<Tournament>(response, HttpStatus.CREATED) ;
	}
	
	@PutMapping("/update")
	public ResponseEntity<Tournament> updateReferee(@RequestBody Tournament tournament){
		Tournament response = tournamentService.addTournament(tournament);
		return new ResponseEntity<Tournament>(response, HttpStatus.OK) ;
	}

	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteTournament(@PathVariable("id") String id){
		tournamentService.deleteTournament(id);
		return new ResponseEntity<>("Tournament deleted:"+id,HttpStatus.OK) ;
	}
	


}
