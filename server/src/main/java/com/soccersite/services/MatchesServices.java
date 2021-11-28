package com.soccersite.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soccersite.exceptions.EntryNotFoundExcemption;
import com.soccersite.model.Matches;

import com.soccersite.repo.MatchesRepo;


@Service
public class MatchesServices {
	 private final MatchesRepo repo;
	 @Autowired
		public MatchesServices(MatchesRepo repo) {
			super();
			this.repo = repo;
		}
	 public List<Matches> findAllMatches(){
			return repo.findAll();
		}
	/* public Matches findMatchesbyDate(String date) {
		 return repo.findMatchesbyDate(date).orElseThrow(()->new EntryNotFoundExcemption("Matches with date: "+date+" not found in the repositiory")); 
	}*/
}
