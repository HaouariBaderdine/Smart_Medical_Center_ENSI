package com.smart.backend.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smart.backend.models.Advice;
import com.smart.backend.repository.AdviceRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class AdviceController {

	@Autowired
	AdviceRepository adviceRepository;

	@GetMapping("/advices/demandeur/{demandeur}")
	public ResponseEntity<List<Advice>> getAdvicesByDemandeur(@PathVariable("demandeur") String demandeur) {
		try {
			List<Advice> advices = new ArrayList<Advice>();
			
			if(demandeur != null)
				adviceRepository.findByDemandeur(demandeur).forEach(advices::add);

			if (advices.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(advices, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/advices/medecin/{medecin}")
	public ResponseEntity<List<Advice>> getAdvicesByMedecin(@PathVariable("medecin") String medecin) {
		try {
			List<Advice> advices = new ArrayList<Advice>();

			if(medecin != null)
				adviceRepository.findByMedecin(medecin).forEach(advices::add);

			if (advices.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(advices, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/advices/{id}")
	public ResponseEntity<Advice> getAdviceById(@PathVariable("id") String id) {
		Optional<Advice> adviceData = adviceRepository.findById(id);

		  if (adviceData.isPresent()) {
		    return new ResponseEntity<>(adviceData.get(), HttpStatus.OK);
		  } else {
		    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		  }
	}

	@PostMapping("/advices")
  public ResponseEntity<Advice> createAdvice(@RequestBody Advice advice) {
	  try {
		    Advice _advice = adviceRepository.save(new Advice(advice.getEtat(), advice.getType(), advice.getDescription(), advice.getCreatedAt(), advice.getDemandeur(), advice.getMedecin()));
		    return new ResponseEntity<>(_advice, HttpStatus.CREATED);
		  } catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		  }
  }

	@PutMapping("/advices/{id}")
	public ResponseEntity<Advice> updateAdvice(@PathVariable("id") String id, @RequestBody Advice advice) {
		Optional<Advice> adviceData = this.adviceRepository.findById(id);

		  if (adviceData.isPresent()) {
		    Advice _advice = adviceData.get();
		    _advice.setEtat(advice.getEtat());
		    _advice.setType(advice.getType());
		    _advice.setDescription(advice.getDescription());
		    //_advice.setDemandeur(advice.getDemandeur());
		    //_advice.setMedecin(advice.getMedecin());
		    return new ResponseEntity<>(adviceRepository.save(_advice), HttpStatus.OK);
		  } else {
		    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		  }
	}
	
	@PutMapping("/advices/etat/{id}")
	public ResponseEntity<Advice> updateEtatAdvice(@PathVariable("id") String id) {
		Optional<Advice> adviceData = this.adviceRepository.findById(id);

		  if (adviceData.isPresent()) {
		    Advice _advice = adviceData.get();
		    _advice.setEtat("traité");
		    return new ResponseEntity<>(adviceRepository.save(_advice), HttpStatus.OK);
		  } else {
		    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		  }
	}

	@DeleteMapping("/advices/{id}")
	public ResponseEntity<HttpStatus> deleteAdvice(@PathVariable("id") String id) {
		try {
		    this.adviceRepository.deleteById(id);
		    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		  } catch (Exception e) {
		    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		  }
	}

}