package com.soccersite.repo;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.soccersite.model.Field;
import com.soccersite.model.MatchesSchedule;

@Repository
public interface MatchesScheduleRepo extends JpaRepository<MatchesSchedule, Integer>{
	
	 @Query("SELECT r FROM MatchesSchedule r WHERE r.id = :id")
		MatchesSchedule findMatchById(@Param("id") String id);
	 
	 @Query("SELECT r FROM MatchesSchedule r WHERE r.category.categoryName = :categoryName")
		List<MatchesSchedule> findMatchByCategory(@Param("categoryName") String categoryName);
	 
	 @Query("SELECT r FROM MatchesSchedule r WHERE r.category.id = :id")
		List<MatchesSchedule> findMatchByCategoryId(@Param("id") String id);
	 
	 @Query("SELECT r FROM MatchesSchedule r WHERE r.homeTeam.teamID = :teamID OR r.visitingTeam.teamID = :teamID")
		List<MatchesSchedule> findMatchByTeam(@Param("teamID") String teamID);
	 
	 @Query("SELECT r FROM MatchesSchedule r WHERE r.date = :date")
		List<MatchesSchedule> findMatchByDate(@Param("date") String date);
	 
	 @Query("SELECT r FROM MatchesSchedule r WHERE r.field = :venue")
		List<MatchesSchedule> findMatchByField(@Param("venue") String venue);
	 
	 @Query("SELECT r FROM MatchesSchedule r WHERE r.field = :field")
		List<MatchesSchedule> findMatchByField(@Param("field") Field field);
	 
	 @Query("SELECT r FROM MatchesSchedule r WHERE r.field.id = :id")
		List<MatchesSchedule> findSchedulesByFieldID(@Param("id") String id);
	 
	 @Query("SELECT r FROM MatchesSchedule r WHERE r.time = :time")
		List<MatchesSchedule> findMatchByTime(@Param("time") String time);
	 
	 @Query("SELECT r FROM MatchesSchedule r WHERE r.referee.id = :id")
		List<MatchesSchedule> findMatchByReferee(@Param("id") String id);
		
//		List<MatchesSchedule> findByStatus(String status);
		
		@Transactional
		@Modifying
		 @Query("DELETE FROM MatchesSchedule r WHERE r.id = :id")
		void deleteById(@Param("id") String id);

}
