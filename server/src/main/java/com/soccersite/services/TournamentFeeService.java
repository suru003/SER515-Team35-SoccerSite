package com.soccersite.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.soccersite.model.TournamentFees;
import com.soccersite.repo.TournamentFeeRepo;

@Service
public class TournamentFeeService {
	private final TournamentFeeRepo repo;
	@Autowired
	public TournamentFeeService(TournamentFeeRepo repo) {
		super();
		this.repo=repo;
		
	}
	public List<TournamentFees> findFees(){
		return repo.findAll();
	}

}
