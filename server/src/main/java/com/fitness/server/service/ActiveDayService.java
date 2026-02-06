package com.fitness.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.fitness.server.model.ActiveDay;
import com.fitness.server.repository.ActiveDayRepository;

import java.util.List;


@Service // tells java that it holds business logic
public class ActiveDayService {

    @Autowired
    private ActiveDayRepository repository;

    public List<ActiveDay> getAllActiveDays(){
        return repository.findAll();
    }

    public ActiveDay saveActiveDay(ActiveDay day){
        return repository.save(day);
    }
    
}
