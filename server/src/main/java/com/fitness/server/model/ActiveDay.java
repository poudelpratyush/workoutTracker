package com.fitness.server.model;

import java.time.LocalDate;
import jakarta.persistence.*; // importing jpa dictionary that defines @Entity and @Table



@Entity // tells that this represents the database
@Table(name = "activedays")
public class ActiveDay{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // telling that postgres handles the id
    private Long id;

    @Column(name = "active_date", nullable = false)
    private LocalDate date;


    //Getters and setters


    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public LocalDate getDate(){
        return date;
    }

    public void setDate(LocalDate date){
        this.date = date;
    }

}