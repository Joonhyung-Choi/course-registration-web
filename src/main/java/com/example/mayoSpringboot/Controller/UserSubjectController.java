package com.example.mayoSpringboot.controller;

import com.example.mayoSpringboot.dto.usersubjcet.UserSubjectRequestDto;
import com.example.mayoSpringboot.entity.UserPreSubjectEntity;
import com.example.mayoSpringboot.entity.UserSubjectEntity;
import com.example.mayoSpringboot.service.LoginService;
import com.example.mayoSpringboot.service.UserSubjectService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class UserSubjectController {
    private final UserSubjectService userSubjectService;


    @PostMapping("/api/subjectPost")
    public String prevAdd(@CookieValue(value = "userName",required = true)String userName,
                          @RequestBody UserSubjectRequestDto userSubjectRequestDto){
        if(userName == null){return "로그인하세요";}
        String user = (String) LoginService.sessionBox.get(userName);

        return userSubjectService.subjectAdd(user,userSubjectRequestDto);
    }

    @GetMapping("/api/subjectGet")
    public List<UserSubjectEntity> prevRead(@CookieValue(value = "userName",required = false) String userName){
        log.info("찍히나?"+userName);
        String user = (String)LoginService.sessionBox.get(userName);
        log.info("여기다 "+LoginService.sessionBox.get(userName));
        return userSubjectService.subjectRead(user);
    }

    @DeleteMapping("/api/subjectDelete")
    public void prevDelete(@CookieValue(value = "userName",required = true)String userName,@RequestBody int subject_id){
        log.info("제대로 했넹");
        String user = LoginService.sessionBox.get(userName);
        userSubjectService.subjectDelete(user,subject_id);
    }
}
