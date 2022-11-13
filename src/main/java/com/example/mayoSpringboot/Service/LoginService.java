package com.example.mayoSpringboot.service;

import com.example.mayoSpringboot.dto.user.UserRequestDto;
import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.enumcustom.UserRole;
import com.example.mayoSpringboot.error.ErrorCode;
import com.example.mayoSpringboot.error.exception.UnAuthorizedException;
import com.example.mayoSpringboot.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
@Slf4j
@RequiredArgsConstructor
public class LoginService {
    private final UserRepository userRepository;
    public static final Map<String, String> sessionBox = new HashMap<>();

    private final PasswordEncoder passwordEncoder;

    public String login(String userName, HttpServletResponse response) {
        String session = UUID.randomUUID().toString();
        sessionBox.put(session, userName);
        log.info("로그인서비스" +sessionBox.get(session));
        log.info("로그인서비스" +sessionBox.get(userName));
        Cookie cookie = new Cookie("userName", session);
        log.info(String.valueOf(cookie));
        cookie.setMaxAge(30 * 60);
        response.addCookie(cookie);

        return cookie.getValue();
    }

    public void signUp(UserRequestDto userRequestDto) { //회원가입
        if (userRepository.existsByUserId(userRequestDto.getUserId())) {
            throw new UnAuthorizedException(ErrorCode.DUPLICATE_USER,"해당 계정이 이미 존재합니다.");
        }
        String encodedPassEncoder = passwordEncoder.encode(userRequestDto.getUserPw());
        userRequestDto.setUserPw(encodedPassEncoder);

        userRequestDto.setUserRole(UserRole.USER);

        UserEntity userEntity = userRequestDto.toEntity();
        userRepository.save(userEntity);
    }
}