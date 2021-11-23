package com.soccersite.controllers;

import java.util.List;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.soccersite.model.Matches;
import com.soccersite.services.MatchesServices;


@RestController
@CrossOrigin()
@RequestMapping("/matches")
public class MatchesController {
	private final MatchesServices matchesService;

	public MatchesController(MatchesServices matchesService) {
		super();
		this.matchesService = matchesService;
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Matches>> findAllMatches(){
		List<Matches> list = matchesService.findAllMatches();
		return new ResponseEntity<List<Matches>>(list, HttpStatus.OK) ;
	}
}
