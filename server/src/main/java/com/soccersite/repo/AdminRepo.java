package com.soccersite.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.soccersite.model.AdminUser;


@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface AdminRepo extends JpaRepository<AdminUser, Integer>{
	
	Optional<AdminUser> findAdminById(int id);

}
