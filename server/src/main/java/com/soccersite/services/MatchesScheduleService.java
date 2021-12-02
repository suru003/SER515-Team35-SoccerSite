package com.soccersite.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soccersite.model.Field;
import com.soccersite.model.MatchesSchedule;
import com.soccersite.repo.MatchesScheduleRepo;

@Service
public class MatchesScheduleService {

	private final MatchesScheduleRepo repo;

	@Autowired
	public MatchesScheduleService(MatchesScheduleRepo repo) {
		super();
		this.repo = repo;
	}
	
	public MatchesSchedule addMatch(MatchesSchedule match) {
		return repo.save(match);
	}
	
	public List<MatchesSchedule> findAllSchedules(){
		return repo.findAll();
	}
	
	public List<MatchesSchedule> findSchedulesByDivision(String categoryName){
		return repo.findMatchByCategory(categoryName);
	}
	
	public List<MatchesSchedule> findSchedulesByDivisionId(String id){
		return repo.findMatchByCategoryId(id);
	}
	
	public List<MatchesSchedule> findSchedulesByTeam(String teamID){
		return repo.findMatchByTeam(teamID);
	}
	
	public List<MatchesSchedule> findSchedulesByDate(String date){
		return repo.findMatchByDate(date);
	}
	
	public List<MatchesSchedule> findSchedulesByVenue(String venue){
		return repo.findMatchByField(venue);
	}
	
	public List<MatchesSchedule> findSchedulesByVenue(Field field){
		return repo.findMatchByField(field);
	}
	
	public List<MatchesSchedule> findSchedulesByFieldId(String id){
		return repo.findSchedulesByFieldID(id);
	}
	
	public List<MatchesSchedule> findSchedulesByTime(String time){
		return repo.findMatchByTime(time);
	}
	
	public List<MatchesSchedule> findSchedulesByReferee(String id){
		return repo.findMatchByReferee(id);
	}
	
	public MatchesSchedule updateReferee(MatchesSchedule match) {
		return repo.save(match);
	}
	
	public void deleteMatch(int id) {
		 repo.deleteById(id);
	}
	
	public void deleteById(String id) {
		 repo.deleteById(id);
	}
	
	public MatchesSchedule findMatchById(String id) {
		 return repo.findMatchById(id);
	}
	
//	public List<Referee> findByStatus(String status){
//		return repo.findByStatus(status);
//	}
	

}
