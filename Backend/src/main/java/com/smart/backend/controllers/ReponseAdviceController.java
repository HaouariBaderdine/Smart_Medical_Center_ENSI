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

import com.smart.backend.models.Reponse_Advice;
import com.smart.backend.repository.ReponseAdviceRepository;

@CrossOrigin(origins = "http://localhost:8081", maxAge = 3600, allowCredentials="true")
@RestController
@RequestMapping("/api")
public class ReponseAdviceController {

	@Autowired
	ReponseAdviceRepository repository;

	@GetMapping("/reponse/advice/{advice}")
	public ResponseEntity<List<Reponse_Advice>> getReponse_AdvicesByDemandeur(@PathVariable("advice") String advice) {
		try {
			List<Reponse_Advice> Reponse_Advices = new ArrayList<Reponse_Advice>();

			if (advice != null)
				repository.findByAdvice(advice).forEach(Reponse_Advices::add);

			if (Reponse_Advices.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(Reponse_Advices, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/reponse/{id}")
	public ResponseEntity<Reponse_Advice> getReponse_AdviceById(@PathVariable("id") String id) {
		Optional<Reponse_Advice> Reponse_AdviceData = repository.findById(id);

		if (Reponse_AdviceData.isPresent()) {
			return new ResponseEntity<>(Reponse_AdviceData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/reponse/advice")
	public ResponseEntity<Reponse_Advice> createReponse_Advice(@RequestBody Reponse_Advice Reponse_Advice) {
		try {
			Reponse_Advice _Reponse_Advice = repository.save(new Reponse_Advice(Reponse_Advice.getDescription(),
					Reponse_Advice.getCreatedAt(), Reponse_Advice.getAdvice()));
			return new ResponseEntity<>(_Reponse_Advice, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/reponse/advice/like/{id}")
	public ResponseEntity<Reponse_Advice> like_Reponse_Advice(@PathVariable("id") String id) {
		Optional<Reponse_Advice> Reponse_AdviceData = this.repository.findById(id);

		if (Reponse_AdviceData.isPresent()) {
			Reponse_Advice _Reponse_Advice = Reponse_AdviceData.get();
			_Reponse_Advice.setIsLike(true);
			return new ResponseEntity<>(repository.save(_Reponse_Advice), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/reponse/advice/notLike/{id}")
	public ResponseEntity<Reponse_Advice> not_like_Reponse_Advice(@PathVariable("id") String id) {
		Optional<Reponse_Advice> Reponse_AdviceData = this.repository.findById(id);

		if (Reponse_AdviceData.isPresent()) {
			Reponse_Advice _Reponse_Advice = Reponse_AdviceData.get();
			_Reponse_Advice.setIsLike(false);
			return new ResponseEntity<>(repository.save(_Reponse_Advice), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/reponse/advice/{id}")
	public ResponseEntity<HttpStatus> deleteReponse_Advice(@PathVariable("id") String id) {
		try {
			this.repository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
