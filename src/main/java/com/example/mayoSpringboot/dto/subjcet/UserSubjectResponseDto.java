package com.example.mayoSpringboot.dto.subjcet;

import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.entity.subjectEntity.UserPreSubjectEntity;
import com.example.mayoSpringboot.entity.subjectEntity.UserSubjectEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserSubjectResponseDto {
    private Long id;

    private UserEntity userEntity;

    private String major;

    private String grade;

    private String subject_name;

    private int subjectId;

    private String subject_type;

    private int score;

    private int max_count;

    private int register_count;

    private String subject_time;

    private String professor;

    public UserSubjectResponseDto(UserPreSubjectEntity userPreSubjectEntity){
        this.id = userPreSubjectEntity.getId();
        this.major = userPreSubjectEntity.getMajor();
        this.grade = userPreSubjectEntity.getGrade();
        this.subject_name = userPreSubjectEntity.getSubject_name();
        this.subjectId = userPreSubjectEntity.getSubjectId();
        this.subject_type = userPreSubjectEntity.getSubject_type();
        this.score = userPreSubjectEntity.getScore();
        this.max_count = userPreSubjectEntity.getMax_count();
        this.register_count = userPreSubjectEntity.getRegister_count();
        this.subject_time = userPreSubjectEntity.getSubject_time();
        this.professor = userPreSubjectEntity.getProfessor();
    }
    public UserSubjectResponseDto(UserSubjectEntity userSubjectEntity){
        this.id = userSubjectEntity.getId();
        this.major = userSubjectEntity.getMajor();
        this.grade = userSubjectEntity.getGrade();
        this.subject_name = userSubjectEntity.getSubject_name();
        this.subjectId = userSubjectEntity.getSubjectId();
        this.subject_type = userSubjectEntity.getSubject_type();
        this.score = userSubjectEntity.getScore();
        this.max_count = userSubjectEntity.getMax_count();
        this.register_count = userSubjectEntity.getRegister_count();
        this.subject_time = userSubjectEntity.getSubject_time();
        this.professor = userSubjectEntity.getProfessor();
    }
}
