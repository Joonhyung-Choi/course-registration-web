package com.example.mayoSpringboot.service;

import com.example.mayoSpringboot.dto.subjcet.UserSubjectRequestDto;
import com.example.mayoSpringboot.dto.subjcet.WaitingRequsetDto;
import com.example.mayoSpringboot.dto.user.UserRequestDto;
import com.example.mayoSpringboot.entity.subjectEntity.WaitingSubjectEntity;
import com.example.mayoSpringboot.repository.WaitingSubjectRepositroy;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WaitingSubjectService {

    private final WaitingSubjectRepositroy waitingSubjectRepositroy;
    public UserRequestDto AddQueueToArticle(UserSubjectRequestDto userSubjectRequestDto){
        WaitingRequsetDto waitingRequsetDto = new WaitingRequsetDto(userSubjectRequestDto);
        WaitingSubjectEntity waitingSubjectEntity = new WaitingSubjectEntity();
        waitingSubjectEntity.update(userSubjectRequestDto);
       // waitingSubjectRepositroy.save(waitingSubjectEntity);

        return

    }
}
