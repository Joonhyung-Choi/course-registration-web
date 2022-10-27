package com.example.mayoSpringboot.service;

import com.example.mayoSpringboot.dto.SignUpDto;
import com.example.mayoSpringboot.dto.UserRequestDto;
import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.enumcustom.UserRole;
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
    private final Map<String, Object> sessionBox = new HashMap<>();

    private final PasswordEncoder passwordEncoder;

    public String login(String userName, HttpServletResponse response) {
        String session = UUID.randomUUID().toString();
        sessionBox.put(session, userName);

        Cookie cookie = new Cookie("userName", session);
        cookie.setMaxAge(5 * 60);
        response.addCookie(cookie);
        log.info(cookie.getValue());

        return cookie.getValue();
    }

    public String signUp(UserRequestDto userRequestDto) { //회원가입
        if (userRepository.existsByUserId(userRequestDto.getUserId())) {
            throw new RuntimeException("해당 ID는 이미 사용되고 있어요!");
        }
        String encodedPassEncoder = passwordEncoder.encode(userRequestDto.getUserPw());
        userRequestDto.setUserPw(encodedPassEncoder);

        log.info(userRequestDto.getUserId());

        userRequestDto.setUserRole(UserRole.USER);

        UserEntity userEntity = userRequestDto.toEntity();
        userRepository.save(userEntity);
        return "회원가입 완료";
    }
}