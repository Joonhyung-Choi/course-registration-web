package com.example.mayoSpringboot.controller;

import com.example.mayoSpringboot.entity.Article;
import com.example.mayoSpringboot.repository.ArticleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequiredArgsConstructor
public class SubjectController {
    private final ArticleRepository articleRepository;

    @GetMapping("/api/main")
    public Page<Article> responsedata(@CookieValue(value="userName",defaultValue = "Atta")
                                          String userName, Pageable pageable){
        System.out.println(articleRepository.findAll());
        int page = (pageable.getPageNumber() == 0) ? 0 : (pageable.getPageNumber() - 1);
        pageable = PageRequest.of(page, 10);

        return articleRepository.findAll(pageable);
    }
}
