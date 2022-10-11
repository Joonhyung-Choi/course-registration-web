package com.example.mayoSpringboot.dto;

import com.example.mayoSpringboot.entity.Article;
import lombok.Getter;

import javax.persistence.Enumerated;

@Getter
public class ListResponseDto {
    //@Enumerated(Enum)
    private String department;
    private int grade;

    private String subject_type;

    private String subject_time;
    private int subject_id;
    private String divison;
    private int grades;

    private int max_count;

    private int register_count;

    private String time;
    private String professor;


    public ListResponseDto(Article article) { //킬때마다 create아닌 update를 하기위해서 1차캐쉬가 알아서 해준다
        this.department = article.getDepartment();
        this.grade = article.getGrade();
        this.subject_id = article.getSubject_id();
        this.divison = article.getDivison();
        this.grades = article.getGrades();
        this.max_count = article.getMax_count();
        this.register_count = article.getRegister_count();
        this.subject_type = article.getSubject_type();
        this.subject_time = article.getSubject_time();
        this.professor = article.getProfessor();
    }

    public Article toEntity(){
        return new Article();
    }
}
