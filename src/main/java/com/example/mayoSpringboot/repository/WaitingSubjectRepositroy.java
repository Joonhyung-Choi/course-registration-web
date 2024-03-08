package com.example.mayoSpringboot.repository;

import com.example.mayoSpringboot.entity.subjectEntity.WaitingSubjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;
import java.util.List;

public interface WaitingSubjectRepositroy extends JpaRepository<WaitingSubjectEntity, Long> {
    @Query("SELECT w FROM WaitingSubjectEntity w JOIN FETCH w.userEntity WHERE w.userEntity.userName =:userName")
    public List<WaitingSubjectEntity> findByWaitOfUserName(@Param("userName")String userName);

    @Query(value = "SELECT w FROM WaitingSubjectEntity w JOIN FETCH w.userEntity WHERE W.userEntity.userName =:userName AND w.subjectId =:subjectId",nativeQuery = true)
    public WaitingSubjectEntity finByWaitOfUserNameAndSubjectId(@Param("userName")String userName,@Param("subjectId")int subjectId);

    @Query("SELECT w FROM WaitingSubjectEntity w JOIN FETCH w.userEntity WHERE w.subjectId =:subjectId")
    public ArrayList<WaitingSubjectEntity> finByWaitOfSubjectId(@Param("subjectId")int subjectId);
}

