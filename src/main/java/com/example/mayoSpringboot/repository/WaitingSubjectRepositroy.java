package com.example.mayoSpringboot.repository;

import com.example.mayoSpringboot.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WaitingSubjectRepositroy extends JpaRepository<UserEntity, Long> {

}
