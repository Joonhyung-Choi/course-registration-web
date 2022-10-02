package com.example.mayoSpringboot.repository;

import com.example.mayoSpringboot.entity.Article;
import org.springframework.data.repository.CrudRepository;

public interface ArticleRepository extends CrudRepository<Article, Long> {

}
