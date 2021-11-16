package com.soccersite.repo;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.soccersite.model.MatchesSchedule;

@Repository
public interface MatchesScheduleRepo extends JpaRepository<MatchesSchedule, Integer>{
	
	 @Query("SELECT r FROM MatchesSchedule r WHERE r.id = :id")
		MatchesSchedule findMatchById(@Param("id") String id);
	 
	 @Query("SELECT r FROM MatchesSchedule r WHERE r.category.categoryName = :categoryName")
		List<MatchesSchedule> findMatchByCategory(@Param("categoryName") String categoryName);
	 
	 @Query("SELECT r FROM MatchesSchedule r WHERE r.homeTeam.teamID = :teamID OR r.visitingTeam.teamID = :teamID")
		List<MatchesSchedule> findMatchByTeam(@Param("teamID") String teamID);
	 
	 @Query("SELECT r FROM MatchesSchedule r WHERE r.date = :date")
		List<MatchesSchedule> findMatchByDate(@Param("date") String date);
	 
	 @Query("SELECT r FROM MatchesSchedule r WHERE r.field = :venue")
		List<MatchesSchedule> findMatchByField(@Param("venue") String venue);
		
//		List<MatchesSchedule> findByStatus(String status);
		
		@Transactional
		@Modifying
		 @Query("DELETE FROM MatchesSchedule r WHERE r.id = :id")
		void deleteById(@Param("id") String id);

}
