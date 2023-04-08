package com.smart.backend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.smart.backend.models.Reponse_Advice;

public interface ReponseAdviceRepository extends MongoRepository<Reponse_Advice, String> {

	List<Reponse_Advice> findByAdvice(String advice);

}