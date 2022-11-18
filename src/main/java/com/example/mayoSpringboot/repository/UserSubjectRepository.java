package com.example.mayoSpringboot.repository;

import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.entity.UserSubjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserSubjectRepository extends JpaRepository<UserSubjectEntity, Long> {
    List<UserSubjectEntity> findByUserEntity(UserEntity userEntity);
}
