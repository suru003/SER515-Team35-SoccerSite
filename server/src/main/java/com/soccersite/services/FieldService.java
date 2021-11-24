package com.soccersite.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soccersite.model.Field;
import com.soccersite.repo.FieldRepo;

@Service
public class FieldService {

	private final FieldRepo repo;

	@Autowired
	public FieldService(FieldRepo repo) {
		super();
		this.repo = repo;
	}
	
	public Field addField(Field field) {
		return repo.save(field);
	}
	
	public List<Field> findAllFields(){
		return repo.findAll();
	}
	
//	public List<Field> findSchedulesByDivision(String categoryName){
//		return repo.findMatchByCategory(categoryName);
//	}
//	
//	public List<MatchesSchedule> findSchedulesByTeam(String teamID){
//		return repo.findMatchByTeam(teamID);
//	}
//	
//	public List<MatchesSchedule> findSchedulesByDate(String date){
//		return repo.findMatchByDate(date);
//	}
//	
//	public List<MatchesSchedule> findSchedulesByVenue(String venue){
//		return repo.findMatchByField(venue);
//	}
	
	public Field updateField(Field field) {
		return repo.save(field);
	}
	
	public void deleteField(String id) {
		 repo.deleteById(id);
	}
	
	
	public Field findFieldById(String id) {
		 return repo.findFieldById(id);
	}
	
//	public List<Referee> findByStatus(String status){
//		return repo.findByStatus(status);
//	}
	

}
