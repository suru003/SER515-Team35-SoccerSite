package com.soccersite.controllers;

import java.util.List;
import java.util.Optional;

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

import com.soccersite.model.Referee;
import com.soccersite.repo.RefereeRepo;
import com.soccersite.services.RefereeService;

@RestController
@CrossOrigin()
@RequestMapping("/referees")
public class RefereeController {
	
	private final RefereeService refereeService;
	private final RefereeRepo refereeRepo;

	public RefereeController(RefereeService refereeService,
			RefereeRepo refereeRepo) {
		super();
		this.refereeService = refereeService;
		this.refereeRepo = refereeRepo;
	}
		
	@GetMapping("/all")
	public ResponseEntity<List<Referee>> findAllReferees(){
		List<Referee> list = refereeService.findAllReferees();
		return new ResponseEntity<List<Referee>>(list, HttpStatus.OK) ;
	}
	
	@GetMapping("/status/{status}")
	public ResponseEntity<List<Referee>> findByStatus(@PathVariable("status") String status){
		List<Referee> list = refereeService.findByStatus(status);
		return new ResponseEntity<List<Referee>>(list, HttpStatus.OK) ;
	}
	
	@GetMapping("/find/{id}")
	public ResponseEntity<Referee> findRefereeById(@PathVariable("id") String id){
		Referee referee = refereeService.findRefereeById(id);
		return new ResponseEntity<Referee>(referee, HttpStatus.OK) ;
	}
	
	
	@PostMapping("/insert")
	public ResponseEntity<Referee> insertReferee(@RequestBody Referee referee){
		Referee response = refereeService.addReferee(referee);
		return new ResponseEntity<Referee>(response, HttpStatus.CREATED) ;
	}
	
	@PutMapping("/update")
	public ResponseEntity<Referee> updateReferee(@RequestBody Referee referee){
		Referee response = refereeService.addReferee(referee);
		return new ResponseEntity<Referee>(response, HttpStatus.OK) ;
	}

	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteReferee(@PathVariable("id") int id){
		refereeService.deleteReferee(id);
		return new ResponseEntity<>("Referee deleted:"+id,HttpStatus.OK) ;
	}
	


}
