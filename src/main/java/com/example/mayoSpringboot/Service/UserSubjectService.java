package com.example.mayoSpringboot.service;

import com.example.mayoSpringboot.dto.UserSubjcet.UserSubjectRequestDto;
import com.example.mayoSpringboot.entity.UserSubjectEntity;
import com.example.mayoSpringboot.repository.UserRepository;
import com.example.mayoSpringboot.repository.UserSubjectRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserSubjectService {
    private final UserRepository userRepository;
    private final UserSubjectRepository userSubjectRepository;
    public String update(String userName, UserSubjectRequestDto userSubjectRequestDto){

        userSubjectRequestDto.setUserEntity(userRepository.findByUserName(userName));
        UserSubjectEntity userSubjectEntity = new UserSubjectEntity();
        userSubjectEntity.update(userSubjectRequestDto);
        userSubjectRepository.save(userSubjectEntity);
        return "성공?";
    }
    public Page<UserSubjectEntity> read(Pageable pagealbe){
        return userSubjectRepository.findAll(pagealbe);
    }
}
