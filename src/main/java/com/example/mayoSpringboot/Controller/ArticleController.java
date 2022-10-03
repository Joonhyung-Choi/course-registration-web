package com.example.mayoSpringboot.Controller;

import com.example.mayoSpringboot.repository.ArticleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@Controller
@Slf4j
@RestController
public class ArticleController {

    @Autowired
    private ArticleRepository articleRepository;

    @GetMapping("/api/courses")
    public String mayodb(Model model){
        //가져온 article 묶음을 뷰로 전달
        model.addAttribute("articleList", articleRepository.findAll());

        //뷰 페이지를 설정
        return "";
    }
}
