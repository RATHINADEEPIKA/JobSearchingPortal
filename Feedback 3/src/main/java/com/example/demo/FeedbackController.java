package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;


import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins="http://localhost:3000")
public class FeedbackController {
    
    @Autowired
    private FeedbackService feedbackService;
    
    @Autowired
    private FeedbackRepository feedbackRepository;
    
    @GetMapping("/get")
    public String getter()
    {
    	return "working";
    }

    	
    @PostMapping("/post")
    public String postFeedback(@RequestBody Feedback feeback) 
    {
    	feedbackRepository.save(feeback);
    	return "yes";
    }
    
}
