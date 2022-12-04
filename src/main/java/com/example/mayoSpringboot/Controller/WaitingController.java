package com.example.mayoSpringboot.controller;

import com.example.mayoSpringboot.dto.subjcet.UserSubjectRequestDto;
import com.example.mayoSpringboot.dto.waiting.WaitingResponseDto;
import com.example.mayoSpringboot.error.exception.UnAuthorizedException;
import com.example.mayoSpringboot.service.LoginService;
import com.example.mayoSpringboot.service.WaitingSubjectService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.example.mayoSpringboot.error.ErrorCode.ACCESS_DENIED_EXCEPTION;


@RestController
@RequiredArgsConstructor
@Slf4j
public class WaitingController {
    private final WaitingSubjectService waitingSubjectService;

    @GetMapping("/api/getWaitingList")
    public List<WaitingResponseDto> getWaitingList(@CookieValue(value = "userName")String userName){
        if (userName == null){throw new UnAuthorizedException(ACCESS_DENIED_EXCEPTION,"E0001");}
        log.info("getWaititngList");
        String user = LoginService.sessionBox.get(userName);
        return waitingSubjectService.getWaitingList(user);
    }
    @PostMapping("/api/waitingDelete")
    public String waitingDelete(@CookieValue(value = "userName")String userName, @RequestBody UserSubjectRequestDto userSubjectRequestDto){
        if (userName == null){throw new UnAuthorizedException(ACCESS_DENIED_EXCEPTION,"E0001");}
        log.info("WaitingDelete");
        String user = LoginService.sessionBox.get(userName);

        return waitingSubjectService.deleteWaitingOfUserAndSubjectId(user, userSubjectRequestDto.getSubjectId());
    }
}
