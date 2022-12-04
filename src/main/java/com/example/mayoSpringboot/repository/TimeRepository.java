package com.example.mayoSpringboot.repository;

import com.example.mayoSpringboot.entity.TimeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TimeRepository extends JpaRepository<TimeEntity, Long> {
}
