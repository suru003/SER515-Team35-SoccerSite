package com.soccersite.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soccersite.exceptions.EntryNotFoundExcemption;
import com.soccersite.model.MatchesSchedule;
import com.soccersite.model.Referee;
import com.soccersite.repo.MatchesScheduleRepo;
import com.soccersite.repo.RefereeRepo;

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
	
	public List<MatchesSchedule> findSchedulesByTeam(String teamID){
		return repo.findMatchByTeam(teamID);
	}
	
	public List<MatchesSchedule> findSchedulesByDate(String date){
		return repo.findMatchByDate(date);
	}
	
	public List<MatchesSchedule> findSchedulesByVenue(String venue){
		return repo.findMatchByField(venue);
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
