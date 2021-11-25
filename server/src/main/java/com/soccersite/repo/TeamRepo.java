package com.soccersite.repo;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;


import com.soccersite.model.Category;
import com.soccersite.model.Team;
import com.soccersite.model.Tournament;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface TeamRepo extends JpaRepository<Team, String> {
	
	@Query("SELECT t FROM Team t WHERE t.teamID = :id")
	Optional<Team> findTeamById(@Param("id") String id);
	
	 @Transactional
		@Modifying
		 @Query("DELETE FROM Team t WHERE t.teamID = :id")
		void deleteById(@Param("id") String id);
	 
	 @Query("SELECT t FROM Team t WHERE t.isVerified = true AND t.category.categoryName = :categoryName")
	 List<Team> findAcceptedTeams(@Param("categoryName") String categoryName);
	 
	 @Query("SELECT t FROM Team t WHERE t.category.categoryName = :categoryName")
	 List<Team> findByCategoryName(@Param("categoryName") String categoryName);
	 
	 
	 @Transactional
		@Modifying
		 @Query("UPDATE Team t set t.teamName= :teamName, "
		 		+ "t.category= :category, "
		 		+ "t.tournament= :tournament,"
		 		+ "t.isVerified = :status WHERE t.teamID = :id")
		Team updateById(@Param("id") String id, String teamName, Category category, Tournament tournament, boolean status);


	 List<Team> findByisVerifiedTrue();
	 List<Team> findByisVerifiedFalse();

}
