package com.example.mayoSpringboot.controller;

import com.example.mayoSpringboot.entity.subjectEntity.Article;
import com.example.mayoSpringboot.repository.ArticleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
public class SubjectController {
    private final ArticleRepository articleRepository;

    @GetMapping("/api/courseListGet")
    public Page<Article> responseData(@CookieValue(value="userName", required = false)
                                          String userName, Pageable pageable){

        int page = (pageable.getPageNumber() == 0) ? 0 : (pageable.getPageNumber() - 1);
        pageable = PageRequest.of(page, 20);

        Page<Article> result = articleRepository.findAll(pageable);

        return articleRepository.findAll(pageable);

    }

}
