package com.aadharApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aadharApplication.entity.AadharDetails;
import com.aadharApplication.entity.Citizen;
import com.aadharApplication.service.AadharService;
import com.aadharApplication.service.CitizenService;

@RestController
@RequestMapping("/aadhar")
@CrossOrigin("http://localhost:4200")
public class AadharController {
	
	@Autowired
	AadharService aadharservice;
	
	@Autowired
	CitizenService citizenservice;
	
	@GetMapping(path="/all")
	public ResponseEntity<List<AadharDetails>> allAadhar(){
		return aadharservice.getAadhar();
	}
	
	@GetMapping(path="/{id}")
	public ResponseEntity<AadharDetails> getAdhar(@PathVariable("id") int id){
		
		return new ResponseEntity<AadharDetails>(aadharservice.getAdharByCId(id),HttpStatusCode.valueOf(200));
		
	}
	
	@PostMapping(path="/Adhar{id}")
	public ResponseEntity<AadharDetails> EnrollAdhar(@PathVariable("id") int id,@RequestBody AadharDetails ad ) {
		Citizen citizen =  citizenservice.getDetails(id);
		AadharDetails details = new AadharDetails();
		details.setCitizen(citizen);
		details.setStatus(ad.getStatus());
		
		details.setUID(ad.getUID());
		aadharservice.EnrollAdhar(details);
		int id1 = details.getUID();
		return aadharservice.getAdharByUId(id1);
	}
	
	@PutMapping(path="/update/{id}", consumes = "Application/json")
	public  ResponseEntity<AadharDetails> updateAadharStatus(@PathVariable("id") int id, @RequestBody AadharDetails ad) {
		AadharDetails details = aadharservice.getAdharById(id);
		details.setStatus(ad.getStatus());
		aadharservice.EnrollAdhar(details);
		
		return  new ResponseEntity<AadharDetails>(aadharservice.getAdharById(id),HttpStatusCode.valueOf(200));
	}
}
