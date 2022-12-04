package com.example.mayoSpringboot.dto.waiting;

import com.example.mayoSpringboot.dto.waiting.WaitingRequsetDto;
import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.entity.subjectEntity.WaitingSubjectEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WaitingResponseDto {
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


    public WaitingResponseDto(WaitingSubjectEntity waitingSubjectEntity){
        this.id = waitingSubjectEntity.getId();
        this.userEntity = waitingSubjectEntity.getUserEntity();
        this.allWait = waitingSubjectEntity.getAllWait();
        this.waitNum = waitingSubjectEntity.getWaitNum();
        this.major = waitingSubjectEntity.getMajor();
        this.grade = waitingSubjectEntity.getGrade();
        this.subject_name = waitingSubjectEntity.getSubject_name();
        this.subjectId = waitingSubjectEntity.getSubjectId();
        this.subject_type = waitingSubjectEntity.getSubject_type();
        this.score = waitingSubjectEntity.getScore();
        this.max_count = waitingSubjectEntity.getMax_count();
        this.register_count = waitingSubjectEntity.getRegister_count();
        this.subject_time = waitingSubjectEntity.getSubject_time();
        this.professor = waitingSubjectEntity.getProfessor();
    }
}
