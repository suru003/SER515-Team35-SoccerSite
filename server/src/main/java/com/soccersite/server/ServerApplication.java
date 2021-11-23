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
import com.soccersite.model.MatchesSchedule;
import com.soccersite.model.Roles;
import com.soccersite.model.Team;
import com.soccersite.repo.AdminRepo;
import com.soccersite.repo.CategoryRepo;
import com.soccersite.repo.CoachRepo;
import com.soccersite.repo.MatchesScheduleRepo;
import com.soccersite.repo.RolesRepo;
import com.soccersite.repo.TeamRepo;
import com.soccersite.repo.TournamentRepo;

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
	
	@Autowired
	CoachRepo coachRepo;
	
	@Autowired
	TournamentRepo tournamentRepo;
	
	@Autowired
	MatchesScheduleRepo matchesRepo;
	
	
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
			
			
			
//			coachRepo.deleteAll();
//			Coach coach = new Coach("Manny", "Lambert", "mannylambert@gmail.com");
//			Coach coach1 = new Coach("Manny", "Lambert", "lambert@gmail.com");
//			Coach coach2 = new Coach("Manny", "Lambert", "mannmbert@gmail.com");
//			coachRepo.save(coach);
//			coachRepo.save(coach1);
//			coachRepo.save(coach2);
			
			
			
//			create divisions / categories
//			catRepo.deleteAll();
//			Category cat1 = new Category("CAT_00450", "B-U10 Premier", 9, 10, "Premier", "$650");
//			Category cat2 = new Category("CAT_00500", "B-U10 Classic", 9, 10, "Classic", "$550");
//			Category cat3 = new Category("CAT_00550", "G-U10 Premier", 9, 10, "Premier", "$500");
//			Category cat4 = new Category("CAT_00200", "G-U10 Classic", 9, 10, "Classic", "$600");
//			
//			Category cat5 = new Category("CAT_00250", "B-U11 Premier", 10, 11, "Premier", "$750");
//			Category cat6 = new Category("CAT_00300", "B-U11 Classic", 10, 11, "Classic", "$700");
//			Category cat7 = new Category("CAT_00350", "G-U11 Premier", 10, 11, "Premier", "$700");
//			Category cat8 = new Category("CAT_00400", "G-U11 Classic", 10, 11, "Classic", "$650");
//			
//			Category cat1 = new Category("B-U10 Premier", 9, 10, "Premier", "$650");
//			Category cat2 = new Category("B-U10 Classic", 9, 10, "Classic", "$550");
//			Category cat3 = new Category("G-U10 Premier", 9, 10, "Premier", "$500");
//			Category cat4 = new Category("G-U10 Classic", 9, 10, "Classic", "$600");
//			
//			Category cat5 = new Category("B-U11 Premier", 10, 11, "Premier", "$750");
//			Category cat6 = new Category("B-U11 Classic", 10, 11, "Classic", "$700");
//			Category cat7 = new Category("G-U11 Premier", 10, 11, "Premier", "$700");
//			Category cat8 = new Category("G-U11 Classic", 10, 11, "Classic", "$650");
//			
//
			
