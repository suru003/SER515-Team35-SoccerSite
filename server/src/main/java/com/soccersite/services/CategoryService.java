package com.soccersite.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soccersite.exceptions.EntryNotFoundExcemption;
import com.soccersite.model.Category;
import com.soccersite.repo.CategoryRepo;


@Service
public class CategoryService {
	
	private final CategoryRepo repo;

	@Autowired
	public CategoryService(CategoryRepo repo) {
		super();
		this.repo = repo;
	}
	
	public Category addCategory(Category category) {
		return repo.save(category);
	}
	
	public List<Category> findAllCategory(){
		return repo.findAll();
	}
	
	public Category updateCategory(Category category) {
		return repo.save(category);
	}
	
	public void deleteCategory(int id) {
		 repo.deleteById(id);
	}
	
	public void deleteById(String id) {
		 repo.deleteById(id);
	}
	
	public Category findCategoryById(String id) {
		 return repo.findCategoryById(id).orElseThrow(
				 ()->new EntryNotFoundExcemption(
						 "Category with id: "+id+" not found in the repositiory")); 
	}
	


}
