package com.soccersite.controllers;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
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

import com.soccersite.model.MatchesSchedule;
import com.soccersite.model.Team;
import com.soccersite.repo.MatchesScheduleRepo;
import com.soccersite.repo.TeamRepo;
import com.soccersite.services.MatchesScheduleService;
import com.soccersite.services.TeamService;


@RestController
@CrossOrigin()
@RequestMapping("/matchesSchedule")
public class MatchesScheduleController {
	
	
	private final MatchesScheduleService matchesScheduleService;
	private final MatchesScheduleRepo matchesScheduleRepo;

	public MatchesScheduleController(MatchesScheduleService matchesScheduleService, MatchesScheduleRepo matchesScheduleRepo) {
		super();
		this.matchesScheduleService = matchesScheduleService;
		this.matchesScheduleRepo = matchesScheduleRepo;
	}
		
	@GetMapping("/all")
	public ResponseEntity<List<MatchesSchedule>> findAllMatches(){
		List<MatchesSchedule> list = matchesScheduleService.findAllSchedules();
		return new ResponseEntity<List<MatchesSchedule>>(list, HttpStatus.OK) ;
	}


	@GetMapping("/find/{id}")
	public ResponseEntity<MatchesSchedule> findMatchById(@PathVariable("id") String id){
		MatchesSchedule match = matchesScheduleService.findMatchById(id);
		return new ResponseEntity<MatchesSchedule>(match, HttpStatus.OK) ;
	}
	
	
	@GetMapping("/findByDivision/{categoryName}")
	public ResponseEntity<List<MatchesSchedule>>findMatchByDivision(@PathVariable("categoryName") String categoryName){
		List<MatchesSchedule> list = matchesScheduleService.findSchedulesByDivision(categoryName);
		return new ResponseEntity<List<MatchesSchedule>>(list, HttpStatus.OK) ;
	}
	
	@GetMapping("/findByTeam/{teamID}")
	public ResponseEntity<List<MatchesSchedule>>findMatchByTeam(@PathVariable("teamID") String teamID){
		List<MatchesSchedule> list = matchesScheduleService.findSchedulesByTeam(teamID);
		return new ResponseEntity<List<MatchesSchedule>>(list, HttpStatus.OK) ;
	}
	
	@GetMapping("/findByDate/{date}")
	public ResponseEntity<List<MatchesSchedule>>findMatchByDate(@PathVariable("date") String date){
		List<MatchesSchedule> list = matchesScheduleService.findSchedulesByDate(date);
		return new ResponseEntity<List<MatchesSchedule>>(list, HttpStatus.OK) ;
	}
	
	@GetMapping("/findByVenue/{venue}")
	public ResponseEntity<List<MatchesSchedule>>findMatchByVenue(@PathVariable("venue") String venue){
		List<MatchesSchedule> list = matchesScheduleService.findSchedulesByVenue(venue);
		return new ResponseEntity<List<MatchesSchedule>>(list, HttpStatus.OK) ;
	}
	
	@PostMapping("/insert")
	public ResponseEntity<MatchesSchedule> insertMatch(@RequestBody MatchesSchedule match){
		MatchesSchedule response = matchesScheduleService.addMatch(match);
		return new ResponseEntity<MatchesSchedule>(response, HttpStatus.CREATED) ;
	}
	 
	@PutMapping("/update")
	public ResponseEntity<MatchesSchedule> updateMatch(@RequestBody MatchesSchedule match){
		MatchesSchedule response = matchesScheduleService.addMatch(match);
		return new ResponseEntity<MatchesSchedule>(response, HttpStatus.OK) ;
	}

	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteMatch(@PathVariable("id") String id){
		matchesScheduleService.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK) ;
	}
	
//	@GetMapping("/status/{isVerified}")
//	public ResponseEntity<List<Team>> findByStatus(@PathVariable("isVerified") boolean isVerified){
//		List<Team> list = teamService.findByStatus(isVerified);
//		return new ResponseEntity<List<Team>>(list, HttpStatus.OK) ;
//	}
	
//	@GetMapping("/status/true")
//	public ResponseEntity<List<Team>> findByisVerifiedTrue(){
//		List<Team> list = teamService.findByisVerifiedTrue();
//		return new ResponseEntity<List<Team>>(list, HttpStatus.OK) ;
//	}
//	
//	@GetMapping("/status/false")
//	public ResponseEntity<List<Team>> findByisVerifiedFalse(){
//		List<Team> list = teamService.findByisVerifiedFalse();
//		return new ResponseEntity<List<Team>>(list, HttpStatus.OK) ;
//	}
	
	
}
