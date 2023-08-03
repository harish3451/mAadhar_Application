package com.aadharApplication.repositoty;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aadharApplication.entity.AadharDetails;
import com.aadharApplication.entity.Citizen;

@Repository
public interface AadharRepository extends JpaRepository<AadharDetails, Integer>{
	 AadharDetails findByUID(int uid);
	 AadharDetails findByCitizenId(int cid);
}
