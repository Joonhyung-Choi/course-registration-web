package com.example.mayoSpringboot.controller;

import com.example.mayoSpringboot.dto.user.UserRequestDto;
import com.example.mayoSpringboot.dto.subjcet.DeleteDto;
import com.example.mayoSpringboot.dto.subjcet.UserSubjectRequestDto;
import com.example.mayoSpringboot.dto.subjcet.UserSubjectResponseDto;
import com.example.mayoSpringboot.error.exception.UnAuthorizedException;
import com.example.mayoSpringboot.service.LoginService;
import com.example.mayoSpringboot.service.UserPrevSubjectService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.example.mayoSpringboot.error.ErrorCode.ACCESS_DENIED_EXCEPTION;

@RestController
@RequiredArgsConstructor
@Slf4j
public class UserPrevSubjectController {
    private final UserPrevSubjectService userPrevSubjectService;


    @PostMapping("/api/prevPost")
    public UserRequestDto prevAdd(@CookieValue(value = "userName",required = false)String userName,
                                  @RequestBody UserSubjectRequestDto userSubjectRequestDto){
        if (userName == null){throw new UnAuthorizedException(ACCESS_DENIED_EXCEPTION,"E0001");}
        String user = LoginService.sessionBox.get(userName);
        log.info("prevPost");
        return userPrevSubjectService.prevAdd(user,userSubjectRequestDto);
    }

    @GetMapping("/api/prevGet")
    public List<UserSubjectResponseDto> prevRead(@CookieValue(value = "userName") String userName){
        if (userName == null){throw new UnAuthorizedException(ACCESS_DENIED_EXCEPTION,"E0001");}
        log.info("prevGet");
        String user = LoginService.sessionBox.get(userName);

        return userPrevSubjectService.prevRead(user);
    }

   @PostMapping("/api/prevDelete")
    public UserRequestDto prevDelete(@CookieValue(value = "userName",required = false)String userName, @RequestBody DeleteDto deleteDto){
       if (userName == null){throw new UnAuthorizedException(ACCESS_DENIED_EXCEPTION,"E0001");}
       log.info("prevDelete");
       String user = LoginService.sessionBox.get(userName);
       return userPrevSubjectService.prevDelete(user,deleteDto.getSubjectId());
    }
}
