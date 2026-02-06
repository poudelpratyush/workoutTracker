package com.fitness.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fitness.server.service.ActiveDayService;
import com.fitness.server.model.ActiveDay;


import java.util.List;

@RestController
@RequestMapping("/api/days")
@CrossOrigin(origins = "*")
public class ActiveDayController {

    @Autowired
    private ActiveDayService service;

    @GetMapping
    public List<ActiveDay> getAllDays(){
        return service.getAllActiveDays();
    }

    @PostMapping
    public ActiveDay addDay(@RequestBody ActiveDay day){
        return service.saveActiveDay(day);

    }
    
}
