package com.example.mayoSpringboot.entity.subjectEntity;

import com.example.mayoSpringboot.dto.ArticleDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Getter
@Table(name = "articles")
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

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
    private int prev_register_count;// 예비 수강신청 인원
    @Column
    private int register_count; // 신청인원
    @Column
    private String subject_time; // 수업 시간
    @Column
    private String professor; // 담당교수

    public void update(ArticleDto articleDto){
        this.major = articleDto.getMajor();
        this.grade = articleDto.getGrade();
        this.subject_name = articleDto.getSubject_name();
        this.subjectId = articleDto.getSubjectId();
        this.subject_type = articleDto.getSubject_type();
        this.score = articleDto.getScore();
        this.max_count = articleDto.getMax_count();
        this.prev_register_count = articleDto.getPrev_register_count();
        this.register_count = articleDto.getRegister_count();
        this.subject_time = articleDto.getSubject_time();
        this.professor = articleDto.getProfessor();
    }
}
