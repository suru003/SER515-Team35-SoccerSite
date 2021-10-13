package com.soccersite.model;

public class Status {

	private ApplicationStatus status;
	
    public enum ApplicationStatus {
        NEW,
        PENDING,
        VERIFIED;
    }
    
    public ApplicationStatus setNewStatus() {
    	return status = ApplicationStatus.NEW;
    }
    
    public ApplicationStatus setPendingStatus() {
    	return status = ApplicationStatus.PENDING;
    }
    
    public ApplicationStatus setVerifiedStatus() {
    	return status = ApplicationStatus.VERIFIED;
    }
    
    public ApplicationStatus getStatus() {
    	return status;
    }
}
