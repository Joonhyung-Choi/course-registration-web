package com.example.mayoSpringboot.service;

import com.example.mayoSpringboot.dto.ArticleDto;
import com.example.mayoSpringboot.dto.subjcet.UserSubjectRequestDto;
import com.example.mayoSpringboot.dto.waiting.WaitUpdate;
import com.example.mayoSpringboot.dto.waiting.WaitingRequsetDto;
import com.example.mayoSpringboot.dto.waiting.WaitingResponseDto;
import com.example.mayoSpringboot.dto.user.UserRequestDto;
import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.entity.subjectEntity.Article;
import com.example.mayoSpringboot.entity.subjectEntity.WaitingSubjectEntity;
import com.example.mayoSpringboot.repository.ArticleRepository;
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
    private final ArticleRepository articleRepository;
    //해당유저의 웨이팅리스트
    public List<WaitingResponseDto> getWaitingList(String userName){
        List<WaitingSubjectEntity> entityList  = waitingSubjectRepositroy.findByWaitOfUserName(userName);
        return entityList.stream().map(WaitingResponseDto::new).collect(Collectors.toList());

    }
    //수강신청에서 대기열로 넘어가기
    public UserRequestDto subjectToWaiting(UserRequestDto userRequestDto,UserEntity userEntity ,UserSubjectRequestDto userSubjectRequestDto,int waitNum){
        WaitingRequsetDto waitingRequsetDto = new WaitingRequsetDto(userSubjectRequestDto);//dto로 바꾸고
        waitingRequsetDto.setWaitNum(waitNum);//대기번호 부여
        waitingRequsetDto.setUserEntity(userEntity);
        WaitingSubjectEntity waitingSubjectEntity = new WaitingSubjectEntity();
        waitingSubjectEntity.update(waitingRequsetDto);

        List<WaitingSubjectEntity> entityList = waitingSubjectRepositroy.finByWaitOfSubjectId(userSubjectRequestDto.getSubjectId());// null이면 어떡함
        //대기자가 있으면 new 대기자를 리스트의 사이즈 번호+1로 allWait를 주고 and waitNum+1도 사이즈로 줌
        WaitUpdate waitUpdate = new WaitUpdate(entityList.size()+1,entityList.size()+1);//+1은 대기열을 0부터 표현하지 않기위해
        waitingSubjectEntity.adjust(waitUpdate);
        if (entityList.size() == 0){//해당과목에 대기자가 없으면
            waitingSubjectRepositroy.save(waitingSubjectEntity);
            return userRequestDto;
        }

        entityList.add(waitingSubjectEntity); //리스트에 추가
        waitUpdate.setAllWait(entityList.size());
        for (WaitingSubjectEntity entity : entityList){ // 대기하는 총 인원 전부 +1 시킴
            waitUpdate.setWaitNum(entity.getWaitNum());//엔티티 대기번호는 변동하지 않도록
            entity.adjust(waitUpdate);
        }
        waitingSubjectRepositroy.saveAll(entityList);
        return userRequestDto; // 유저 학점이 변동되지 않은거
    }
    //다른 사람이 취소하면 대기열에서 하나 유저 가져와서 삭제하고 수강신청(대기열->수강신청)-------------------------
    public WaitingResponseDto waitingToSubject(int subjectId){
        ArrayList<WaitingSubjectEntity> entityList = waitingSubjectRepositroy.finByWaitOfSubjectId(subjectId);
        WaitingSubjectEntity waitingSubjectEntity = entityList.get(0);
        entityList.remove(0);
        //넘겨줄거 저장
        WaitingResponseDto waitingResponsDto = new WaitingResponseDto(waitingSubjectEntity);
        //엔티티 맨 앞에 삭제
        waitingSubjectRepositroy.delete(waitingSubjectEntity);

        //대기열에 남은것들 allwait / watiNum -1
        WaitUpdate waitUpdate = new WaitUpdate(entityList.size(),entityList.size());

        for (WaitingSubjectEntity entity : entityList){
            waitUpdate.setWaitNum(entity.getWaitNum()-1);
            entity.adjust(waitUpdate);
        }

        return waitingResponsDto;
    }

    //대기열을 취소할 수 있는 기능 -------------------------------------------------------------
    public String deleteWaitingOfUserAndSubjectId(String userName,int subjectId){
        ArrayList<WaitingSubjectEntity> entityList = waitingSubjectRepositroy.finByWaitOfSubjectId(subjectId);
        //삭제할 entity와 이의 인덱스 번호를 찾는다
        WaitingSubjectEntity waitingSubjectEntity = entityList.stream()
                .filter(entity -> entity.getUserEntity().getUserName().equals(userName))
                .findFirst()
                .orElseThrow(() -> new RuntimeException());

        int idx = entityList.indexOf(waitingSubjectEntity);

        WaitUpdate waitUpdate = new WaitUpdate(entityList.size(),entityList.size());
        for(int i = idx; i < entityList.size(); i++){
            waitUpdate.setWaitNum(entityList.get(i).getWaitNum()-1);
            entityList.get(i).adjust(waitUpdate);
        }
        //리스트의 allWait를  -1
        waitUpdate.setAllWait(entityList.size()-1);
        for (WaitingSubjectEntity entity : entityList){
            waitUpdate.setWaitNum(entity.getWaitNum());
            entity.adjust(waitUpdate);
        }
        //삭제하기
        entityList.remove(idx);
        waitingSubjectRepositroy.delete(waitingSubjectEntity);
        waitingSubjectRepositroy.saveAll(entityList);

        Article article = articleRepository.findBySubjectId(subjectId);
        ArticleDto articleDto = new ArticleDto(article);
        articleDto.setWaitingCount(article.getWaitingCount()-1);
        article.update(articleDto);
        articleRepository.save(article);



        //System.out.print(idx.getId());
        return "대기 취소 완료";
    }
}

