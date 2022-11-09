package com.example.mayoSpringboot.controller;

import com.example.mayoSpringboot.dto.usersubjcet.UserSubjectRequestDto;
import com.example.mayoSpringboot.entity.UserPreSubjectEntity;
import com.example.mayoSpringboot.service.LoginService;
import com.example.mayoSpringboot.service.UserSubjectService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class UserPreSubjectController {
    private final UserSubjectService userSubjectService;


    @PostMapping("/test")
    public String userSubjectAdd(@CookieValue(value = "userName",required = true)String userName,
                                    @RequestBody UserSubjectRequestDto userSubjectRequestDto){
        if(userName == null){return "로그인하세요";}
        String user = (String)LoginService.sessionBox.get(userName);
        log.info("여기다 "+user);
        return userSubjectService.add(user,userSubjectRequestDto);
    }

    @GetMapping("/testget")
    public List<UserPreSubjectEntity> userSubjectRead(@CookieValue(value = "userName",required = false)String userName){
        log.info("찍히나?"+userName);
        String user = (String)LoginService.sessionBox.get(userName);
        log.info("여기다 "+user);
        return userSubjectService.read(user);
    }

    @DeleteMapping("/testdelete")
    public String userSubjectDelete(@CookieValue(value = "userName",required = true)String userName){
        String user =(String)LoginService.sessionBox.get(userName);
        return userSubjectService.delete(user);
    }
}
