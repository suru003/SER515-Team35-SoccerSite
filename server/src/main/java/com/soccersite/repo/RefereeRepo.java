package com.soccersite.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.soccersite.model.Referee;

@Repository
public interface RefereeRepo extends JpaRepository<Referee, Integer>{
	Optional<Referee> findRefereeById(String id);
	List<Referee> findByStatus(String status);
}
