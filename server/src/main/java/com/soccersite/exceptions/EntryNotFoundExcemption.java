package com.soccersite.exceptions;

@SuppressWarnings("serial")
public class EntryNotFoundExcemption extends RuntimeException{
	public EntryNotFoundExcemption(String message) {
		super(message);
	}
}
