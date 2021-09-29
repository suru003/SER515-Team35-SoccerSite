package com.soccersite.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.soccersite.model.Referee;

@Repository
public interface RefereeRepo extends JpaRepository<Referee, Integer>{
	Optional<Referee> findRefereeById(int id);
}
