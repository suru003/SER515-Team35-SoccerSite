package com.soccersite.controllers;

import java.util.List;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.soccersite.model.Users;
import com.soccersite.services.UsersService;

@RestController
@CrossOrigin()
@RequestMapping("/users")
public class UsersController {
	private final UsersService usersService;

	public UsersController(UsersService usersService) {
		super();
		this.usersService = usersService;
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Users>> findAllUsers(){
		List<Users> list = usersService.findAllUsers();
		return new ResponseEntity<List<Users>>(list, HttpStatus.OK) ;
	}
	
	@GetMapping("/find/{id}")
	public ResponseEntity<Users> findUserById(@PathVariable("id") int id){
		Users user = usersService.findUserById(id);
		return new ResponseEntity<Users>(user, HttpStatus.OK) ;
	}
	
	
	@PostMapping("/insert")
	public ResponseEntity<Users> insertReferee(@RequestBody Users users){
		Users response = usersService.addUser(users);
		return new ResponseEntity<Users>(response, HttpStatus.CREATED) ;
	}
	
	@PutMapping("/update")
	public ResponseEntity<Users> updateUser(@RequestBody Users user){
		Users response = usersService.addUser(user);
		return new ResponseEntity<Users>(response, HttpStatus.OK) ;
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable("id") int id){
		usersService.deleteUser(id);
		return new ResponseEntity<>("User deleted:"+id,HttpStatus.OK) ;
	}
	

}
