package com.soccersite.server;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.soccersite.model.Roles;
import com.soccersite.model.Team;
import com.soccersite.repo.RolesRepo;
import com.soccersite.repo.TeamRepo;

@Configuration
@ComponentScan({"com.soccersite"})
@EntityScan({"com.soccersite.model"})
@EnableJpaRepositories({"com.soccersite.repo"})
@SpringBootApplication
public class ServerApplication {
	
	@Autowired
	RolesRepo roleRepo;
	@Autowired
	TeamRepo teamRepo;
	
	
	
	ServerApplication(){}
	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(ServerApplication.class);
        app.setDefaultProperties(Collections.singletonMap("server.port", "8090"));
        ConfigurableApplicationContext ctxt = app.run(args);
//        CoachService c = ctxt.getBean(CoachService.class);
//		String[] beans = ctxt.getBeanDefinitionNames();
//        for(String bean : beans)
//          System.out.println(bean);
        
	}
	
	@Bean
	CommandLineRunner runner() {
		
		return args -> {
			Roles role = new Roles(1, "Admin");
			Roles role1 = new Roles(2, "Coach");
			Roles role2 = new Roles(3, "Referee");
			Roles role3 = new Roles(4, "Player");
			Roles role4 = new Roles(5, "Tournament manager");
			
			roleRepo.save(role);
			roleRepo.save(role1);
			roleRepo.save(role2);
			roleRepo.save(role3);
			roleRepo.save(role4);
			teamRepo.deleteAll();
			Team team1 = new Team("TEAM_50500","The Rocks Boy Team", "U-18", "COACH-15", "TURN-11", false);
			Team team2 = new Team("TEAM_50100","Fireflight Girls Team", "U-10", "COACH_12", "TURN-11", true);
			teamRepo.save(team1);		
			teamRepo.save(team2);
		};
		
	}
	

}
