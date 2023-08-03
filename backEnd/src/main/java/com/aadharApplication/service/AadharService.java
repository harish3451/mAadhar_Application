package com.aadharApplication.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.aadharApplication.entity.AadharDetails;
import com.aadharApplication.repositoty.AadharRepository;

@Service
public class AadharService {
	
	@Autowired
	AadharRepository aadharRepo;
	
	public ResponseEntity<List<AadharDetails>> getAadhar() {
		List<AadharDetails> aadhars = aadharRepo.findAll();
		return new ResponseEntity<List<AadharDetails>>(aadhars, HttpStatusCode.valueOf(200));
	}
	
	public void EnrollAdhar(AadharDetails details) {
		aadharRepo.save(details);
	}
	
	public ResponseEntity<AadharDetails> getAdharByUId(int id){
		return new ResponseEntity<AadharDetails>(aadharRepo.findByUID(id),HttpStatusCode.valueOf(200));
	}
	
	public AadharDetails getAdharById(int id){
		return aadharRepo.findById(id).get();
	}
	
	public AadharDetails getAdharByCId(int id){
		return aadharRepo.findByCitizenId(id);
	}
	
	
}
