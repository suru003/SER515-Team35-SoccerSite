package com.soccersite.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.soccersite.model.TournamentFees;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface TournamentFeeRepo extends JpaRepository<TournamentFees, String>{
	@Query ("SELECT t FROM TournamentFees t WHERE t.category = :category")
	Optional<TournamentFees> findFees(String category);
	
}
