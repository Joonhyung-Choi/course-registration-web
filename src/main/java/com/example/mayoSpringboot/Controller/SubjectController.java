package com.example.mayoSpringboot.controller;

import com.example.mayoSpringboot.entity.subjectEntity.Article;
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

import java.time.LocalTime;

@Slf4j
@RestController
@RequiredArgsConstructor
public class SubjectController {
    private final ArticleRepository articleRepository;

    @GetMapping("/api/courseListGet")
    public Page<Article> responseData(@CookieValue(value="userName", required = false)
                                          String userName, Pageable pageable){
//        if(userName == null) {
//            throw new UnAuthorizedException(ErrorCode.ACCESS_DENIED_EXCEPTION, "권한이 없습니다.");
//        }
        int page = (pageable.getPageNumber() == 0) ? 0 : (pageable.getPageNumber() - 1);
        pageable = PageRequest.of(page, 20);

        Page<Article> result = articleRepository.findAll(pageable);

        return articleRepository.findAll(pageable);
        //Collections.sort(articlePage,new IdComparator());
        //return articlePage;
    }
    /*class IdComparator implements Comparator<Article>{
        @Override
        public int compare(Article a, Article b){
            if(a.getId() > b.getId()){
                return 1;
            }else
                return -1;
        }
    }*/

    @GetMapping("/api/time")
    public LocalTime timeThrow(){
        TimeGet timeGet = new TimeGet();
        return timeGet.getNow();
    }
}
