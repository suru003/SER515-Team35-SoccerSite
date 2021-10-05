package com.soccersite.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soccersite.exceptions.EntryNotFoundExcemption;
import com.soccersite.model.Users;
import com.soccersite.repo.UsersRepo;

@Service
public class UsersService {
	
	private final UsersRepo repo;

	@Autowired
	public UsersService(UsersRepo repo) {
		super();
		this.repo = repo;
	}
	
	public Users addUser(Users user) {
		return repo.save(user);
	}
	
	public List<Users> findAllUsers(){
		return repo.findAll();
	}
	
	public Users updateUser(Users user) {
		return repo.save(user);
	}
	
	public void deleteUser(int id) {
		 repo.deleteById(id);
	}
	
	public Users findUserById(int id) {
		 return repo.findUserById(id).orElseThrow(()->new EntryNotFoundExcemption("User with id: "+id+" not found in the repositiory")); 
	}

}
