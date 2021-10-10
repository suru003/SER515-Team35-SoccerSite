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

import com.soccersite.model.Tournament;
import com.soccersite.repo.TournamentManagerRepo;
import com.soccersite.services.TournamentManagerService;

@RestController
@CrossOrigin()
@RequestMapping("/tournament")
public class TournamentManagerController {
	
	
	private final TournamentManagerService tournamentManagerService;
	private final TournamentManagerRepo tournamentManagerRepo;

	public TournamentManagerController(TournamentManagerService tournamentManagerService,
			TournamentManagerRepo tournamentManagerRepo) {
		super();
		this.tournamentManagerService = tournamentManagerService;
		this.tournamentManagerRepo = tournamentManagerRepo;
	}
		
	@GetMapping("/all")
	public ResponseEntity<List<Tournament>> findAllTournaments(){
		List<Tournament> list = tournamentManagerService.findAllTournaments();
		return new ResponseEntity<List<Tournament>>(list, HttpStatus.OK) ;
	}
	
//	@GetMapping("/status/{status}")
//	public ResponseEntity<List<Referee>> findByStatus(@PathVariable("status") String status){
//		List<Referee> list = tournamentManagerService.findByStatus(status);
//		return new ResponseEntity<List<Referee>>(list, HttpStatus.OK) ;
//	}

	@GetMapping("/find/{id}")
	public ResponseEntity<Tournament> findTournamentById(@PathVariable("id") String id){
		Tournament tournament = tournamentManagerService.findTournamentById(id);
		return new ResponseEntity<Tournament>(tournament, HttpStatus.OK) ;
	}
	
	
	@PostMapping("/insert")
	public ResponseEntity<Tournament> insertTournament(@RequestBody Tournament tournament){
		Tournament response = tournamentManagerService.addTournament(tournament);
		return new ResponseEntity<Tournament>(response, HttpStatus.CREATED) ;
	}
	
	@PutMapping("/update")
	public ResponseEntity<Tournament> updateReferee(@RequestBody Tournament tournament){
		Tournament response = tournamentManagerService.addTournament(tournament);
		return new ResponseEntity<Tournament>(response, HttpStatus.OK) ;
	}

//	
//	@DeleteMapping("/delete/{id}")
//	public ResponseEntity<?> deleteReferee(@PathVariable("id") int id){
//		refereeService.deleteReferee(id);
//		return new ResponseEntity<>("Referee deleted:"+id,HttpStatus.OK) ;
//	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteTournament(@PathVariable("id") String id){
		tournamentManagerService.deleteTournament(id);
		return new ResponseEntity<>("Tournament deleted:"+id,HttpStatus.OK) ;
	}
	


}
