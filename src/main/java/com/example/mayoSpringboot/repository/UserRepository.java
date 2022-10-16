package com.example.mayoSpringboot.repository;

import com.example.mayoSpringboot.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    UserEntity findByUserId(String userId);
    boolean existsByUserId(String userId);
}
