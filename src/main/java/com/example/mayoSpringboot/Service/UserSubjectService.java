package com.example.mayoSpringboot.service;

import com.example.mayoSpringboot.dto.ArticleDto;
import com.example.mayoSpringboot.dto.subjcet.WaitingResponseDto;
import com.example.mayoSpringboot.dto.user.UserRequestDto;
import com.example.mayoSpringboot.dto.subjcet.UserSubjectRequestDto;
import com.example.mayoSpringboot.dto.subjcet.UserSubjectResponseDto;
import com.example.mayoSpringboot.entity.subjectEntity.Article;
import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.entity.subjectEntity.UserSubjectEntity;
import com.example.mayoSpringboot.enumcustom.UserRole;
import com.example.mayoSpringboot.error.ErrorCode;
import com.example.mayoSpringboot.error.exception.ForbiddenException;
import com.example.mayoSpringboot.error.exception.NotFoundException;
import com.example.mayoSpringboot.error.exception.UnAuthorizedException;
import com.example.mayoSpringboot.repository.ArticleRepository;
import com.example.mayoSpringboot.repository.UserRepository;
import com.example.mayoSpringboot.repository.UserSubjectRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static com.example.mayoSpringboot.error.ErrorCode.*;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserSubjectService {
    private final UserRepository userRepository;
    private final UserSubjectRepository userSubjectRepository;
    private final ArticleRepository articleRepository;
    private final WaitingSubjectService waitingSubjectService;
    @Transactional
    public UserRequestDto subjectAdd(String userName, UserSubjectRequestDto userSubjectRequestDto){
        UserEntity userEntity = userRepository.findByUserName(userName);
        UserRequestDto userRequestDto = new UserRequestDto(userEntity);
        if(!userEntity.getUserRole().equals(UserRole.USER)){
            throw new ForbiddenException(ErrorCode.FORBIDDEN_EXCEPTION, "유저계정으로 로그인하세요.");
        }
        //아티클에 신청인원 추가
        Article article = articleRepository.findById(userSubjectRequestDto.getId()).orElseThrow(()->{throw new NotFoundException(NOT_FOUND_EXCEPTION,"E0004");});
        ArticleDto articleDto = new ArticleDto(article);
        //-//
        if (article.getRegister_count() <= 5){
            articleDto.setRegister_count(articleDto.getRegister_count()+1);
            article.update(articleDto);
            articleRepository.save(article);
        }else if(article.getMax_count() <= article.getRegister_count() && article.getRegister_count() < article.getMax_count()+2){
            articleDto.setRegister_count(articleDto.getRegister_count()+1);
            article.update(articleDto);
            waitingSubjectService.subjectToWaiting(userRequestDto, userSubjectRequestDto);
        }else{
            throw new ForbiddenException(IN_EXCEEDED_COUNT,"E00031");
        }


        //신청한 과목의 학점을 유저 학점에서 마이너스
        if (userRequestDto.getUserScore() < userSubjectRequestDto.getScore()){
            throw new ForbiddenException(IN_EXCEEDED_COUNT,"E00031");
        }
        userRequestDto.setUserScore(userRequestDto.getUserScore()-userSubjectRequestDto.getScore());
        userRepository.save(userRequestDto.toEntity());

        userSubjectRequestDto.setUserEntity(userEntity);
        UserSubjectEntity userSubjectEntity = new UserSubjectEntity();
        userSubjectEntity.update(userSubjectRequestDto);
        userSubjectRepository.save(userSubjectEntity);

        return userRequestDto;
    }
    @Transactional
    public List<UserSubjectResponseDto> subjectRead(String user) {
        UserEntity userEntity = userRepository.findByUserName(user);
        if (userEntity == null){throw new UnAuthorizedException(ACCESS_DENIED_EXCEPTION,"E0001");}

        List<UserSubjectEntity> entityList = userSubjectRepository.findByUserSubject(user);
        List<UserSubjectResponseDto> dtoList = new ArrayList<>();
        for (UserSubjectEntity userSubjectEntity : entityList){
            dtoList.add(new UserSubjectResponseDto(userSubjectEntity));
        }
        return dtoList;
    }
    @Transactional
    public UserRequestDto subjectDelete(String user,int subjectId){
        UserEntity userEntity = userRepository.findByUserName(user);
        UserSubjectEntity userSubjectEntity = userSubjectRepository.findByUserEntityIdAndSubjectId(userEntity.getId(),subjectId);
        UserSubjectResponseDto userSubjectResponseDto = new UserSubjectResponseDto(userSubjectEntity); //104줄에서 쓸려고

        //취소한 과목의 학점만큼 유저의 학점 되돌리기
        UserRequestDto userRequestDto  = new UserRequestDto(userEntity);
        userRequestDto.setUserScore(userRequestDto.getUserScore()+userSubjectEntity.getScore());
        userRepository.save(userRequestDto.toEntity());
        userSubjectRepository.delete(userSubjectEntity);

        //대기열이 있으면 add시키기
        Article article = articleRepository.findBySubjectId(subjectId);
        ArticleDto articleDto = new ArticleDto(article);
        //-// 대기열에서 땡겨올거냐
        if (article.getRegister_count() > 5) {
            WaitingResponseDto waitingResponseDto = waitingSubjectService.waitingToSubject(subjectId);
            userSubjectResponseDto.setUserEntity(waitingResponseDto.getUserEntity());
            userSubjectEntity.upDate(userSubjectResponseDto);
            userSubjectRepository.save(userSubjectEntity);
        }
        articleDto.setRegister_count(articleDto.getRegister_count()-1);
        article.update(articleDto);
        articleRepository.save(article);

        return userRequestDto;
    }
}
