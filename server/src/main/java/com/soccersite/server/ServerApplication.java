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

import com.soccersite.model.AdminUser;
import com.soccersite.model.Roles;
import com.soccersite.model.Team;
import com.soccersite.repo.AdminRepo;
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
	@Autowired
	AdminRepo adminRepo;
	
	
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
			
//			Create admins
			adminRepo.deleteAll();
			AdminUser admin = new AdminUser(1, "TMN_00100", "Manny", "Picao", "mannypicao@gmail.com", 5, "Tournament Director");
			AdminUser admin2 = new AdminUser(2, "REF_00100", "Umberto", "Gonzales", "umberto@gmail.com", 6, "Referee Director");
			adminRepo.save(admin);
			adminRepo.save(admin2);

//			create roles
			Roles role = new Roles(1, "Admin");
			Roles role1 = new Roles(2, "Coach");
			Roles role2 = new Roles(3, "Referee");
			Roles role3 = new Roles(4, "Player");
			Roles role4 = new Roles(5, "Tournament Director");
			Roles role5 = new Roles(6, "Team Director");
			Roles role6 = new Roles(7, "Referee Director");
			Roles role7 = new Roles(8, "Field Director");
			Roles role8 = new Roles(9, "Volunteer Director");
			
			roleRepo.save(role);
			roleRepo.save(role1);
			roleRepo.save(role2);
			roleRepo.save(role3);
			roleRepo.save(role4);
			roleRepo.save(role5);
			roleRepo.save(role6);
			roleRepo.save(role7);
			roleRepo.save(role8);
			
			
			
			teamRepo.deleteAll();
//			Team team1 = new Team("TEAM_50500","All Star Boys Soccer Team", "", "", "", false, "Boys", "10",
//					"John Easel","Gunners FC", "Arizona", "Alabama", "Premier League (Boys U10)", "Classic",
//					"Black", "Red", "12-06-2000", "Boys U08 ($500)");
			Team team3 = new Team("TEAM_50500","All Star Boys Soccer Team", "", "", "", false, "Boys", "10",
					"John Easel","Gunners FC", "Arizona", "Arizona", "Alabama", "Classic League (Boys U10)", "Classic",
					"Black", "Red", "12-06-2000", "Boys U08 ($500)");
			Team team4 = new Team("TEAM_50100","Super Girls Soccer Team", "", "", "", true, "Girls", "11",
					"Daisy Little","SuperHeroes", "Georgia", "Georgia", "Georgia", "Premier League (Girls U11)", "Premier",
					"White", "Blue", "1-07-2000", "Girls U11 ($530)");
			Team team2 = new Team("TEAM_50100","Fireflight Girls Team", "U-10", "COACH_12", "TURN-11", true);
			teamRepo.save(team3);		
//			teamRepo.save(team2);
			teamRepo.save(team4);
		};
		

	}	

		
	}
	


}
