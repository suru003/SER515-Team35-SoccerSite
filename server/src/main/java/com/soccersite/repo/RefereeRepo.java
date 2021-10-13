package com.soccersite.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.soccersite.model.Referee;

@Repository
public interface RefereeRepo extends JpaRepository<Referee, Integer>{

	 @Query("SELECT r FROM Referee r WHERE r.id = :id")
	Optional<Referee> findRefereeById(@Param("id") String id);
	
	List<Referee> findByStatus(String status);
	
	@Transactional
	@Modifying
	 @Query("DELETE FROM Referee r WHERE r.id = :id")
	void deleteById(@Param("id") String id);
	
}
