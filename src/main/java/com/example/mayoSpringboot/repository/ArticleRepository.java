package com.example.mayoSpringboot.Repository;

import com.example.mayoSpringboot.Entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArticleRepository extends JpaRepository<Article, Long> {
    List<Article> findAll();
}
