package com.fitness.server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitness.server.model.ActiveDays;
import com.fitness.server.repository.ActiveDaysRepository;

@Service
public class ActiveDaysService {

    // creating an instance of ActiveDaysRepository so that you can use it
    @Autowired // injects the repository so that service can use it without instantiating
    private ActiveDaysRepository activeDaysRepository;

    // returns the list of Activedays for our use
    public List<ActiveDays> getAllActiveDays(){
        return activeDaysRepository.findAll();
    }

}
