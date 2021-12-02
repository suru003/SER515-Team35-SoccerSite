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
import com.soccersite.model.Coach;
import com.soccersite.model.Hotel;
import com.soccersite.model.Field;
import com.soccersite.model.MatchesSchedule;
import com.soccersite.model.Referee;
import com.soccersite.model.Roles;
import com.soccersite.model.Team;
import com.soccersite.repo.AdminRepo;
import com.soccersite.repo.CategoryRepo;
import com.soccersite.repo.CoachRepo;
import com.soccersite.repo.HotelsRepo;
import com.soccersite.repo.FieldRepo;
import com.soccersite.repo.MatchesScheduleRepo;
import com.soccersite.repo.RefereeRepo;
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
	
	@Autowired
	HotelsRepo hotelsRepo;

  @Autowired
	FieldRepo fieldRepo;
  
  @Autowired
	RefereeRepo refRepo;
	
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
			

		
			matchesRepo.deleteAll();
			refRepo.deleteAll();
			teamRepo.deleteAll();
			catRepo.deleteAll();
			hotelsRepo.deleteAll();
			fieldRepo.deleteAll();
			
//			referees
			Referee ref1 = new Referee("REF_24802","Rebecca", "Stanley", "rebecca@gmail.com", +123235263, "Arizona", "Arizona", "United States", 2, "VERIFIED");
			Referee ref2 = new Referee("David", "King", "davidking@gmail.com", +123235263, "Arizona", "Arizona", "United States", 2, "VERIFIED");
			Referee ref3 = new Referee("Henry", "MacMahon", "henrymacmahon@gmail.com", +123235263, "Arizona", "Arizona", "United States", 2, "NEW");
			
			refRepo.save(ref1);
			refRepo.save(ref2);
			refRepo.save(ref3);

			
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

			Field field1 = new Field("Martin Camp Field", false, true, true, "Manoa Rivers");
			Field field2 = new Field("Randy Overt Field", false, false, false, "Vera True");
			Field field3 = new Field("Amanda Sam Field", false, false, false, "Ronald Shampert");
			Field field4 = new Field("Island Lane", false, false, false, "Rue Sue");
			Field field5 = new Field("ASU Field", false, false, false, "Joshua Choi");
			Field field6 = new Field("Kings Field", false, false, false, "John Rhodes");
			Field field7 = new Field("Maine Field", false, false, false, "Ria Maine");
			Field field8 = new Field("Henry Rocket Field", false, false, false, "Jane Kane");
			
			fieldRepo.save(field1);
			fieldRepo.save(field2);
			fieldRepo.save(field3);
			fieldRepo.save(field4);
			fieldRepo.save(field5);
			fieldRepo.save(field6);
			fieldRepo.save(field7);
			fieldRepo.save(field8);

			// hotels
			Hotel hotel1 = new Hotel("Holiday Inn & Suites", "https://www.ihg.com/holidayinn/hotels/", true);
			Hotel hotel2 = new Hotel("Hyatt Place Tempe", "https://www.hyatt.com/en-US/hotel/", true);
			Hotel hotel3 = new Hotel("SpringHill Suites", "https://www.marriott.com/hotels/", true);
			
			hotelsRepo.save(hotel1);
			hotelsRepo.save(hotel2);
			hotelsRepo.save(hotel3);
			
//			teams
			
//			Boy U11 - Premier
			Team team2 = new Team("Minnesota Giants", cat5, true, "Boys", "11",
					"David Chan","Minnesota Club", "Arizona", "Arizona", "Alabama", "Premier League (Boys U11)", "Premier",
					"Black", "Red", "12-06-2000", "Boys U11 ($750)", "David Chan", "david@gmail.com");
			Team team12 = new Team("Barca Academy", cat5, true, "Boys", "11",
					"Gleb Greenspan","Barca Club", "Arizona", "Arizona", "Alabama", "Premier League (Boys U11)", "Premier",
					"White", "Black", "12-06-2000", "Boys U11 ($750)", "Gleb Greenspan", "glebgreenspan@gmail.com");
			Team team13 = new Team("Alliance Cincinati", cat5, true, "Boys", "11",
					"Mike Wood","Alliance Club", "Arizona", "Arizona", "Alabama", "Premier League (Boys U11)", "Premier",
					"Blue", "Red", "12-06-2000", "Boys U11 ($750)", "Mike Wood", "mikewood@gmail.com");
			Team team14 = new Team("WSC Strikers", cat5, true, "Boys", "11",
					"Scott Yu","WSC Club", "Arizona", "Arizona", "Alabama", "Premier League (Boys U11)", "Premier",
					"Blue", "Red", "12-06-2000", "Boys U11 ($750)", "Scott Yu", "scottyu@gmail.com");
			
