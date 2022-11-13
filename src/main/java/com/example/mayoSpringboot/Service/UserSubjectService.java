package com.example.mayoSpringboot.service;

import com.example.mayoSpringboot.dto.usersubjcet.UserSubjectRequestDto;
import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.entity.UserPreSubjectEntity;
import com.example.mayoSpringboot.enumcustom.UserRole;
import com.example.mayoSpringboot.error.ErrorCode;
import com.example.mayoSpringboot.error.exception.ForbiddenException;
import com.example.mayoSpringboot.repository.UserRepository;
import com.example.mayoSpringboot.repository.UserPreSubjectRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.example.mayoSpringboot.error.ErrorCode.FORBIDDEN_EXCEPTION;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserSubjectService {
    private final UserRepository userRepository;
    private final UserPreSubjectRepository userPreSubjectRepository;

    public String add(String userName, UserSubjectRequestDto userSubjectRequestDto){
        UserEntity userEntity = userRepository.findByUserName(userName);
        if(!userEntity.getUserRole().equals(UserRole.USER)){
            throw new ForbiddenException(ErrorCode.FORBIDDEN_EXCEPTION, "유저계정으로 로그인하세요.");
        }
        userSubjectRequestDto.setUserEntity(userEntity);
        UserPreSubjectEntity userPreSubjectEntity = new UserPreSubjectEntity();
        userPreSubjectEntity.update(userSubjectRequestDto);
        userPreSubjectRepository.save(userPreSubjectEntity);
        return "성공?";
    }

    public List<UserPreSubjectEntity> read(String user) {
        UserEntity userEntity = userRepository.findByUserName(user);
        return userPreSubjectRepository.findByUserEntity(userEntity);
    }
    public String delete(String user){
        UserEntity userEntity = userRepository.findByUserName(user);
        /*userPreSubjectRepository.delete();*/
        return "삭제완료";
    }
}
