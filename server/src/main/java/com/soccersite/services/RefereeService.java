package com.soccersite.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soccersite.exceptions.EntryNotFoundExcemption;
import com.soccersite.model.Referee;
import com.soccersite.repo.RefereeRepo;

@Service
public class RefereeService {

	private final RefereeRepo repo;

	@Autowired
	public RefereeService(RefereeRepo repo) {
		super();
		this.repo = repo;
	}
	
	public Referee addReferee(Referee referee) {
		return repo.save(referee);
	}
	
	public List<Referee> findAllReferees(){
		return repo.findAll();
	}
	
	public Referee updateReferee(Referee admin) {
		return repo.save(admin);
	}
	
	public void deleteReferee(int id) {
		 repo.deleteById(id);
	}
	
	public void deleteById(String id) {
		 repo.deleteById(id);
	}
	
	public Referee findRefereeById(String id) {
		 return repo.findRefereeById(id).orElseThrow(
				 ()->new EntryNotFoundExcemption(
						 "Referee with id: "+id+" not found in the repositiory")); 
	}
	
	public List<Referee> findByStatus(String status){
		return repo.findByStatus(status);
	}
	

}