//			Boy U11 - Classic
			Team team15 = new Team("Lakota FC", cat6, true, "Boys", "11",
					"Jeff Burns","Lakota FC Club", "Arizona", "Arizona", "Alabama", "Classic League (Boys U11)", "Classic",
					"Green", "White", "12-06-2000", "Boys U11 ($700)", "Jeff Burns", "jeffburns@gmail.com");
			Team team16 = new Team("Metro FC", cat6, true, "Boys", "11",
					"Ryan Elliot","Metro FC Club", "Arizona", "Arizona", "Alabama", "Classic League (Boys U11)", "Classic",
					"Green", "White", "12-06-2000", "Boys U11 ($700)", "Ryan Elliot", "ryanelliot@gmail.com");
			Team team17 = new Team("Shauni Select", cat6, true, "Boys", "11",
					"Andrew Greely","Shauni Select FC Club", "Arizona", "Arizona", "Alabama", "Classic League (Boys U11)", "Classic",
					"Green", "White", "12-06-2000", "Boys U11 ($700)", "Andrew Greely", "andrewgreely@gmail.com");
			Team team18 = new Team("New Mexico FC", cat6, true, "Boys", "11",
					"Oswald Mane","New Mexico Club", "Arizona", "Arizona", "Alabama", "Classic League (Boys U11)", "Classic",
					"Green", "White", "12-06-2000", "Boys U11 ($700)", "Oswald Mane", "oswaldmane@gmail.com");
			
//			Boy U10 - Classic
			Team team1 = new Team("SouthWest Boys", cat2,true, "Boys", "10",
					"Nate Walz","SouthWest Boys FC", "Arizona", "Arizona", "Alabama", "Classic League (Boys U10)", "Classic",
					"Black", "Red", "12-06-2000", "Boys U10 ($550)", "Nate Walz", "");
			Team team19 = new Team("Oakwood United", cat2,true, "Boys", "10",
					"John Leonard","Oakwood FC", "Arizona", "Arizona", "Alabama", "Classic League (Boys U10)", "Classic",
					"Yellow", "Blue", "12-06-2000", "Boys U10 ($550)", "John Leonard", "");
			Team team20 = new Team("Perrsburg Boys Team", cat2,true, "Boys", "10",
					"Daniel Brown","Perrsburg FC", "Arizona", "Arizona", "Alabama", "Classic League (Boys U10)", "Classic",
					"White", "Green", "12-06-2000", "Boys U10 ($550)", "Daniel Brown", "");
			Team team21 = new Team("Demolition", cat2,true, "Boys", "10",
					"Sammi Pengilton","Demolition FC", "Arizona", "Arizona", "Alabama", "Classic League (Boys U10)", "Classic",
					"Black", "Red", "12-06-2000", "Boys U10 ($550)", "Sammi Pengilton", "");
			
//			Boy U10 - Premier
			Team team8 = new Team("Magnificent Boys Soccer Team", cat1,true, "Boys", "10",
					"Joel Ming","Magnificent FC", "Tempe", "Arizona", "Arizona", "Premier League (Boys U10)", "Premier",
					"White", "Red", "15-03-2010", "Boys U10 ($650)", "Joel Ming", "");
			Team team9 = new Team("The Giants Boys Team", cat1,true, "Boys", "10",
					"Sandy Omaha","Giants FC", "Phoenix", "Arizona", "Arizona", "Premier League (Boys U10)", "Premier",
					"Blue", "Red", "16-02-2010", "Boys U10 ($650)", "Sandy Omaha", "");
			Team team10 = new Team("Impact Boys ", cat1,true, "Boys", "10",
					"George Prune","Impact Boys  FC", "Youze", "Alabama", "Alabama", "Premier League (Boys U10)", "Premier",
					"Black", "Blue", "15-08-2009", "Boys U10 ($650)", "George Prune", "");
			Team team11 = new Team("Warriors Soccer Team", cat1,true, "Boys", "10",
					"Thelma Rookie","The Warriors FC", "Miami", "California", "California", "Premier League (Boys U10)", "Premier",
					"Red", "Black", "03-02-2010", "Boys U10 ($650)", "Themlma Rookie", "");
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
			
