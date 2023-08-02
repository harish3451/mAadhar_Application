package com.aadharApplication.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.aadharApplication.entity.Citizen;
import com.aadharApplication.service.CitizenService;

@RestController
@RequestMapping("/citizen")
public class CitizenController {
	
	@Autowired
	CitizenService citizenService;
	
	@GetMapping(path="/all", produces = "application/json")
	public ResponseEntity<List<Citizen>> allUsers() {
		return citizenService.getAllUser();
	}
	
	@PostMapping(path = "/addUser", consumes = "application/json", produces = "application/json")
	public ResponseEntity<List<Citizen>> NewCitizen(
			@RequestBody Citizen citizen) {
		
		citizenService.addCitizen(citizen);
		return citizenService.getAllUser();
	}
	
	@GetMapping(path="/{id}", produces = "application/json")
	public ResponseEntity<Citizen> getCitizen( @PathVariable("id") int id){
			return new ResponseEntity<Citizen>(citizenService.getDetails(id),HttpStatusCode.valueOf(200));
	}
	
	@PutMapping(path="/{id}", produces = "application/json")
	public ResponseEntity<Citizen> updateDetails(@PathVariable("id") int id, @RequestBody Citizen citizen) {
		Citizen user = citizenService.getDetails(id);
		user.setAddress(citizen.getAddress());
		user.setDateOfBirth(citizen.getDateOfBirth());
		user.setEmail(citizen.getEmail());
		user.setGender(citizen.getGender());
		user.setName(citizen.getName());
		citizenService.addCitizen(user);
		return new ResponseEntity<Citizen>(citizenService.getDetails(id),HttpStatusCode.valueOf(200));
	}

		
	
}
