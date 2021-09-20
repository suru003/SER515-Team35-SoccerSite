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

import com.soccersite.model.Coach;
import com.soccersite.services.CoachService;

@RestController
@CrossOrigin()
@RequestMapping("/coaches")
public class CoachController {
	private final CoachService coachService;

	public CoachController(CoachService coachService) {
		super();
		this.coachService = coachService;
	}
		
	@GetMapping("/all")
	public ResponseEntity<List<Coach>> findAllCoaches(){
		List<Coach> list = coachService.findAllCoaches();
		return new ResponseEntity<List<Coach>>(list, HttpStatus.OK) ;
	}
	
	@GetMapping("/find/{id}")
	public ResponseEntity<Coach> findCoachById(@PathVariable("id") String id){
		Coach coach = coachService.findCoachById(id);
		return new ResponseEntity<Coach>(coach, HttpStatus.OK) ;
	}
	
	
	@PostMapping("/insert")
	public ResponseEntity<Coach> insertCoach(@RequestBody Coach coach){
		Coach response = coachService.addCoach(coach);
		return new ResponseEntity<Coach>(response, HttpStatus.CREATED) ;
	}
	
	@PutMapping("/update")
	public ResponseEntity<Coach> updateCoach(@RequestBody Coach coach){
		Coach response = coachService.addCoach(coach);
		return new ResponseEntity<Coach>(response, HttpStatus.OK) ;
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteCoach(@PathVariable("id") String id){
		coachService.deleteCoach(id);
		return new ResponseEntity<>("Deleted Coach:"+id,HttpStatus.OK) ;
	}
}
