package com.example.demo;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;

@Service
public class FeedbackService {

	@Autowired
	private FeedbackRepository feedbackRepository;
	
	
	
	public void postFeedback(String email, String number,String feedback) {
		Feedback f=new Feedback(email,number,feedback);
        feedbackRepository.save(f);
    }
	

}
 