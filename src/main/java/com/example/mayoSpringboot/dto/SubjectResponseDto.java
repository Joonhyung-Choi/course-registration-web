package com.example.mayoSpringboot.dto;

import com.example.mayoSpringboot.entity.subjectEntity.Article;
import lombok.Getter;

@Getter
public class SubjectResponseDto {
    //@Enumerated(Enum)
    private String major;
    private String subject_name;
    private String grade;
    private int subjectId;
    private String subject_type;
    private int score;
    private int max_count;
    private int register_count;
    private String subject_time;
    private String professor;


    public SubjectResponseDto(Article article) { //킬때마다 create아닌 update를 하기위해서 1차캐쉬가 알아서 해준다
        this.major = article.getMajor();
        this.subject_name = article.getSubject_name();
        this.grade = article.getGrade();
        this.subjectId = article.getSubjectId();
        this.subject_type = article.getSubject_type();
        this.score = article.getScore();
        this.max_count = article.getMax_count();
        this.register_count = article.getRegister_count();
        this.subject_time = article.getSubject_time();
        this.professor =article.getProfessor();
    }

    public Article toEntity(){
        return new Article();
    }
}
