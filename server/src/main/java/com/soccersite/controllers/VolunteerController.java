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

import com.soccersite.model.Volunteer;
import com.soccersite.services.VolunteerService;

@RestController
@CrossOrigin()
@RequestMapping("/volunteers")
public class VolunteerController {
	
	private final VolunteerService volunteerService;

	public VolunteerController(VolunteerService volunteerService) {
		super();
		this.volunteerService = volunteerService;
	}
		
	@GetMapping("/all")
	public ResponseEntity<List<Volunteer>> findAllVolunteers(){
		List<Volunteer> list = volunteerService.findAllVolunteers();
		return new ResponseEntity<List<Volunteer>>(list, HttpStatus.OK) ;
	}
	
	@GetMapping("/status/{status}")
	public ResponseEntity<List<Volunteer>> findByStatus(@PathVariable("status") String status){
		List<Volunteer> list = volunteerService.findByStatus(status);
		return new ResponseEntity<List<Volunteer>>(list, HttpStatus.OK) ;
	}
	
//	@GetMapping("/find/{id}")
//	public ResponseEntity<Referee> findRefereeById(@PathVariable("id") int id){
//		Referee referee = refereeService.findRefereeById(id);
//		return new ResponseEntity<Referee>(referee, HttpStatus.OK) ;
//	}
	
	@GetMapping("/find/{id}")
	public ResponseEntity<Volunteer> findVolunteerById(@PathVariable("id") String id){
		Volunteer volunteer = volunteerService.findVolunteerById(id);
		return new ResponseEntity<Volunteer>(volunteer, HttpStatus.OK) ;
	}
	
	
	@PostMapping("/insert")
	public ResponseEntity<Volunteer> insertVolunteer(@RequestBody Volunteer volunteer){
		Volunteer response = volunteerService.addVolunteer(volunteer);
		return new ResponseEntity<Volunteer>(response, HttpStatus.CREATED) ;
	}
	
	@PutMapping("/update")
	public ResponseEntity<Volunteer> updateVolunteer(@RequestBody Volunteer volunteer){
		Volunteer response = volunteerService.addVolunteer(volunteer);
		return new ResponseEntity<Volunteer>(response, HttpStatus.OK) ;
	}

//	
//	@DeleteMapping("/delete/{id}")
//	public ResponseEntity<?> deleteReferee(@PathVariable("id") int id){
//		refereeService.deleteReferee(id);
//		return new ResponseEntity<>("Referee deleted:"+id,HttpStatus.OK) ;
//	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteVolunteer(@PathVariable("id") String id){
		volunteerService.deleteById(id);
		return new ResponseEntity<>("Volunteer deleted:"+id,HttpStatus.OK) ;
	}
	


}
