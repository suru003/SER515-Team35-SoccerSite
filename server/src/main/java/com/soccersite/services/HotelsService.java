package com.soccersite.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soccersite.exceptions.EntryNotFoundExcemption;
import com.soccersite.model.Hotel;
import com.soccersite.repo.HotelsRepo;

@Service
public class HotelsService{
	private final HotelsRepo repo;

	@Autowired
	public HotelsService(HotelsRepo repo) {
		super();
		this.repo = repo;
	}
	
	public Hotel addHotel(Hotel hotel) {
		return repo.save(hotel);
	}
	
	public List<Hotel> findAllHotels(){
		return repo.findAll();
	}
	
	public Hotel updateHotel(Hotel hotel) {
		List<Hotel> x = repo.findHotel(hotel.getHotelName(), hotel.getLink());
		if(x.size()>0) {
			System.out.println("response "+repo.updateById(x.get(0).getId(), hotel.isAvailable()));
			return hotel;
		}
		else
			return repo.save(hotel);
	}
	
	public void deleteHotel(String id) {
		 repo.deleteById(id);
	}
	
	public Hotel findHotelById(String id) {
		 return repo.findHotelById(id).orElseThrow(()->new EntryNotFoundExcemption("Hotel with id: "+id+" not found in the repositiory")); 
	}
}
