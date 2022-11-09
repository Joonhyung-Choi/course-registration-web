package com.example.mayoSpringboot.controller;

import com.example.mayoSpringboot.dto.LoginRequsetDto;
import com.example.mayoSpringboot.dto.SignUpDto;
import com.example.mayoSpringboot.dto.user.UserRequestDto;
import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.error.exception.UnAuthorizedException;
import com.example.mayoSpringboot.repository.UserRepository;
import com.example.mayoSpringboot.service.LoginService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.websocket.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import static com.example.mayoSpringboot.error.ErrorCode.ACCESS_DENIED_EXCEPTION;

@RestController
@RequiredArgsConstructor
@Slf4j
public class LoginController {
    private final LoginService loginService;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @PostMapping("/api/login")
    public String login(@RequestBody LoginRequsetDto loginRequsetDto,
                        HttpServletResponse response){
        UserEntity userEntity = userRepository.findByUserName(loginRequsetDto.getUserId());
        if (userEntity == null) {
            throw new UnAuthorizedException(ACCESS_DENIED_EXCEPTION,"E0002");
        }
        if ( !passwordEncoder.matches(loginRequsetDto.getUserPw(),userEntity.getUserPw()) ) {
            throw new RuntimeException("비밃번호가 맞지 않습니다.");
        }
        return loginService.login(userEntity.getUserName(), response);
    }

    @PostMapping("/api/signup")
    public void signUp(@RequestBody SignUpDto signUpDto){
        UserRequestDto userRequestDto = new UserRequestDto(signUpDto.getUserId(), signUpDto.getUserPw(), signUpDto.getUserName(),null);
        loginService.signUp(userRequestDto);
    }

    @PostMapping("/api/logout")
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
