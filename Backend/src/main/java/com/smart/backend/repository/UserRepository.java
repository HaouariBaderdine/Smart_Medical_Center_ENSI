package com.smart.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.smart.backend.models.User;

public interface UserRepository extends MongoRepository<User, String> {

	Optional<User> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);

	List<User> findAll();

	List<User> findUserByAddress(String address);

}
