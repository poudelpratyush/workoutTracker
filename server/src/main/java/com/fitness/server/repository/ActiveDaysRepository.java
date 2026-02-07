package com.fitness.server.repository;

import com.fitness.server.model.ActiveDays;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


//
@Repository
public interface ActiveDaysRepository extends JpaRepository<ActiveDays, Long>{

}
