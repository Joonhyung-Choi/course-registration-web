package com.example.mayoSpringboot.Service;

import com.example.mayoSpringboot.DTO.UserRequestDto;
import com.example.mayoSpringboot.Entity.UserEntity;
import com.example.mayoSpringboot.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class LoginService {
    private final UserRepository userRepository;

    public String checkUser(UserRequestDto userRequestDto) {
        /*log.info(userRequestDto.getUserId());
        log.info(userRequestDto.getUserPw());*/
        if (!(userRepository.existsByUserId(userRequestDto.getUserId()))) {
            throw new RuntimeException("해당하는 계정이 없습니다.");
        }
        UserEntity userEntity = userRepository.findByUserId(userRequestDto.getUserId());
        if ( !(userRequestDto.getUserPw()).equals(userEntity.getUserPw()) ) {
            throw new RuntimeException("비밀번호가 맞지 않습니다.");
        }
        return "로그인 성공";
    }
    public String signUp(UserRequestDto userRequestDto){
        if( userRepository.existsByUserId(userRequestDto.getUserId())){
            throw new RuntimeException("해당 ID는 이미 사용되고 있어요!");
        }
        UserEntity userEntity = userRequestDto.toEntity();
        userRepository.save(userEntity);
        return "회원가입 완료";
    }
}
