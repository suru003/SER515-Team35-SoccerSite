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

import com.soccersite.model.Hotel;
import com.soccersite.services.HotelsService;

@RestController
@CrossOrigin()
@RequestMapping("/hotels")
public class HotelsController {
	private final HotelsService hotelService;

	public HotelsController(HotelsService hotelService) {
		super();
		this.hotelService = hotelService;
	}
		
	@GetMapping("/all")
	public ResponseEntity<List<Hotel>> findAllHotels(){
		List<Hotel> list = hotelService.findAllHotels();
		return new ResponseEntity<List<Hotel>>(list, HttpStatus.OK) ;
	}
	
	@GetMapping("/find/{id}")
	public ResponseEntity<Hotel> findCoachById(@PathVariable("id") String id){
		Hotel hotel = hotelService.findHotelById(id);
		return new ResponseEntity<Hotel>(hotel, HttpStatus.OK) ;
	}
	
	
	@PostMapping("/insert")
	public ResponseEntity<Hotel> insertHotel(@RequestBody Hotel hotel){
		Hotel response = hotelService.addHotel(hotel);
		return new ResponseEntity<Hotel>(response, HttpStatus.CREATED) ;
	}
	
	@PutMapping("/update")
	public ResponseEntity<Hotel> updateHotel(@RequestBody Hotel hotel){
		Hotel response = hotelService.updateHotel(hotel);
		return new ResponseEntity<Hotel>(response, HttpStatus.OK) ;
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteHotel(@PathVariable("id") String id){
		hotelService.deleteHotel(id);
		return new ResponseEntity<>("Deleted Coach:"+id,HttpStatus.OK) ;
	}
}
