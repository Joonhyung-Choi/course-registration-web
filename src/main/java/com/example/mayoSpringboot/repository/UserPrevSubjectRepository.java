package com.example.mayoSpringboot.repository;

import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.entity.UserPreSubjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserPrevSubjectRepository extends JpaRepository<UserPreSubjectEntity, Long> {
    List<UserPreSubjectEntity> findByUserEntity(UserEntity userEntity);
    //UserPreSubjectEntity findBySubject_idAndUserEntity(int subject_id,UserEntity userEntity);
}
