package com.example.mayoSpringboot.controller;

import com.example.mayoSpringboot.entity.Article;
import com.example.mayoSpringboot.error.ErrorCode;
import com.example.mayoSpringboot.error.exception.UnAuthorizedException;
import com.example.mayoSpringboot.repository.ArticleRepository;
import com.example.mayoSpringboot.time.TimeGet;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Time;
@Slf4j
@RestController
@RequiredArgsConstructor
public class SubjectController {
    private final ArticleRepository articleRepository;

    @GetMapping("/api/main")
    public Page<Article> responseData(@CookieValue(value="userName", required = false)
                                          String userName, Pageable pageable){
        if(userName == null) {
            throw new UnAuthorizedException(ErrorCode.ACCESS_DENIED_EXCEPTION, "권한이 없습니다.");
        }
        int page = (pageable.getPageNumber() == 0) ? 0 : (pageable.getPageNumber() - 1);
        pageable = PageRequest.of(page, 10);

        return articleRepository.findAll(pageable);
    }
    @GetMapping("/api/time")
    public String timeThrow(){
        TimeGet timeGet = new TimeGet();
        log.info(timeGet.getTime());
        return timeGet.getTime();
    }
}
