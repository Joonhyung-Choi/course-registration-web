package com.example.mayoSpringboot.entity;

import com.example.mayoSpringboot.dto.usersubjcet.UserSubjectRequestDto;
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
    private int grade; // 학년
    @Column
    private String subject_name; // 교과목명
    @Column
    private int subject_id; // 과목번호
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
        this.subject_id = userSubjectRequestDto.getSubject_id();
        this.subject_type = userSubjectRequestDto.getSubject_type();
        this.score = userSubjectRequestDto.getScore();
        this.max_count = userSubjectRequestDto.getMax_count();
        this.register_count = userSubjectRequestDto.getRegister_count();
        this.subject_time = userSubjectRequestDto.getSubject_time();
        this.professor = userSubjectRequestDto.getProfessor();
    }
}
