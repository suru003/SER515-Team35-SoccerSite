package com.soccersite.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.soccersite.model.Coach;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface CoachRepo extends JpaRepository<Coach, String> {

	Optional<Coach> findCoachById(String id);

}
