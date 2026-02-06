package com.fitness.server.repository;

import com.fitness.server.model.ActiveDay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActiveDayRepository extends JpaRepository<ActiveDay, Long> {
    
}
