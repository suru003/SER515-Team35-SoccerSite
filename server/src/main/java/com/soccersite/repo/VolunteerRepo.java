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
public interface VolunteerRepo extends JpaRepository<Volunteer, Integer>{

	 @Query("SELECT r FROM Volunteer r WHERE r.id = :id")
	Optional<Volunteer> findVolunteerById(@Param("id") String id);
	
	List<Volunteer> findByStatus(String status);
	
	@Transactional
	@Modifying
	 @Query("DELETE FROM Volunteer r WHERE r.id = :id")
	void deleteById(@Param("id") String id);
	
}
