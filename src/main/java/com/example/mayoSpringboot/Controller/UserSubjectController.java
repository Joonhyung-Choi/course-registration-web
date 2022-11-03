package com.example.mayoSpringboot.controller;

import com.example.mayoSpringboot.dto.UserSubjcet.UserSubjectRequestDto;
import com.example.mayoSpringboot.entity.UserSubjectEntity;
import com.example.mayoSpringboot.service.UserSubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserSubjectController {
    private final UserSubjectService userSubjectService;
    @PostMapping("/test")
    public String userSubjectUpdate(@CookieValue(value = "userName",required = true)String userName,
                                    @RequestBody UserSubjectRequestDto userSubjectRequestDto){
        if(userName == null){return "로그인하세요";}
        return userSubjectService.update(userName,userSubjectRequestDto);
    }

    @GetMapping("/testget")
    public Page<UserSubjectEntity> userSubjectRead(@CookieValue(value = "userName",required = false)String userName, Pageable pageable){
        return userSubjectService.read(pageable);
    }
}