//			
//			tournamentRepo.deleteAll();
//			Tournament t = new Tournament("Premier League", cat2, "12-02-2021", "12-02-2021");
//			Tournament t2 = new Tournament("Classic League", cat5, "12-02-2021", "12-02-2021");
//			Tournament t3 = new Tournament("Superhearo League", cat7, "12-02-2021", "12-02-2021");
//			tournamentRepo.save(t);
//			tournamentRepo.save(t2);
//			tournamentRepo.save(t3);
			
			
	/*		
			matchesRepo.deleteAll();
			teamRepo.deleteAll();
			catRepo.deleteAll();
			
			Category cat1 = new Category("B-U10 Premier","B-U10", 9, 10, "Premier", "$650");
			Category cat2 = new Category("B-U10 Classic","B-U10", 9, 10, "Classic", "$550");
			Category cat3 = new Category("G-U10 Premier","G-U10", 9, 10, "Premier", "$500");
			Category cat4 = new Category("G-U10 Classic","G-U10", 9, 10, "Classic", "$600");
			
			Category cat5 = new Category("B-U11 Premier","B-U11", 10, 11, "Premier", "$750");
			Category cat6 = new Category("B-U11 Classic","B-U11", 10, 11, "Classic", "$700");
			Category cat7 = new Category("G-U11 Premier","G-U11", 10, 11, "Premier", "$700");
			Category cat8 = new Category("G-U11 Classic","G-U11", 10, 11, "Classic", "$650");
			
			catRepo.save(cat1);
			catRepo.save(cat2);
			catRepo.save(cat3);
			catRepo.save(cat4);
			catRepo.save(cat5);
			catRepo.save(cat6);
			catRepo.save(cat7);
			catRepo.save(cat8);
			
			
			
//			add teams
//			teamRepo.deleteAll();
//			
			Team team2 = new Team("Minnesota Giants", cat5, false, "Boys", "11",
					"David Chan","Minnesota Club", "Arizona", "Arizona", "Alabama", "Premier League (Boys U11)", "Premier",
					"Black", "Red", "12-06-2000", "Boys U11 ($500)", "David Chan", "david@gmail.com");
			
			Team team3 = new Team("All Star Boys Soccer Team", cat2,false, "Boys", "10",
					"John Easel","Gunners FC", "Arizona", "Arizona", "Alabama", "Classic League (Boys U10)", "Classic",
					"Black", "Red", "12-06-2000", "Boys U10 ($500)", "John Easel", "");
			
//			Boy U10 - Premier
			Team team8 = new Team("Magnificent Boys Soccer Team", cat1,true, "Boys", "10",
					"Joel Ming","Magnificent FC", "Tempe", "Arizona", "Arizona", "Premier League (Boys U10)", "Premier",
					"White", "Red", "15-03-2010", "Boys U10 ($600)", "Joel Ming", "");
			Team team9 = new Team("The Giants Boys Team", cat1,true, "Boys", "10",
					"Sandy Omaha","Giants FC", "Phoenix", "Arizona", "Arizona", "Premier League (Boys U10)", "Premier",
					"Blue", "Red", "16-02-2010", "Boys U10 ($600)", "Sandy Omaha", "");
			Team team10 = new Team("Impact Boys ", cat1,true, "Boys", "10",
					"George Prune","Impact Boys  FC", "Youze", "Alabama", "Alabama", "Premier League (Boys U10)", "Premier",
					"Black", "Blue", "15-08-2009", "Boys U10 ($600)", "George Prune", "");
			Team team11 = new Team("Warriors Soccer Team", cat1,true, "Boys", "10",
					"Themlma Rookie","The Warriors FC", "Miami", "California", "California", "Premier League (Boys U10)", "Premier",
					"Red", "Black", "03-02-2010", "Boys U10 ($600)", "Themlma Rookie", "");
//			
//			Girls U11 - Premier
			Team team4 = new Team("Super Girls Soccer Team", cat7,true, "Girls", "11",
					"Daisy Little","SuperHeroes", "Georgia", "Georgia", "Georgia", "Premier League (Girls U11)", "Premier",
					"White", "Blue", "1-07-2000", "Girls U11 ($530)", "Daisy Little", "");
			Team team5 = new Team("RockStar Girls Team", cat7,true, "Girls", "11",
					"Isabel Lane","Rockstar Club", "Houston", "Texas", "Houston", "Premier League (Girls U11)", "Premier",
					"Black", "Red", "9-06-2000", "Girls U11 ($530)", "Isabel Lane", "");
			Team team6 = new Team("Pink Girls Team", cat7,true, "Girls", "11",
					"David Hall","Pink Club", "Baltimore", "Maryland", "Maryland", "Premier League (Girls U11)", "Premier",
					"Blue", "White", "13-04-2001", "Girls U11 ($530)", "David Hall", "");
			Team team7 = new Team("OSEC Girls Team", cat7,true, "Girls", "11",
			"Lenny Blanc","OSEC Club", "Tennesse", "Nashville", "Tennesse", "Premier League (Girls U11)", "Premier",
			"Red", "White", "15-05-2002", "Girls U11 ($530)", "Lenny Blanc", "");

			teamRepo.save(team3);		
			teamRepo.save(team2);
			
			teamRepo.save(team8);
			teamRepo.save(team9);
			teamRepo.save(team10);
			teamRepo.save(team11);
			
			teamRepo.save(team4);
			teamRepo.save(team5);
			teamRepo.save(team6);
			teamRepo.save(team7);
//			

//			MatchesSchedule match3 = new MatchesSchedule(cat1, "9:00", "Field-A", team8, "0", team11, "1","Qualifiers","25-12-2021");
//			MatchesSchedule match4 = new MatchesSchedule(cat1, "10:00", "Field-B", team9, "5", team10, "0","Qualifiers", "26-12-2021");
//		
//			MatchesSchedule match = new MatchesSchedule(cat7, "8:00", "Field-A", team4, "3", team5, "1","Qualifiers", "26-12-2021");
//			MatchesSchedule match2 = new MatchesSchedule(cat7, "8:00", "Field-B", team6, "0", team7, "2","Qualifiers", "25-12-2021");
//			matchesRepo.save(match);
//			matchesRepo.save(match2);
//			matchesRepo.save(match3);
//			matchesRepo.save(match4);


		};
		

		
	}	

		
		
	}
	
