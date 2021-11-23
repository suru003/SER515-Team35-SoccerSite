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

import com.soccersite.model.Category;
import com.soccersite.services.CategoryService;



@RestController
@CrossOrigin()
@RequestMapping("/category")
public class CategoryController {
	
	private final CategoryService categoryService;

	public CategoryController(CategoryService categoryService) {
		super();
		this.categoryService = categoryService;
	}
		
	@GetMapping("/all")
	public ResponseEntity<List<Category>> findAllCategory(){
		List<Category> list = categoryService.findAllCategory();
		return new ResponseEntity<List<Category>>(list, HttpStatus.OK) ;
	}

	@GetMapping("/find/{id}")
	public ResponseEntity<Category> findCategoryById(@PathVariable("id") String id){
		Category category = categoryService.findCategoryById(id);
		return new ResponseEntity<Category>(category, HttpStatus.OK) ;
	}
	
	
	@PostMapping("/insert")
	public ResponseEntity<Category> insertCategory(@RequestBody Category category){
		Category response = categoryService.addCategory(category);
		return new ResponseEntity<Category>(response, HttpStatus.CREATED) ;
	}
	
	@PutMapping("/update")
	public ResponseEntity<Category> updateCategory(@RequestBody Category category){
		Category response = categoryService.addCategory(category);
		return new ResponseEntity<Category>(response, HttpStatus.OK) ;
	}

	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteCategory(@PathVariable("id") String id){
		categoryService.deleteById(id);
		return new ResponseEntity<>("Category deleted:"+id,HttpStatus.OK) ;
	}
	

}
