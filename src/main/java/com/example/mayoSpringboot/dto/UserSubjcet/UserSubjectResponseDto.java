package com.example.mayoSpringboot.dto.UserSubjcet;

import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.entity.UserSubjectEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserSubjectResponseDto {
    private Long id;

    private UserEntity userEntity;

    private String major;

    private int grade;

    private String subject_name;

    private int subject_id;

    private String subject_type;

    private int score;

    private int max_count;

    private int register_count;

    private String subject_time;

    private String professor;

    public UserSubjectResponseDto(UserSubjectEntity userSubjectEntity){
        this.id = userSubjectEntity.getId();
        this.major = userSubjectEntity.getMajor();
        this.grade = userSubjectEntity.getGrade();
        this.subject_name = userSubjectEntity.getSubject_name();
        this.subject_id = userSubjectEntity.getSubject_id();
        this.subject_type = userSubjectEntity.getSubject_type();
        this.score = userSubjectEntity.getScore();
        this.max_count = userSubjectEntity.getMax_count();
        this.register_count = userSubjectEntity.getRegister_count();
        this.subject_time = userSubjectEntity.getSubject_time();
        this.professor = userSubjectEntity.getProfessor();
    }
}
