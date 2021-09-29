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

import com.soccersite.model.AdminUser;
import com.soccersite.services.AdminService;

@RestController
@CrossOrigin()
@RequestMapping("/admin")
public class AdminController {
	
	
	private final AdminService adminService;
	
	public AdminController(AdminService adminservice) {
		super();
		this.adminService = adminservice;
	}
	
	

	@GetMapping("/all")
	public ResponseEntity<List<AdminUser>> findAllAdmin(){
		List<AdminUser> list = adminService.findAllAdmins();
		return new ResponseEntity<List<AdminUser>>(list, HttpStatus.OK) ;
	}
	
	@GetMapping("/find/{id}")
	public ResponseEntity<AdminUser> findAdminById(@PathVariable("id") int id){
		AdminUser admin = adminService.findAdminById(id);
		return new ResponseEntity<AdminUser>(admin, HttpStatus.OK) ;
	}
	
	@PostMapping("/insert")
	public ResponseEntity<AdminUser> insertAdmin(@RequestBody AdminUser admin){
		AdminUser response = adminService.addAdmin(admin);
		return new ResponseEntity<AdminUser>(response, HttpStatus.CREATED) ;
	}
	
	@PutMapping("/update")
	public ResponseEntity<AdminUser> updateAdmin(@RequestBody AdminUser admin){
		AdminUser response = adminService.addAdmin(admin);
		return new ResponseEntity<AdminUser>(response, HttpStatus.OK) ;
	}
	
	@GetMapping("/delete/{id}")
	public ResponseEntity<?> deleteAdmin(@PathVariable("id") int id){
		adminService.deleteAdmin(id);
		return new ResponseEntity<>("Admin deleted:"+id,HttpStatus.OK) ;
	}
	
}
