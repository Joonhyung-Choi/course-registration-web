package com.example.mayoSpringboot.repository;

import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.entity.subjectEntity.UserSubjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserSubjectRepository extends JpaRepository<UserSubjectEntity, Long> {
    List<UserSubjectEntity> findByUserEntity(UserEntity userEntity);
    UserSubjectEntity findByUserEntityIdAndSubjectId(Long id, int subjectId);

    @Query("SELECT u FROM UserSubjectEntity u JOIN FETCH u.userEntity WHERE u.userEntity.userName =:userName")
    public List<UserSubjectEntity> findByUserSubject(@Param("userName")String userName);

    @Query("SELECT u FROM UserSubjectEntity u JOIN FETCH u.userEntity")
    public List<UserSubjectEntity> findAllUserSubject();
}
