package com.example.mayoSpringboot.repository;

import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.entity.subjectEntity.UserPreSubjectEntity;
import com.example.mayoSpringboot.entity.subjectEntity.UserSubjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserPrevSubjectRepository extends JpaRepository<UserPreSubjectEntity, Long> {
    List<UserPreSubjectEntity> findByUserEntity(UserEntity userEntity);
    UserPreSubjectEntity findByUserEntityIdAndSubjectId(Long id,int subjectId);

    @Query("SELECT u FROM UserPreSubjectEntity u JOIN FETCH u.userEntity WHERE u.userEntity.userName =:userName")
    public List<UserPreSubjectEntity> findAllByUserPrevSubject(@Param("userName")String userName);

}
