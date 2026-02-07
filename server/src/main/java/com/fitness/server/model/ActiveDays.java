package com.fitness.server.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


// We replicate the database table
@Entity
@Table(name = "activedays")
public class ActiveDays {
    public LocalDate active_date;

    @Id
    public Long id;

    public void setDate(LocalDate date){
        this.active_date = date;
    }

}
