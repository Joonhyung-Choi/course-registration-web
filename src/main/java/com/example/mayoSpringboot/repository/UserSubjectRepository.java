package com.example.mayoSpringboot.repository;

import com.example.mayoSpringboot.entity.UserSubjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserSubjectRepository extends JpaRepository<UserSubjectEntity, Long> {
}
