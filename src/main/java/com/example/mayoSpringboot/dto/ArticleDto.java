package com.example.mayoSpringboot.dto;

import com.example.mayoSpringboot.entity.subjectEntity.Article;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ArticleDto {
    private String major;
    private String grade;
    private String subject_name;
    private int subjectId;
    private String subject_type;
    private int score;
    private int max_count;
    private int prev_register_count;
    private int register_count;
    private String subject_time;
    private String professor;

    public ArticleDto(Article article){
        this.major = article.getMajor();
        this.grade = article.getGrade();
        this.subject_name = article.getSubject_name();
        this.subjectId = article.getSubjectId();
        this.subject_type = article.getSubject_type();
        this.score = article.getScore();
        this.max_count = article.getMax_count();
        this.prev_register_count = article.getPrev_register_count();
        this.register_count = article.getRegister_count();
        this.subject_time = article.getSubject_time();
        this.professor = article.getProfessor();
    }

}
