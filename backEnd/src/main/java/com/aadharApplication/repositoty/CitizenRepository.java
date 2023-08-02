package com.aadharApplication.repositoty;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aadharApplication.entity.Citizen;

@Repository
public interface CitizenRepository extends JpaRepository<Citizen, Integer>{

}
