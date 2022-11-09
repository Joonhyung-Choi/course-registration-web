package com.example.mayoSpringboot.repository;

import com.example.mayoSpringboot.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    UserEntity findByUserName(String userName);
    boolean existsByUserId(String userId);
}
