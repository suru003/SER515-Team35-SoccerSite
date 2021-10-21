package com.soccersite.repo;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.soccersite.model.Team;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface TeamRepo extends JpaRepository<Team, Integer> {
	
	@Query("SELECT t FROM Team t WHERE t.teamID = :id")
	Optional<Team> findTeamById(@Param("id") String id);
	
	 @Transactional
		@Modifying
		 @Query("DELETE FROM Team t WHERE t.teamID = :id")
		void deleteById(@Param("id") String id);
}
