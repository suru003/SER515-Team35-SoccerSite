package com.soccersite.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.soccersite.model.Tournament;
import com.soccersite.model.TournamentManager;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface TournamentManagerRepo extends JpaRepository<Tournament, Integer> {
	
	 @Query("SELECT t FROM Tournament t WHERE t.id = :id")
	Optional<Tournament> findTournamentById(@Param("id") String id);
	 
	 
	 @Transactional
		@Modifying
		 @Query("DELETE FROM Tournament t WHERE t.id = :id")
		void deleteById(@Param("id") String id);
}
