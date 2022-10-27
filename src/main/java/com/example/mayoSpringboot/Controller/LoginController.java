package com.example.mayoSpringboot.controller;

import com.example.mayoSpringboot.dto.SignUpDto;
import com.example.mayoSpringboot.dto.UserRequestDto;
import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.repository.UserRepository;
import com.example.mayoSpringboot.service.LoginService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.transform.PassThroughResultTransformer;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Slf4j
public class LoginController {
    private final LoginService loginService;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @PostMapping("/login")
    public String login(@RequestParam String userId,@RequestParam String userPw,
                        HttpServletResponse response){
        log.info(userId);
        log.info(userPw);
        UserEntity userEntity = userRepository.findByUserId(userId);
        if (userEntity == null) {
            throw new RuntimeException("해당 계정이 없습니다.");
        }
        if ( !passwordEncoder.matches(userPw,userEntity.getUserPw()) ) {
            throw new RuntimeException("비밃번호가 맞지 않습니다.");
        }
        return loginService.login(userEntity.getUserName(), response);
    }

    @PostMapping("/signup")
    public String signUp(@RequestBody SignUpDto signUpDto){
        log.info(signUpDto.getUserId());
       log.info(signUpDto.getUserId());
        log.info(signUpDto.getUserName());
        UserRequestDto userRequestDto = new UserRequestDto(signUpDto.getUserId(), signUpDto.getUserPw(), signUpDto.getUserName(),null);
        return loginService.signUp(userRequestDto);
    }

    @PostMapping("/logout")
    public String logout(@CookieValue(value = "userName",required = true)Cookie userName,
                         HttpServletResponse response){
        if(userName == null){
            return "로그인이 되어있지 않습니다";
        }
        //쿠키 삭제
        //널인 쿠키를 만들어서
        Cookie cookie = new Cookie("userName",null);
        //max -age 0으로 만들어서 쿠키의 세션을 종료시킴
        cookie.setMaxAge(0);
        //0인 쿠키 날리기
        response.addCookie(cookie);

        //세션 로그아웃 login(HttpServletRequest request)
        /*HttpSession session = request.getSession(false);
        if(session != null){session.invalidate();} // 세션 날리기*/
        return "로그아웃완료";
    }
}
