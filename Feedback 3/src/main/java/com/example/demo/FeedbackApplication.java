package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class FeedbackApplication {

	public static void main(String[] args) {
		SpringApplication.run(FeedbackApplication.class, args);
	}
	
	@Bean 
	public RestTemplate RestTemplate(){
		return new RestTemplate();
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
    public class CorsConfiguration {
    }
}
