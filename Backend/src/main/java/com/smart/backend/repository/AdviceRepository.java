package com.smart.backend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.smart.backend.models.Advice;

public interface AdviceRepository extends MongoRepository<Advice, String> {

	List<Advice> findByEtat(String etat);

	List<Advice> findByDemandeur(String demandeur);

	List<Advice> findByMedecin(String medecin);

}