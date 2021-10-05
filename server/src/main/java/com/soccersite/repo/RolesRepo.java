package com.soccersite.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.soccersite.model.Roles;

@Repository
public interface RolesRepo extends JpaRepository<Roles, Integer>{
	
	Optional<Roles> findRoleById(int id);


}
