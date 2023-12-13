package com.example.demo;
import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,String>{
	public Optional<User> findByEmail(String email);
	
}
