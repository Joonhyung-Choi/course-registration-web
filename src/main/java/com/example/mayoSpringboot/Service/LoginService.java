package com.example.mayoSpringboot.Service;

import com.example.mayoSpringboot.dto.LoginRequestDto;
import com.example.mayoSpringboot.dto.UserRequestDto;
import com.example.mayoSpringboot.Entity.UserEntity;
import com.example.mayoSpringboot.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@Service
@Slf4j
@RequiredArgsConstructor
public class LoginService {
    private final UserRepository userRepository;

    public String checkUser(LoginRequestDto loginRequestDto,HttpServletResponse response) {
        log.info(loginRequestDto.getUserId());
        log.info(loginRequestDto.getUserPw());

        if (!(userRepository.existsByUserId(loginRequestDto.getUserId()))) {
            throw new RuntimeException("해당하는 계정이 없습니다.");
        }
        UserEntity userEntity = userRepository.findByUserId(loginRequestDto.getUserId());
        if ( !(loginRequestDto.getUserPw()).equals(userEntity.getUserPw()) ) {
            throw new RuntimeException("비밀번호가 맞지 않습니다.");
        }
        Cookie cookie = new Cookie("userName",userEntity.getUserName());

        response.addCookie(cookie);
        log.info(cookie.getValue());
        return cookie.getValue();
    }
    public String signUp(UserRequestDto userRequestDto){
        if( userRepository.existsByUserId(userRequestDto.getUserId())){
            throw new RuntimeException("해당 ID는 이미 사용되고 있어요!");
        }
        UserEntity userEntity = userRequestDto.toEntity();
        userRepository.save(userEntity);
        return "회원가입 완료! 로그인 하세요";
    }
}
