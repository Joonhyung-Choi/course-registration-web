package com.example.mayoSpringboot.entity.subjectEntity;

import com.example.mayoSpringboot.dto.subjcet.UserSubjectRequestDto;
import com.example.mayoSpringboot.dto.subjcet.UserSubjectResponseDto;
import com.example.mayoSpringboot.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "usersubject")
public class UserSubjectEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name ="user")
    private UserEntity userEntity;

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

    public void update(UserSubjectRequestDto userSubjectRequestDto){
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
    public void upDate(UserSubjectResponseDto userSubjectResponseDto){
        this.userEntity = userSubjectResponseDto.getUserEntity();
        this.major = userSubjectResponseDto.getMajor();
        this.grade = userSubjectResponseDto.getGrade();
        this.subject_name = userSubjectResponseDto.getSubject_name();
        this.subjectId = userSubjectResponseDto.getSubjectId();
        this.subject_type = userSubjectResponseDto.getSubject_type();
        this.score = userSubjectResponseDto.getScore();
        this.max_count = userSubjectResponseDto.getMax_count();
        this.register_count = userSubjectResponseDto.getRegister_count();
        this.subject_time = userSubjectResponseDto.getSubject_time();
        this.professor = userSubjectResponseDto.getProfessor();
    }
}
