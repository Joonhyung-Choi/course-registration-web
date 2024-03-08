package com.example.mayoSpringboot.repository;

import com.example.mayoSpringboot.entity.subjectEntity.Article;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArticleRepository extends JpaRepository<Article, Long> {
    List<Article> findAll();
    Article findBySubjectId(int subjectId);
}
