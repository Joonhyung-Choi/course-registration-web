package com.example.mayoSpringboot.Controller;

import com.example.mayoSpringboot.dto.UserRequestDto;
import com.example.mayoSpringboot.Service.LoginService;
import com.example.mayoSpringboot.dto.LoginRequestDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class LoginController {
    private final LoginService loginService;//, HttpServletResponse response

    @PostMapping("/login")
    public String login(@RequestParam String userId, @RequestParam String userPw ,HttpServletResponse
                        response){

        LoginRequestDto loginRequestDto =new LoginRequestDto();
        loginRequestDto.setUserId(userId);
        loginRequestDto.setUserPw(userPw);

        return loginService.checkUser(loginRequestDto,response);
    }
    @PostMapping("/signup")
    public String signUp(@RequestBody UserRequestDto userRequestDto){
        return loginService.signUp(userRequestDto);
    }

    @PostMapping("/logout")
    public String logout(@CookieValue(value = "userName",defaultValue = "Atta")String userName,
                         HttpServletResponse response){

        Cookie cookie = new Cookie("userName",null);
        cookie.setMaxAge(0);
        response.addCookie(cookie);

        return "로그아웃완료";
    }
}
