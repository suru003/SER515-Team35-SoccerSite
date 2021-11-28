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

import com.soccersite.model.Field;
import com.soccersite.services.FieldService;


@RestController
@CrossOrigin()
@RequestMapping("/fields")
public class FieldController {
	
	
	private final FieldService fieldService;

	public FieldController(FieldService fieldService) {
		super();
		this.fieldService = fieldService;
	}
		
	
	@GetMapping("/all")
	public ResponseEntity<List<Field>> findAllFields(){
		List<Field> list = fieldService.findAllFields();
		return new ResponseEntity<List<Field>>(list, HttpStatus.OK) ;
	}


	@GetMapping("/find/{id}")
	public ResponseEntity<Field> findFieldById(@PathVariable("id") String id){
		Field field = fieldService.findFieldById(id);
		return new ResponseEntity<Field>(field, HttpStatus.OK) ;
	}
	
	
//	@GetMapping("/findByDivision/{categoryName}")
//	public ResponseEntity<List<MatchesSchedule>>findMatchByDivision(@PathVariable("categoryName") String categoryName){
//		List<MatchesSchedule> list = matchesScheduleService.findSchedulesByDivision(categoryName);
//		return new ResponseEntity<List<MatchesSchedule>>(list, HttpStatus.OK) ;
//	}
//	
//	@GetMapping("/findByTeam/{teamID}")
//	public ResponseEntity<List<MatchesSchedule>>findMatchByTeam(@PathVariable("teamID") String teamID){
//		List<MatchesSchedule> list = matchesScheduleService.findSchedulesByTeam(teamID);
//		return new ResponseEntity<List<MatchesSchedule>>(list, HttpStatus.OK) ;
//	}
//	
//	@GetMapping("/findByDate/{date}")
//	public ResponseEntity<List<MatchesSchedule>>findMatchByDate(@PathVariable("date") String date){
//		List<MatchesSchedule> list = matchesScheduleService.findSchedulesByDate(date);
//		return new ResponseEntity<List<MatchesSchedule>>(list, HttpStatus.OK) ;
//	}
//	
//	@GetMapping("/findByVenue/{venue}")
//	public ResponseEntity<List<MatchesSchedule>>findMatchByVenue(@PathVariable("venue") String venue){
//		List<MatchesSchedule> list = matchesScheduleService.findSchedulesByVenue(venue);
//		return new ResponseEntity<List<MatchesSchedule>>(list, HttpStatus.OK) ;
//	}
	
	@PostMapping("/insert")
	public ResponseEntity<Field> insertField(@RequestBody Field field){
		Field response = fieldService.addField(field);
		return new ResponseEntity<Field>(response, HttpStatus.CREATED) ;
	}
	 
	@PutMapping("/update")
	public ResponseEntity<Field> updateField(@RequestBody Field field){
		Field response = fieldService.addField(field);
		return new ResponseEntity<Field>(response, HttpStatus.OK) ;
	}

	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteField(@PathVariable("id") String id){
		fieldService.deleteField(id);
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
