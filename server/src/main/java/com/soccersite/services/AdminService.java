package com.soccersite.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soccersite.exceptions.EntryNotFoundExcemption;
import com.soccersite.model.AdminUser;
import com.soccersite.repo.AdminRepo;

@Service
public class AdminService {
	
	private final AdminRepo repo;

	@Autowired
	public AdminService(AdminRepo repo) {
		super();
		this.repo = repo;
	}
	
	public AdminUser addAdmin(AdminUser admin) {
		return repo.save(admin);
	}
	
	public List<AdminUser> findAllAdmins(){
		return repo.findAll();
	}
	
	public AdminUser updateAdmin(AdminUser admin) {
		return repo.save(admin);
	}
	
	public void deleteAdmin(int id) {
		 repo.deleteById(id);
	}
	
	public AdminUser findAdminById(int adminID) {
		 return repo.findAdminById(adminID).orElseThrow(()->new EntryNotFoundExcemption("Admin with id: "+adminID+" not found in the repositiory")); 
	}
	public AdminUser findAdminByUserID(String userID) {
		 return repo.findAdminUserByUserID(userID); 
	}

}
