package com.example.mayoSpringboot.service;

import com.example.mayoSpringboot.dto.usersubjcet.UserSubjectRequestDto;
import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.entity.UserPreSubjectEntity;
import com.example.mayoSpringboot.repository.UserRepository;
import com.example.mayoSpringboot.repository.UserPreSubjectRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserSubjectService {
    private final UserRepository userRepository;
    private final UserPreSubjectRepository userPreSubjectRepository;

    public String add(String userName, UserSubjectRequestDto userSubjectRequestDto){

        userSubjectRequestDto.setUserEntity(userRepository.findByUserName(userName));
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
