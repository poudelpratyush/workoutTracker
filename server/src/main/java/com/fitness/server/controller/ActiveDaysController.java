package com.fitness.server.controller;

import java.util.List;

import com.fitness.server.service.ActiveDaysService;
import com.fitness.server.model.ActiveDays;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("api/activedays")
@CrossOrigin(origins = "*")
public class ActiveDaysController {

    @Autowired
    private ActiveDaysService activeDaysService;

    @GetMapping
    public List<ActiveDays> getAllDays(){
        return activeDaysService.getAllActiveDays();
    }
    
}
