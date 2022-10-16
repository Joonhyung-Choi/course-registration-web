package com.example.mayoSpringboot.Entity;

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

}
