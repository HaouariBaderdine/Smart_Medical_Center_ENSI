package com.smart.backend.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smart.backend.models.Cabinet;
import com.smart.backend.repository.CabinetRepository;

@CrossOrigin(origins = "http://localhost:8081", maxAge = 3600, allowCredentials="true")
@RestController
@RequestMapping("/api")
public class CabinetController {
	
	@Autowired
	CabinetRepository cabinetRepository;
	
	@PostMapping("/cabinet")
	public ResponseEntity<Cabinet> createCabinet(@RequestBody Cabinet cabinet) {
		try {
			Cabinet _cabinet = cabinetRepository.save(new Cabinet(cabinet.getAddress(),
					cabinet.getOpen(), cabinet.getClose(), cabinet.getDescription(), cabinet.getMedecin()));
			return new ResponseEntity<>(_cabinet, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/cabinet/{id}")
	public ResponseEntity<Cabinet> getAdviceById(@PathVariable("id") String id) {
		Optional<Cabinet> cabinetData = cabinetRepository.findById(id);

		  if (cabinetData.isPresent()) {
		    return new ResponseEntity<>(cabinetData.get(), HttpStatus.OK);
		  } else {
		    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		  }
	}
	
	@GetMapping("/cabinet/medecin/{idMedecin}")
	public ResponseEntity<Cabinet> getAdviceByMedecin(@PathVariable("idMedecin") String idMedecin) {
		Optional<Cabinet> cabinetData = cabinetRepository.findByMedecin(idMedecin);

		  if (cabinetData.isPresent()) {
		    return new ResponseEntity<>(cabinetData.get(), HttpStatus.OK);
		  } else {
		    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		  }
	}
	
	@PutMapping("/cabinet/{id}")
	public ResponseEntity<Cabinet> updateAdvice(@PathVariable("id") String id, @RequestBody Cabinet cabinet) {
		Optional<Cabinet> cabinetData = this.cabinetRepository.findById(id);

		if (cabinetData.isPresent()) {
			Cabinet _cabinet = cabinetData.get();
			_cabinet.setAddress(cabinet.getAddress());
			_cabinet.setOpen(cabinet.getOpen());
			_cabinet.setClose(cabinet.getClose());
			_cabinet.setDescription(cabinet.getDescription());
			// _advice.setDemandeur(advice.getDemandeur());
			// _advice.setMedecin(advice.getMedecin());
			return new ResponseEntity<>(cabinetRepository.save(_cabinet), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	

}
