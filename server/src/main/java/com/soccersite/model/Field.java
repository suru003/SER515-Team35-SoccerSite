package com.soccersite.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.soccersite.custom.generators.CustomGenerator;

@Entity
public class Field {
	
	@Id
	@Column(nullable= false, updatable= false)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_id")
    @GenericGenerator(
        name = "user_id", 
        strategy = "com.soccersite.custom.generators.CustomGenerator", 
        parameters = {
            @Parameter(name = CustomGenerator.INCREMENT_PARAM, value = "50"),
            @Parameter(name = CustomGenerator.SEQUENCE_PREFIX_PARAMETER, value = "FIELD_"),
            @Parameter(name = CustomGenerator.NUMBER_FORMAT_PARAMETER, value = "%05d") })
	String id;
	String fieldName;
	boolean isAvailable;
	boolean isBookedMorning;
	String morningTime;
	boolean isBookedAfternoon;
	String afternoonTime;
	String fieldManager;

	
	
	public Field() {}


	public Field(String fieldName, boolean isAvailable, boolean isBookedMorning, boolean isBookedAfternoon,
			String fieldManager) {
		super();
//		this.id = id;
		this.fieldName = fieldName;
		this.isAvailable = isAvailable;
		this.isBookedMorning = isBookedMorning;
		this.morningTime = "9:00am";
		this.isBookedAfternoon = isBookedAfternoon;
		this.afternoonTime = "1:00pm";
		this.fieldManager = fieldManager;
	}
	
	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getFieldName() {
		return fieldName;
	}


	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}


	public boolean isAvailable() {
		return isAvailable;
	}


	public void setAvailable(boolean isAvailable) {
		this.isAvailable = isAvailable;
	}


	public boolean isBookedMorning() {
		return isBookedMorning;
	}


	public void setBookedMorning(boolean isBookedMorning) {
		this.isBookedMorning = isBookedMorning;
	}


	public boolean isBookedAfternoon() {
		return isBookedAfternoon;
	}


	public void setBookedAfternoon(boolean isBookedAfternoon) {
		this.isBookedAfternoon = isBookedAfternoon;
	}


	public String getFieldManager() {
		return fieldManager;
	}


	public void setFieldManager(String fieldManager) {
		this.fieldManager = fieldManager;
	}


	public String getMorningTime() {
		return morningTime;
	}


	public void setMorningTime(String morningTime) {
		this.morningTime = morningTime;
	}


	public String getAfternoonTime() {
		return afternoonTime;
	}


	public void setAfternoonTime(String afternoonTime) {
		this.afternoonTime = afternoonTime;
	}
	
	
	
	
}
