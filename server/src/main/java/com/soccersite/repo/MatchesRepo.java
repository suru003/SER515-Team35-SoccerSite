package com.soccersite.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.soccersite.model.Matches;


@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface MatchesRepo extends JpaRepository<Matches, String> {
	/*@Query("SELECT t FROM Matches t WHERE t.date = :date")
	Optional<Matches> findMatchesbyDate(@Param("date") String date);*/
	Optional<Matches> findMatchesByDate(String date);
	

}
