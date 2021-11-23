package com.soccersite.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.soccersite.model.TournamentFees;
import com.soccersite.repo.TournamentFeeRepo;
import com.soccersite.services.TournamentFeeService;

@RestController
@CrossOrigin()
@RequestMapping("/tournamentfees")
public class TournamentFeeController {
	private final TournamentFeeService tournamentFeeServices;
	private final TournamentFeeRepo tournamentFeeRepo;
	public TournamentFeeController(TournamentFeeService tournamentFeeServices, TournamentFeeRepo tournamentFeeRepo) {
		super();
		this.tournamentFeeRepo=tournamentFeeRepo;
		this.tournamentFeeServices=tournamentFeeServices;
		
	}
	@GetMapping("/all")
	public ResponseEntity<List<TournamentFees>> findFees(){
		List<TournamentFees> list = tournamentFeeServices.findFees();
		return new ResponseEntity<List<TournamentFees>>(list, HttpStatus.OK) ;
	}

}
