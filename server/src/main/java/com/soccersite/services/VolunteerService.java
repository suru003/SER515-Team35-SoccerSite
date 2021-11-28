package com.soccersite.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soccersite.exceptions.EntryNotFoundExcemption;
import com.soccersite.model.Volunteer;
import com.soccersite.repo.VolunteerRepo;

@Service
public class VolunteerService {

	private final VolunteerRepo repo;

	@Autowired
	public VolunteerService(VolunteerRepo repo) {
		super();
		this.repo = repo;
	}
	
	public Volunteer addVolunteer(Volunteer volunteer) {
		return repo.save(volunteer);
	}
	
	public List<Volunteer> findAllVolunteers(){
		return repo.findAll();
	}
	
	public Volunteer updateVolunteer(Volunteer admin) {
		return repo.save(admin);
	}
	
	public void deleteVolunteer(int id) {
		 repo.deleteById(id);
	}
	
	public void deleteById(String id) {
		 repo.deleteById(id);
	}
	
	public Volunteer findVolunteerById(String id) {
		 return repo.findVolunteerById(id).orElseThrow(
				 ()->new EntryNotFoundExcemption(
						 "Volunteer with id: "+id+" not found in the repositiory"));
	}
	
	public List<Volunteer> findByStatus(String status){
		return repo.findByStatus(status);
	}
	

}
