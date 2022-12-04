package com.example.mayoSpringboot.controller;

import com.example.mayoSpringboot.dto.user.UserRequestDto;
import com.example.mayoSpringboot.dto.subjcet.DeleteDto;
import com.example.mayoSpringboot.dto.subjcet.UserSubjectRequestDto;
import com.example.mayoSpringboot.dto.subjcet.UserSubjectResponseDto;
import com.example.mayoSpringboot.error.exception.UnAuthorizedException;
import com.example.mayoSpringboot.service.LoginService;
import com.example.mayoSpringboot.service.UserSubjectService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.example.mayoSpringboot.error.ErrorCode.ACCESS_DENIED_EXCEPTION;

@RestController
@RequiredArgsConstructor
@Slf4j
public class UserSubjectController {
    private final UserSubjectService userSubjectService;


    @PostMapping("/api/subjectPost")
    public UserRequestDto prevAdd(@CookieValue(value = "userName",required = false)String userName,
                                  @RequestBody UserSubjectRequestDto userSubjectRequestDto){
        log.info("SubjectPost");
        if (userName == null){throw new UnAuthorizedException(ACCESS_DENIED_EXCEPTION,"E0001");}
        String user =  LoginService.sessionBox.get(userName);

        return userSubjectService.subjectAdd(user,userSubjectRequestDto);
    }

    @GetMapping("/api/subjectGet")
    public List<UserSubjectResponseDto> prevRead(@CookieValue(value = "userName") String userName){
        if (userName == null){throw new UnAuthorizedException(ACCESS_DENIED_EXCEPTION,"E0001");}
        log.info("SubjectGet");
        String user = LoginService.sessionBox.get(userName);

        return userSubjectService.subjectRead(user);
    }

    @PostMapping("/api/subjectDelete")
    public UserRequestDto prevDelete(@CookieValue(value = "userName",required = false)String userName, @RequestBody DeleteDto deleteDto){
        if (userName == null){throw new UnAuthorizedException(ACCESS_DENIED_EXCEPTION,"E0001");}
        log.info("SubjectDelete");
        String user = LoginService.sessionBox.get(userName);
        return userSubjectService.subjectDelete(user,deleteDto.getSubjectId());
    }
}
