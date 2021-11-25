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

import com.soccersite.model.Tournament;
import com.soccersite.model.TournamentManager;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface TournamentRepo extends JpaRepository<Tournament, Integer> {
	
	 @Query("SELECT t FROM Tournament t WHERE t.id = :id")
	Optional<Tournament> findTournamentById(@Param("id") String id);
	 
	
//	 @Query(value = "SELECT ts.id, ts.manager_id, ts.category, ts.start_date, ts.end_date FROM Tournament ts WHERE ts.manager_id = 'TMN_00100'", nativeQuery = true)
	 List<Tournament> findTournamentByTournamentManager(@Param("manager_id") TournamentManager manager_id);

	 
	 @Query("SELECT tm FROM TournamentManager tm WHERE tm.id = :id")
	Optional<TournamentManager> findTournamentManagerById(@Param("id") String id);
	 
	 
	 @Transactional
		@Modifying
		 @Query("DELETE FROM Tournament t WHERE t.id = :id")
		void deleteById(@Param("id") String id);
}
