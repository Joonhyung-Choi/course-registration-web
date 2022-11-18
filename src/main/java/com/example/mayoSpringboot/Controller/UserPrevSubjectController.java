package com.example.mayoSpringboot.controller;

import com.example.mayoSpringboot.dto.usersubjcet.UserSubjectRequestDto;
import com.example.mayoSpringboot.entity.UserPreSubjectEntity;
import com.example.mayoSpringboot.service.LoginService;
import com.example.mayoSpringboot.service.UserPrevSubjectService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class UserPrevSubjectController {
    private final UserPrevSubjectService userPrevSubjectService;


    @PostMapping("/api/prevPost")
    public String prevAdd(@CookieValue(value = "userName",required = true)String userName,
                                    @RequestBody UserSubjectRequestDto userSubjectRequestDto){
        if(userName == null){return "로그인하세요";}
        String user = (String)LoginService.sessionBox.get(userName);

        return userPrevSubjectService.prevAdd(user,userSubjectRequestDto);
    }

    @GetMapping("/api/prevGet")
    public List<UserPreSubjectEntity> prevRead(@CookieValue(value = "userName",required = false) String userName){
        log.info("찍히나?"+userName);
        String user = (String)LoginService.sessionBox.get(userName);
        log.info("여기다 "+LoginService.sessionBox.get(userName));
        return userPrevSubjectService.prevRead(user);
    }

   @PostMapping("/api/prevDelete/{id}")
    public void prevDelete(@CookieValue(value = "userName",required = true)String userName,@PathVariable Long id){
        log.info("제대로 했넹");
        String user = LoginService.sessionBox.get(userName);
        userPrevSubjectService.prevDelete(user,id);
    }
    /*@PostMapping("/delete/{id}")
    public void prevDelete(@CookieValue(value = "userName",required = true)String userName,@PathVariable Long id){
        log.info(id.toString());
        log.info("pk:"+id+" 작동 완료");
    }*/
}
