package com.smart.backend.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smart.backend.models.User;
import com.smart.backend.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:8081", maxAge = 3600, allowCredentials="true")
@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	@GetMapping("/users")
	public ResponseEntity<List<User>> getUsersList() {
		try {
			List<User> users = new ArrayList<User>();
			//List<User> medecins = new ArrayList<User>();

			users = userRepository.findAll();
	
			if (users.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(users, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/users/address/{address}")
	public ResponseEntity<List<User>> getUsersByRole(@PathVariable("address") String address) {
		try {
			List<User> users = new ArrayList<User>();
			
			if(address != null)
				userRepository.findUserByAddress(address).forEach(users::add);

			if (users.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(users, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
