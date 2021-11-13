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
import com.soccersite.model.Category;
import com.soccersite.model.Roles;
import com.soccersite.model.Team;
import com.soccersite.repo.AdminRepo;
import com.soccersite.repo.CategoryRepo;
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
	
	@Autowired
	CategoryRepo catRepo;
	
	
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
			AdminUser refDirector = new AdminUser(2, "REF_00100", "Umberto", "Gonzales", "umberto@gmail.com", 7, "Referee Director");
			AdminUser teamDirector = new AdminUser(3, "TEAMDIR_00100", "Chrissy", "Lane", "chrissylane@gmail.com", 6, "Team Director");

			adminRepo.save(admin);
			adminRepo.save(refDirector);
			adminRepo.save(teamDirector);

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
			
			
//			add teams
			teamRepo.deleteAll();
			Team team2 = new Team("TEAM_00500","Minnesota Giants", "", "", "", false, "Boys", "11",
					"David Chan","Minnesota Club", "Arizona", "Arizona", "Alabama", "Premier League (Boys U11)", "Premier",
					"Black", "Red", "12-06-2000", "Boys U11 ($500)", "David Chan", "david@gmail.com");
			
			Team team3 = new Team("TEAM_50500","All Star Boys Soccer Team", "", "", "", false, "Boys", "10",
					"John Easel","Gunners FC", "Arizona", "Arizona", "Alabama", "Classic League (Boys U10)", "Classic",
					"Black", "Red", "12-06-2000", "Boys U10 ($500)", "John Easel", "");
			Team team4 = new Team("TEAM_50100","Super Girls Soccer Team", "", "", "", true, "Girls", "11",
					"Daisy Little","SuperHeroes", "Georgia", "Georgia", "Georgia", "Premier League (Girls U11)", "Premier",
					"White", "Blue", "1-07-2000", "Girls U11 ($530)", "Daisy Little", "");

			teamRepo.save(team3);		
			teamRepo.save(team2);
			teamRepo.save(team4);
			
//			create divisions / categories
			catRepo.deleteAll();
			Category cat1 = new Category("CAT_00450", "B-U10 Premier", 9, 10, "Premier", "$650");
			Category cat2 = new Category("CAT_00500", "B-U10 Classic", 9, 10, "Classic", "$550");
			Category cat3 = new Category("CAT_00550", "G-U10 Premier", 9, 10, "Premier", "$500");
			Category cat4 = new Category("CAT_00200", "G-U10 Classic", 9, 10, "Classic", "$600");
			
			Category cat5 = new Category("CAT_00250", "B-U11 Premier", 10, 11, "Premier", "$750");
			Category cat6 = new Category("CAT_00300", "B-U11 Classic", 10, 11, "Classic", "$700");
			Category cat7 = new Category("CAT_00350", "G-U11 Premier", 10, 11, "Premier", "$700");
			Category cat8 = new Category("CAT_00400", "G-U11 Classic", 10, 11, "Classic", "$650");
			
			catRepo.save(cat1);
			catRepo.save(cat2);
			catRepo.save(cat3);
			catRepo.save(cat4);
			catRepo.save(cat5);
			catRepo.save(cat6);
			catRepo.save(cat7);
			catRepo.save(cat8);
		};
		

	}	

		
		
	}
	


}
