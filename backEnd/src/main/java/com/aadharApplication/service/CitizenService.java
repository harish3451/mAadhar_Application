package com.aadharApplication.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.aadharApplication.entity.Citizen;
import com.aadharApplication.repositoty.CitizenRepository;

@Service
public class CitizenService {
	
	@Autowired
	CitizenRepository citizenRepo;
	
	public ResponseEntity<List<Citizen>> getAllUser() {
		List<Citizen> citizen = citizenRepo.findAll();
		return new ResponseEntity<List<Citizen>>(citizen,HttpStatusCode.valueOf(200));
	}
	
	public void addCitizen(Citizen citizen) {
		citizenRepo.save(citizen);
	}
	
	public Citizen getDetails(int id) {
		Citizen details = citizenRepo.findById(id).get();
		return details;
	}
	
	
}
