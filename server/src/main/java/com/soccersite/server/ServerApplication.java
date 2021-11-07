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
import com.soccersite.repo.RolesRepo;

@Configuration
@ComponentScan({"com.soccersite"})
@EntityScan({"com.soccersite.model"})
@EnableJpaRepositories({"com.soccersite.repo"})
@SpringBootApplication
public class ServerApplication {
	
	@Autowired
	RolesRepo roleRepo;
	
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
			
			
		};
		
	}	

}
