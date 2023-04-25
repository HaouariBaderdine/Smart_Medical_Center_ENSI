package com.smart.backend.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.smart.backend.models.Reponse_Advice;

public interface ReponseAdviceRepository extends MongoRepository<Reponse_Advice, String> {

	Optional<Reponse_Advice> findByAdvice(String advice);

}