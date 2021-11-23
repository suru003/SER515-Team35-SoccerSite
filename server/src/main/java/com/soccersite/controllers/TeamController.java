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

import com.soccersite.model.Team;
import com.soccersite.services.TeamService;


@RestController
@CrossOrigin()
@RequestMapping("/team")
public class TeamController {
	
	
	private final TeamService teamService;

	public TeamController(TeamService teamService) {
		super();
		this.teamService = teamService;
	}
		
	@GetMapping("/all")
	public ResponseEntity<List<Team>> findAllTeams(){
		List<Team> list = teamService.findAllTeams();
		return new ResponseEntity<List<Team>>(list, HttpStatus.OK) ;
	}


	@GetMapping("/find/{id}")
	public ResponseEntity<Team> findTeamById(@PathVariable("id") String id){
		Team team = teamService.findTeamById(id);
		return new ResponseEntity<Team>(team, HttpStatus.OK) ;
	}

	@GetMapping("/find/acceptedTeams/{categoryName}")
	public ResponseEntity<List<Team>> findTeamByCategoryAndisVerifiedTrue(@PathVariable("categoryName") String categoryName){
		List<Team> list = teamService.findAcceptedTeams(categoryName);
		return new ResponseEntity<List<Team>>(list, HttpStatus.OK) ;
	}
	
	
	@PostMapping("/insert")
	public ResponseEntity<Team> insertTeam(@RequestBody Team team){
		Team response = teamService.addTeam(team);
		return new ResponseEntity<Team>(response, HttpStatus.CREATED) ;
	}
	 
	@PutMapping("/update")
	public ResponseEntity<Team> updateTeam(@RequestBody Team team){
		Team response = teamService.addTeam(team);
		return new ResponseEntity<Team>(response, HttpStatus.OK) ;
	}

	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteTeam(@PathVariable("id") String id){
		teamService.deleteTeam(id);
		return new ResponseEntity<>(HttpStatus.OK) ;
	}
	
	@GetMapping("/status/true")
	public ResponseEntity<List<Team>> findByisVerifiedTrue(){
		List<Team> list = teamService.findByisVerifiedTrue();
		return new ResponseEntity<List<Team>>(list, HttpStatus.OK) ;
	}
	
	@GetMapping("/status/false")
	public ResponseEntity<List<Team>> findByisVerifiedFalse(){
		List<Team> list = teamService.findByisVerifiedFalse();
		return new ResponseEntity<List<Team>>(list, HttpStatus.OK) ;
	}
		
	@GetMapping("/find/division/{division}")
	public ResponseEntity<List<Team>> findByCategory(@PathVariable("division") String division){
		List<Team> list = teamService.findByCategory(division);
		return new ResponseEntity<List<Team>>(list, HttpStatus.OK) ;
	}
	
	
}
