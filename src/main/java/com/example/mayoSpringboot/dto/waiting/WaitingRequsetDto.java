package com.example.mayoSpringboot.dto.waiting;

import com.example.mayoSpringboot.dto.subjcet.UserSubjectRequestDto;
import com.example.mayoSpringboot.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class WaitingRequsetDto {
    private Long id;
    private UserEntity userEntity;

    private int allWait;
    private int waitNum;
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


    public WaitingRequsetDto(UserSubjectRequestDto userSubjectRequestDto){
        this.id = userSubjectRequestDto.getId();
        this.userEntity = userSubjectRequestDto.getUserEntity();
        this.major = userSubjectRequestDto.getMajor();
        this.grade = userSubjectRequestDto.getGrade();
        this.subject_name = userSubjectRequestDto.getSubject_name();
        this.subjectId = userSubjectRequestDto.getSubjectId();
        this.subject_type = userSubjectRequestDto.getSubject_type();
        this.score = userSubjectRequestDto.getScore();
        this.max_count = userSubjectRequestDto.getMax_count();
        this.register_count = userSubjectRequestDto.getRegister_count();
        this.subject_time = userSubjectRequestDto.getSubject_time();
        this.professor = userSubjectRequestDto.getProfessor();
    }
}
