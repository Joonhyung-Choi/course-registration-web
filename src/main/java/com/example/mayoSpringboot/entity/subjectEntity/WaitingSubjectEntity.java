package com.example.mayoSpringboot.entity.subjectEntity;

import com.example.mayoSpringboot.dto.waiting.WaitUpdate;
import com.example.mayoSpringboot.dto.waiting.WaitingRequsetDto;
import com.example.mayoSpringboot.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "queuesubject")
public class WaitingSubjectEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name ="user")
    private UserEntity userEntity;

    @Column
    private int allWait;
    @Column
    private int waitNum;

    @Column
    private String major; // 개설학과
    @Column
    private String grade; // 학년
    @Column
    private String subject_name; // 교과목명
    @Column
    private int subjectId; // 과목번호
    @Column
    private String subject_type; // 이수구분
    @Column
    private int score; // 학점
    @Column
    private int max_count; // 정원
    @Column
    private int register_count; // 신청인원
    @Column
    private String subject_time; // 수업 시간
    @Column
    private String professor; // 담당교수

    public void update(WaitingRequsetDto waitingRequsetDto){
        this.userEntity = waitingRequsetDto.getUserEntity();
        this.allWait = waitingRequsetDto.getAllWait();
        this.waitNum = waitingRequsetDto.getWaitNum();
        this.major = waitingRequsetDto.getMajor();
        this.grade = waitingRequsetDto.getGrade();
        this.subject_name = waitingRequsetDto.getSubject_name();
        this.subjectId = waitingRequsetDto.getSubjectId();
        this.subject_type = waitingRequsetDto.getSubject_type();
        this.score = waitingRequsetDto.getScore();
        this.max_count = waitingRequsetDto.getMax_count();
        this.register_count = waitingRequsetDto.getRegister_count();
        this.subject_time = waitingRequsetDto.getSubject_time();
        this.professor = waitingRequsetDto.getProfessor();
    }
    public void adjust(WaitUpdate waitUpdate){
        this.allWait = waitUpdate.getAllWait();
        this.waitNum = waitUpdate.getWaitNum();
    }
}
