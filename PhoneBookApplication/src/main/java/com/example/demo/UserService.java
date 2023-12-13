package com.example.demo;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
//	@Autowired
//	private ContactRepository contactRepository ;
//	
	@Autowired
	private PasswordEncoder passwordEncoder;
//	
	public List<User> getUsers()
	{
		return userRepository.findAll();
	}
//	
	public User createUser(User user)
	{
		user.setPassword(passwordEncoder.encode(user.getPassword()));			
		return userRepository.save(user);
	}
//	
//	public void createContactForUser(String email, Contact contact) {
//        // Fetch the user from the database using the provided email
//        User user = userRepository.findByEmail(email)
//                .orElseThrow(() -> new EntityNotFoundException("User with email " + email + " not found"));
//
//        // Associate the contact with the user
//        contact.setUser(user);
//
//        // Save the contact to the database
//        contactRepository.save(contact);
//    }
	
	public User getUser(String email)
	{		
		Optional<User> user= userRepository.findByEmail(email);
		
		if(user.isPresent())
		{	
			User ret=user.get();
			return ret;
		}
		else
			return null;
	}

}
 