package com.example.mayoSpringboot.entity;

import lombok.AllArgsConstructor;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import java.time.LocalTime;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class TimeEntity {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String startTime;
    private String endTime;
}
