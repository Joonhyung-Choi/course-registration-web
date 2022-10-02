package com.example.mayoSpringboot.dto;

import com.example.mayoSpringboot.entity.Article;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ListResponseDto {
    private String department;
    private int grade;
    private String subject_name;
    private int subject_id;
    private String divison;
    private int grades;
    private String professor;

    public ListResponseDto(Article article) {
        this.department = article.getDepartment();
        this.grade = article.getGrade();
        this.subject_name = article.getSubject_name();
        this.subject_id = article.getSubject_id();
        this.divison = article.getDivison();
        this.grades = article.getGrades();
        this.professor = article.getProfessor();
    }
}