//			Girls U11 - Classic
			Team team22 = new Team("Loveland Storm", cat8,true, "Girls", "11",
					"Adam Parker","Loveland Storm", "Georgia", "Georgia", "Georgia", "Classic League (Girls U11)", "Classic",
					"White", "Blue", "1-07-2000", "Girls U11 ($530)", "Adam Parker", "adamparker@gmail.com");
			Team team23 = new Team("Cassa Elite", cat8,true, "Girls", "11",
					"Mike Thurman","Cassa Elite", "Georgia", "Georgia", "Georgia", "Classic League (Girls U11)", "Classic",
					"Red", "Blue", "1-07-2000", "Girls U11 ($530)", "Mike Thurman", "mikethurman@gmail.com");
			Team team24 = new Team("Green County Girls Team", cat8,true, "Girls", "11",
					"Dave Wall","Green County FC", "Georgia", "Georgia", "Georgia", "Classic League (Girls U11)", "Classic",
					"Red", "Blue", "1-07-2000", "Girls U11 ($530)", "Dave Wall", "davidwall@gmail.com");
			Team team25 = new Team("Eclipse FC", cat8,true, "Girls", "11",
					"Trevor Stewart","Eclipse FC", "Georgia", "Georgia", "Georgia", "Classic League (Girls U11)", "Classic",
					"White", "Blue", "1-07-2000", "Girls U11 ($530)", "Trevor Stewart", "trevorsteward@gmail.com");

		
			
      //			Girls U10 - Premier
			Team team26 = new Team("Lady Warriors", cat3,true, "Girls", "10",
					"Karl George","Warriors FC", "Georgia", "Georgia", "Georgia", "Premier League (Girls U10)", "Premier",
					"White", "Blue", "1-07-2000", "Girls U11 ($500)", "Karl George", "karlgeorge@gmail.com");
			Team team27 = new Team("Springboro Force", cat3,true, "Girls", "10",
					"Josh Duncan","Springboro Force Club", "Georgia", "Georgia", "Georgia", "Premier League (Girls U10)", "Premier",
					"White", "Blue", "1-07-2000", "Girls U11 ($500)", "Josh Duncan", "joshduncan@gmail.com");
			Team team28 = new Team("Pride FC", cat3,true, "Girls", "10",
					"Frank Mata","Pride FC", "Georgia", "Georgia", "Georgia", "Premier League (Girls U10)", "Premier",
					"White", "Blue", "1-07-2000", "Girls U11 ($500)", "Frank Mata", "frankmata@gmail.com");
			Team team29 = new Team("LFC United", cat3,true, "Girls", "10",
					"Roger Claus","LFC United", "Georgia", "Georgia", "Georgia", "Premier League (Girls U10)", "Premier",
					"White", "Blue", "1-07-2000", "Girls U11 ($500)", "Roger Claus", "rogerclaus@gmail.com");
			
      //			Girls U10 - Classic
			Team team30 = new Team("Lexigton FC", cat4,true, "Girls", "10",
					"Joey Lingg","Lexigton FC", "Georgia", "Georgia", "Georgia", "Classic League (Girls U10)", "Classic",
					"Blue", "Blue", "1-07-2000", "Girls U11 ($600)", "Joey Lingg", "joeyling@gmail.com");
			Team team31 = new Team("Arsenal Strykers", cat4,true, "Girls", "10",
					"Brian Bryer","Arsenal Strykers FC", "Georgia", "Georgia", "Georgia", "Classic League (Girls U10)", "Classic",
					"Blue", "Blue", "1-07-2000", "Girls U11 ($600)", "Brian Bryer", "brian@gmail.com");
			Team team32 = new Team("ESSC Arsenal", cat4,true, "Girls", "10",
					"Ryan Gosling","ESSC Arsenal FC", "Georgia", "Georgia", "Georgia", "Classic League (Girls U10)", "Classic",
					"Blue", "Blue", "1-07-2000", "Girls U11 ($600)", "Ryan Gosling", "ryangosling@gmail.com");
			Team team33 = new Team("Nemesis", cat4,true, "Girls", "10",
					"Ray Paulus","Nemesis FC", "Georgia", "Georgia", "Georgia", "Classic League (Girls U10)", "Classic",
					"Green", "Red", "1-07-2000", "Girls U11 ($600)", "Ray Paulus", "raypaulus@gmail.com");

			
	
			teamRepo.save(team1);
			teamRepo.save(team19);
			teamRepo.save(team20);
			teamRepo.save(team21);
			
			teamRepo.save(team2);
			teamRepo.save(team12);
			teamRepo.save(team13);
			teamRepo.save(team14);
			
			teamRepo.save(team8);
			teamRepo.save(team9);
			teamRepo.save(team10);
			teamRepo.save(team11);
			
			teamRepo.save(team4);
			teamRepo.save(team5);
			teamRepo.save(team6);
			teamRepo.save(team7);
			
			teamRepo.save(team15);
			teamRepo.save(team16);
			teamRepo.save(team17);
			teamRepo.save(team18);
			
			teamRepo.save(team22);
			teamRepo.save(team23);
			teamRepo.save(team24);
			teamRepo.save(team25);
			
			teamRepo.save(team26);
			teamRepo.save(team27);
			teamRepo.save(team28);
			teamRepo.save(team29);
			
			teamRepo.save(team30);
			teamRepo.save(team31);
			teamRepo.save(team32);
			teamRepo.save(team33);

			MatchesSchedule match3 = new MatchesSchedule(cat1, "9:00am", field1, team8, "0", team11, "1","Qualifiers","25-12-2021");
			MatchesSchedule match4 = new MatchesSchedule(cat1, "1:00pm", field1, team9, "5", team10, "0","Qualifiers", "26-12-2021");
//		
//			MatchesSchedule match = new MatchesSchedule(cat7, "8:00", "Field-A", team4, "3", team5, "1","Qualifiers", "26-12-2021");
//			MatchesSchedule match2 = new MatchesSchedule(cat7, "8:00", "Field-B", team6, "0", team7, "2","Qualifiers", "25-12-2021");
//			matchesRepo.save(match);
//			matchesRepo.save(match2);
			matchesRepo.save(match3);
			matchesRepo.save(match4);

		};
	
	
		
	}	

		
		
	}
	
