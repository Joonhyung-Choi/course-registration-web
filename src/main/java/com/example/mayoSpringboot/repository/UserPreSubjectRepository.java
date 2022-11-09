package com.example.mayoSpringboot.repository;

import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.entity.UserPreSubjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserPreSubjectRepository extends JpaRepository<UserPreSubjectEntity, Long> {
    List<UserPreSubjectEntity> findByUserEntity(UserEntity userEntity);
}
