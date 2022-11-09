package com.example.mayoSpringboot.dto.usersubjcet;

import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.entity.UserPreSubjectEntity;
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

    public UserSubjectResponseDto(UserPreSubjectEntity userPreSubjectEntity){
        this.id = userPreSubjectEntity.getId();
        this.major = userPreSubjectEntity.getMajor();
        this.grade = userPreSubjectEntity.getGrade();
        this.subject_name = userPreSubjectEntity.getSubject_name();
        this.subject_id = userPreSubjectEntity.getSubject_id();
        this.subject_type = userPreSubjectEntity.getSubject_type();
        this.score = userPreSubjectEntity.getScore();
        this.max_count = userPreSubjectEntity.getMax_count();
        this.register_count = userPreSubjectEntity.getRegister_count();
        this.subject_time = userPreSubjectEntity.getSubject_time();
        this.professor = userPreSubjectEntity.getProfessor();
    }
}
