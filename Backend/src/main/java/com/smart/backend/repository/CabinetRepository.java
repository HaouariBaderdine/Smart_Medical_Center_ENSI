package com.smart.backend.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.smart.backend.models.Cabinet;

public interface CabinetRepository extends MongoRepository<Cabinet, String> {

	Optional<Cabinet> findByMedecin(String medecin);

}