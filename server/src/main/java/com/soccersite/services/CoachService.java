package com.soccersite.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soccersite.exceptions.EntryNotFoundExcemption;
import com.soccersite.model.Coach;
import com.soccersite.repo.CoachRepo;

@Service
public class CoachService{
	private final CoachRepo repo;

	@Autowired
	public CoachService(CoachRepo repo) {
		super();
		this.repo = repo;
	}
	
	public Coach addCoach(Coach coach) {
		return repo.save(coach);
	}
	
	public List<Coach> findAllCoaches(){
		return repo.findAll();
	}
	
	public Coach updateCoach(Coach coach) {
		return repo.save(coach);
	}
	
	public void deleteCoach(String id) {
		 repo.deleteById(id);
	}
	
	public Coach findCoachById(String id) {
		 return repo.findCoachById(id).orElseThrow(()->new EntryNotFoundExcemption("Coach with id: "+id+" not found in the repositiory")); 
	}
}
