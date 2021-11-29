package com.soccersite.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.soccersite.model.Hotel;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface HotelsRepo extends JpaRepository<Hotel, String> {

	Optional<Hotel> findHotelById(String id);

	 @Query("SELECT t FROM Hotel t WHERE t.hotelName = :hotelName AND t.link = :link")
	 List<Hotel> findHotel(@Param("hotelName") String hotelName, @Param("link") String link);
	 
	 
	 @Transactional
		@Modifying
		 @Query("UPDATE Hotel t set t.available= :available "
		 		+ " WHERE t.id = :id")
		int updateById(@Param("id") String id, boolean available);

}
