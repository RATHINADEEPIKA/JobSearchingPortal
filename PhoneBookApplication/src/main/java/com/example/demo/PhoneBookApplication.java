package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class PhoneBookApplication {

	public static void main(String[] args) {
		SpringApplication.run(PhoneBookApplication.class, args);
	}
	
	@Bean 
	public RestTemplate RestTemplate(){
		return new RestTemplate();
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
    public class CorsConfiguration {
    }
	
	
	
}
