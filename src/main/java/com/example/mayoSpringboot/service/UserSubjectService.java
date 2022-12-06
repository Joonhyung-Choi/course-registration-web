package com.example.mayoSpringboot.service;

import com.example.mayoSpringboot.dto.ArticleDto;
import com.example.mayoSpringboot.dto.waiting.WaitingResponseDto;
import com.example.mayoSpringboot.dto.user.UserRequestDto;
import com.example.mayoSpringboot.dto.subjcet.UserSubjectRequestDto;
import com.example.mayoSpringboot.dto.subjcet.UserSubjectResponseDto;
import com.example.mayoSpringboot.entity.subjectEntity.Article;
import com.example.mayoSpringboot.entity.UserEntity;
import com.example.mayoSpringboot.entity.subjectEntity.UserSubjectEntity;
import com.example.mayoSpringboot.enumcustom.UserRole;
import com.example.mayoSpringboot.error.ErrorCode;
import com.example.mayoSpringboot.error.exception.ForbiddenException;
import com.example.mayoSpringboot.error.exception.UnAuthorizedException;
import com.example.mayoSpringboot.repository.ArticleRepository;
import com.example.mayoSpringboot.repository.UserRepository;
import com.example.mayoSpringboot.repository.UserSubjectRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

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
        userSubjectRequestDto.setUserEntity(userEntity);
        if(!userEntity.getUserRole().equals(UserRole.USER)){
            throw new ForbiddenException(ErrorCode.FORBIDDEN_EXCEPTION, "유저계정으로 로그인하세요.");
        }
        //아티클에 신청인원 추가
        Article article = articleRepository.findBySubjectId(userSubjectRequestDto.getSubjectId());
        ArticleDto articleDto = new ArticleDto(article);
        //-//
        if (article.getRegister_count() < article.getMax_count()){ // a < 5 0,1,2,3,4
            articleDto.setRegister_count(articleDto.getRegister_count()+1);
            articleDto.setWaitingCount(article.getWaitingCount()+1);
            article.update(articleDto);
            articleRepository.save(article);
        }else if(article.getMax_count() <= article.getRegister_count() && article.getWaitingCount() < (article.getMax_count()+ Math.round(article.getMax_count()*0.5 ))){ //2명 가능
            articleDto.setWaitingCount(articleDto.getWaitingCount()+1);
            article.update(articleDto);
            articleRepository.save(article);
            return waitingSubjectService.subjectToWaiting(userRequestDto,userEntity, userSubjectRequestDto, article.getWaitingCount() - article.getMax_count());
        }else{
            throw new ForbiddenException(IN_EXCEEDED_COUNT,"E00031");
        }

        //신청한 과목의 학점을 유저 학점에서 마이너스
        if (userRequestDto.getUserScore() < userSubjectRequestDto.getScore()){
            throw new ForbiddenException(IN_EXCEEDED_COUNT,"E00031");
        }
        userRequestDto.setUserScore(userRequestDto.getUserScore()-userSubjectRequestDto.getScore());
        userRepository.save(userRequestDto.toEntity());

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
        List<UserSubjectResponseDto> dtoList = entityList.stream().map(UserSubjectResponseDto::new).collect(Collectors.toList());
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
        //-// 대기열에서 땡겨올거냐
        if (article.getWaitingCount() > article.getMax_count()) { // 웨이팅 카운트가 6,7이면  대기열이 있는거지
            WaitingResponseDto waitingResponseDto = waitingSubjectService.waitingToSubject(subjectId);
            userSubjectResponseDto.setUserEntity(waitingResponseDto.getUserEntity());
            userSubjectEntity.upDate(userSubjectResponseDto);
            userSubjectRepository.save(userSubjectEntity);

            ArticleDto articleDto = new ArticleDto(article);
            articleDto.setWaitingCount(article.getWaitingCount()-1);
            article.update(articleDto);
            articleRepository.save(article);
            return userRequestDto;
        }
        ArticleDto articleDto = new ArticleDto(article);
        articleDto.setRegister_count(articleDto.getRegister_count()-1);
        articleDto.setWaitingCount(article.getWaitingCount()-1);
        article.update(articleDto);
        articleRepository.save(article);

        return userRequestDto;
    }
}
