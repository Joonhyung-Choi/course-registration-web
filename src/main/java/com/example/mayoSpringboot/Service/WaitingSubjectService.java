package com.example.mayoSpringboot.service;

import com.example.mayoSpringboot.dto.subjcet.UserSubjectRequestDto;
import com.example.mayoSpringboot.dto.subjcet.WaitingRequsetDto;
import com.example.mayoSpringboot.dto.subjcet.WaitingResponseDto;
import com.example.mayoSpringboot.dto.user.UserRequestDto;
import com.example.mayoSpringboot.entity.subjectEntity.WaitingSubjectEntity;
import com.example.mayoSpringboot.repository.WaitingSubjectRepositroy;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class WaitingSubjectService {

    private final WaitingSubjectRepositroy waitingSubjectRepositroy;

    //해당유저의 웨이팅리스트
    public List<WaitingResponseDto> getWaitingList(String userName){
        List<WaitingSubjectEntity> entityList  = waitingSubjectRepositroy.findByWaitOfUserName(userName);
        return entityList.stream().map(WaitingResponseDto::new).sorted().collect(Collectors.toList());

    }
    //수강신청에서 대기열로 넘어가기
    public UserRequestDto subjectToWaiting(UserRequestDto userRequestDto,UserSubjectRequestDto userSubjectRequestDto){
        WaitingRequsetDto waitingRequsetDto = new WaitingRequsetDto(userSubjectRequestDto);//dto로 바꾸고
        WaitingSubjectEntity waitingSubjectEntity = new WaitingSubjectEntity();//대기열 엔티티 만들고
        waitingSubjectEntity.update(waitingRequsetDto);//대기열 저장
        waitingSubjectRepositroy.save(waitingSubjectEntity);

        return userRequestDto; // 유저 학점이 변동되지 않은거
    }
    //다른 사람이 취소하면 대기열에서 하나 유저 가져와서 삭제하고 수강신청(대기열->수강신청)
    public WaitingResponseDto waitingToSubject(int subjectId){
        ArrayList<WaitingSubjectEntity> entityList = waitingSubjectRepositroy.finByWaitOfSubjectId(subjectId);
        WaitingSubjectEntity entity = entityList.get(0);
        entityList.remove(0);//지우고
        entityList.stream().sorted();//정렬시키기

        WaitingResponseDto waitingResponsDto = new WaitingResponseDto(entity);
        //엔티티 맨 앞에 삭제
        return waitingResponsDto;
    }

    //대기열을 취소할 수 있는 기능
    public String deleteWaitingOfUserAndSubjectId(String userName,int subjectId){
        WaitingSubjectEntity entity = waitingSubjectRepositroy.finByWaitOfUserNameAndSubjectId(userName,subjectId);
        waitingSubjectRepositroy.delete(entity);
        return "삭제 완료";
    }
}

